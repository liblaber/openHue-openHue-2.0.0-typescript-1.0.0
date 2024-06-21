import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { AuthenticateRequest, Response, authenticateRequestSchema, responseSchema } from './models';

export class AuthService extends BaseService {
  /**
   * Authenticate to retrieve the HUE application key. Requires to go and press the button on the bridge
   * @returns {Promise<HttpResponse<Response[]>>} Authentication Success
   */
  async authenticate(
    body: AuthenticateRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Response[]>> {
    const path = '/api';
    const options = {
      responseSchema: z.array(responseSchema),
      requestSchema: authenticateRequestSchema,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.post(path, options);
  }
}
