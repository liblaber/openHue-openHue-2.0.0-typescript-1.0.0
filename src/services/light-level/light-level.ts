import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetLightLevelOkResponse,
  GetLightLevelsOkResponse,
  LightLevelPut,
  UpdateLightLevelOkResponse,
  getLightLevelOkResponseSchema,
  getLightLevelsOkResponseSchema,
  lightLevelPutRequest,
  updateLightLevelOkResponseSchema,
} from './models';

export class LightLevelService extends BaseService {
  /**
   * List all available light levels.
   * @returns {Promise<HttpResponse<GetLightLevelsOkResponse>>} Light Level Success Response
   */
  async getLightLevels(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetLightLevelsOkResponse>> {
    const path = '/clip/v2/resource/light_level';
    const options = {
      responseSchema: getLightLevelsOkResponseSchema,
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
   * @returns {Promise<HttpResponse<GetLightLevelOkResponse>>} Light Level Success Response
   */
  async getLightLevel(
    lightId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetLightLevelOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/light_level/{lightId}', { lightId });
    const options = {
      responseSchema: getLightLevelOkResponseSchema,
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
   * @returns {Promise<HttpResponse<UpdateLightLevelOkResponse>>} Success
   */
  async updateLightLevel(
    lightId: string,
    body: LightLevelPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateLightLevelOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/light_level/{lightId}', { lightId });
    const options = {
      responseSchema: updateLightLevelOkResponseSchema,
      requestSchema: lightLevelPutRequest,
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
