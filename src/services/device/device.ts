import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  DeleteDeviceOkResponse,
  DevicePut,
  GetDeviceOkResponse,
  GetDevicesOkResponse,
  UpdateDeviceOkResponse,
  deleteDeviceOkResponseSchema,
  devicePutRequest,
  getDeviceOkResponseSchema,
  getDevicesOkResponseSchema,
  updateDeviceOkResponseSchema,
} from './models';

export class DeviceService extends BaseService {
  /**
   * List all available devices
   * @returns {Promise<HttpResponse<GetDevicesOkResponse>>} Device Success Response
   */
  async getDevices(requestConfig?: RequestConfig): Promise<HttpResponse<GetDevicesOkResponse>> {
    const path = '/clip/v2/resource/device';
    const options = {
      responseSchema: getDevicesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single device from its given `{deviceId}`.
   * @param {string} deviceId - ID of the device
   * @returns {Promise<HttpResponse<GetDeviceOkResponse>>} Device Success Response
   */
  async getDevice(
    deviceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetDeviceOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/device/{deviceId}', { deviceId });
    const options = {
      responseSchema: getDeviceOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single device from its given `{deviceId}`.
   * @param {string} deviceId - ID of the device
   * @returns {Promise<HttpResponse<UpdateDeviceOkResponse>>} Success
   */
  async updateDevice(
    deviceId: string,
    body: DevicePut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateDeviceOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/device/{deviceId}', { deviceId });
    const options = {
      responseSchema: updateDeviceOkResponseSchema,
      requestSchema: devicePutRequest,
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
   * Delete a single Device from its given `{deviceId}`. The `bridge` device cannot be deleted.
   * @param {string} deviceId - ID of the Device
   * @returns {Promise<HttpResponse<DeleteDeviceOkResponse>>} Success
   */
  async deleteDevice(
    deviceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeleteDeviceOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/device/{deviceId}', { deviceId });
    const options = {
      responseSchema: deleteDeviceOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.delete(path, options);
  }
}
