import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetDevicePowerOkResponse,
  GetDevicePowersOkResponse,
  getDevicePowerOkResponseSchema,
  getDevicePowersOkResponseSchema,
} from './models';

export class DevicePowerService extends BaseService {
  /**
   * List all available device powers
   * @returns {Promise<HttpResponse<GetDevicePowersOkResponse>>} Device Power Success Response
   */
  async getDevicePowers(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetDevicePowersOkResponse>> {
    const path = '/clip/v2/resource/device_power';
    const options = {
      responseSchema: getDevicePowersOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get power details of a single device from its given `{deviceId}`.
   * @param {string} deviceId - ID of the device
   * @returns {Promise<HttpResponse<GetDevicePowerOkResponse>>} Device Success Response
   */
  async getDevicePower(
    deviceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetDevicePowerOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/device_power/{deviceId}', { deviceId });
    const options = {
      responseSchema: getDevicePowerOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }
}