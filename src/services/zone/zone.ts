import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  CreateZoneOkResponse,
  DeleteZoneOkResponse,
  GetZoneOkResponse,
  GetZonesOkResponse,
  UpdateZoneOkResponse,
  createZoneOkResponseSchema,
  deleteZoneOkResponseSchema,
  getZoneOkResponseSchema,
  getZonesOkResponseSchema,
  updateZoneOkResponseSchema,
} from './models';
import { RoomPut, roomPutRequest } from '../room/models';

export class ZoneService extends BaseService {
  /**
   * List all available zones
   * @returns {Promise<HttpResponse<GetZonesOkResponse>>} Zone Success Response
   */
  async getZones(requestConfig?: RequestConfig): Promise<HttpResponse<GetZonesOkResponse>> {
    const path = '/clip/v2/resource/zone';
    const options = {
      responseSchema: getZonesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Create a new zone
   * @returns {Promise<HttpResponse<CreateZoneOkResponse>>} Success
   */
  async createZone(
    body: RoomPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateZoneOkResponse>> {
    const path = '/clip/v2/resource/zone';
    const options = {
      responseSchema: createZoneOkResponseSchema,
      requestSchema: roomPutRequest,
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

  /**
   * Get details of a single Zone from its given `{zoneId}`
   * @param {string} zoneId - ID of the Zone
   * @returns {Promise<HttpResponse<GetZoneOkResponse>>} Zone Success Response
   */
  async getZone(
    zoneId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetZoneOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/zone/{zoneId}', { zoneId });
    const options = {
      responseSchema: getZoneOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single Zone from its given `{zoneId}`
   * @param {string} zoneId - ID of the Zone
   * @returns {Promise<HttpResponse<UpdateZoneOkResponse>>} Success
   */
  async updateZone(
    zoneId: string,
    body: RoomPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateZoneOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/zone/{zoneId}', { zoneId });
    const options = {
      responseSchema: updateZoneOkResponseSchema,
      requestSchema: roomPutRequest,
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

  /**
   * Delete a single Zone from its given `{zoneId}`
   * @param {string} zoneId - ID of the Zone
   * @returns {Promise<HttpResponse<DeleteZoneOkResponse>>} Success
   */
  async deleteZone(
    zoneId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeleteZoneOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/zone/{zoneId}', { zoneId });
    const options = {
      responseSchema: deleteZoneOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.delete(path, options);
  }
}
