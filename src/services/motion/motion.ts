import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetMotionSensorOkResponse,
  GetMotionSensorsOkResponse,
  MotionPut,
  UpdateMotionSensorOkResponse,
  getMotionSensorOkResponseSchema,
  getMotionSensorsOkResponseSchema,
  motionPutRequest,
  updateMotionSensorOkResponseSchema,
} from './models';

export class MotionService extends BaseService {
  /**
   * List all available motion sensors.
   * @returns {Promise<HttpResponse<GetMotionSensorsOkResponse>>} Motion Success Response
   */
  async getMotionSensors(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetMotionSensorsOkResponse>> {
    const path = '/clip/v2/resource/motion';
    const options = {
      responseSchema: getMotionSensorsOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single motion sensor from its given `{motionId}`.
   * @param {string} motionId - ID of the motion sensor
   * @returns {Promise<HttpResponse<GetMotionSensorOkResponse>>} Motion Success Response
   */
  async getMotionSensor(
    motionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetMotionSensorOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/motion/{motionId}', { motionId });
    const options = {
      responseSchema: getMotionSensorOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single motion sensor from its given `{motionId}`.
   * @param {string} motionId - Id of the motion sensor
   * @returns {Promise<HttpResponse<UpdateMotionSensorOkResponse>>} Success
   */
  async updateMotionSensor(
    motionId: string,
    body: MotionPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateMotionSensorOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/motion/{motionId}', { motionId });
    const options = {
      responseSchema: updateMotionSensorOkResponseSchema,
      requestSchema: motionPutRequest,
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
