import { ContentType, HttpRequest, HttpResponse, RequestHandler } from '../types';
import { HttpError } from '../error';

export class RequestValidationHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: HttpRequest<T>): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in ContentTypeHandler.');
    }

    if (request.requestContentType === ContentType.Json) {
      request.body = JSON.stringify(request.requestSchema.parse(request.body));
    } else if (
      request.requestContentType === ContentType.Xml ||
      request.requestContentType === ContentType.Binary ||
      request.requestContentType === ContentType.Text
    ) {
      request.body = request.body;
    } else if (request.requestContentType === ContentType.FormUrlEncoded) {
      request.body = this.toFormUrlEncoded(request.body as object);
    } else if (request.requestContentType === ContentType.MultipartFormData) {
      request.body = this.toFormData(request.body as object);
    } else {
      request.body = JSON.stringify(request.requestSchema.parse(request.body));
    }

    return await this.next.handle(request);
  }

  toFormUrlEncoded(request: object): string {
    return Object.keys(request)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(request[key]))
      .join('&');
  }

  toFormData(request: object): FormData {
    const formData = new FormData();

    Object.keys(request).forEach((key) => {
      const value: any = request[key];
      if (Array.isArray(value)) {
        value.forEach((v, i) => formData.append(`${key}[${i}]`, v));
      } else {
        formData.append(key, value);
      }
    });

    return formData;
  }
}
