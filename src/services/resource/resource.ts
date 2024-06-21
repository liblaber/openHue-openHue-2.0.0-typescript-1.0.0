import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { GetResourcesOkResponse, getResourcesOkResponseSchema } from './models';

export class ResourceService extends BaseService {
  /**
   * API to retrieve all API resources
   * @returns {Promise<HttpResponse<GetResourcesOkResponse>>} Resource Success Response
   */
  async getResources(requestConfig?: RequestConfig): Promise<HttpResponse<GetResourcesOkResponse>> {
    const path = '/clip/v2/resource';
    const options = {
      responseSchema: getResourcesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }
}
