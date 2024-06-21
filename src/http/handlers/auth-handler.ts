import { HttpRequest, HttpResponse, RequestHandler } from '../types';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: HttpRequest<T>): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addApiKeyHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next?.handle(requestWithAuth);
  }

  private addApiKeyHeader<T>(request: HttpRequest<T>): HttpRequest<T> {
    const apiKey = request.config?.apiKey;
    const apiKeyHeader = request.config?.apiKeyHeader ?? 'X-API-KEY';
    if (!apiKey) {
      return request;
    }

    const headers = request.headers ?? {};

    headers[apiKeyHeader] = apiKey;

    return {
      ...request,
      headers,
    };
  }
}
