import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetGroupedLightOkResponse,
  GetGroupedLightsOkResponse,
  GroupedLightPut,
  UpdateGroupedLightOkResponse,
  getGroupedLightOkResponseSchema,
  getGroupedLightsOkResponseSchema,
  groupedLightPutRequest,
  updateGroupedLightOkResponseSchema,
} from './models';

export class GroupedLightService extends BaseService {
  /**
   * List all grouped lights
   * @returns {Promise<HttpResponse<GetGroupedLightsOkResponse>>} Grouped Light Success Response
   */
  async getGroupedLights(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetGroupedLightsOkResponse>> {
    const path = '/clip/v2/resource/grouped_light';
    const options = {
      responseSchema: getGroupedLightsOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single grouped light from its given `{groupedLightId}`.
   * @param {string} groupedLightId - ID of the grouped light
   * @returns {Promise<HttpResponse<GetGroupedLightOkResponse>>} Grouped Light Success Response
   */
  async getGroupedLight(
    groupedLightId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetGroupedLightOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/grouped_light/{groupedLightId}', {
      groupedLightId,
    });
    const options = {
      responseSchema: getGroupedLightOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single grouped light from its given `{groupedLightId}`.
   * @param {string} groupedLightId - ID of the light
   * @returns {Promise<HttpResponse<UpdateGroupedLightOkResponse>>} Success
   */
  async updateGroupedLight(
    groupedLightId: string,
    body: GroupedLightPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateGroupedLightOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/grouped_light/{groupedLightId}', {
      groupedLightId,
    });
    const options = {
      responseSchema: updateGroupedLightOkResponseSchema,
      requestSchema: groupedLightPutRequest,
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
