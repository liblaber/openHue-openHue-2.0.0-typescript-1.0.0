import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetLightOkResponse,
  GetLightsOkResponse,
  LightPut,
  UpdateLightOkResponse,
  getLightOkResponseSchema,
  getLightsOkResponseSchema,
  lightPutRequest,
  updateLightOkResponseSchema,
} from './models';

export class LightService extends BaseService {
  /**
   * List all available lights.
   * @returns {Promise<HttpResponse<GetLightsOkResponse>>} Light Success Response
   */
  async getLights(requestConfig?: RequestConfig): Promise<HttpResponse<GetLightsOkResponse>> {
    const path = '/clip/v2/resource/light';
    const options = {
      responseSchema: getLightsOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single light from its given `{lightId}`.
   * @param {string} lightId - ID of the light
   * @returns {Promise<HttpResponse<GetLightOkResponse>>} Light Success Response
   */
  async getLight(
    lightId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetLightOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/light/{lightId}', { lightId });
    const options = {
      responseSchema: getLightOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single light from its given `{lightId}`.
   * @param {string} lightId - ID of the light
   * @returns {Promise<HttpResponse<UpdateLightOkResponse>>} Success
   */
  async updateLight(
    lightId: string,
    body: LightPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateLightOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/light/{lightId}', { lightId });
    const options = {
      responseSchema: updateLightOkResponseSchema,
      requestSchema: lightPutRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.put(path, options);
  }
}
