import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetTemperatureOkResponse,
  GetTemperaturesOkResponse,
  TemperaturePut,
  UpdateTemperatureOkResponse,
  getTemperatureOkResponseSchema,
  getTemperaturesOkResponseSchema,
  temperaturePutRequest,
  updateTemperatureOkResponseSchema,
} from './models';

export class TemperatureService extends BaseService {
  /**
   * List all temperatures
   * @returns {Promise<HttpResponse<GetTemperaturesOkResponse>>} Temperature Success Response
   */
  async getTemperatures(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetTemperaturesOkResponse>> {
    const path = '/clip/v2/resource/temperature';
    const options = {
      responseSchema: getTemperaturesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single temperature sensor from its given `{temperatureId}`.
   * @param {string} temperatureId - ID of the temperature sensor
   * @returns {Promise<HttpResponse<GetTemperatureOkResponse>>} Temperature Success Response
   */
  async getTemperature(
    temperatureId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetTemperatureOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/temperature/{temperatureId}', {
      temperatureId,
    });
    const options = {
      responseSchema: getTemperatureOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a temperature sensor from its given `{temperatureId}`.
   * @param {string} temperatureId - ID of the temperature sensor
   * @returns {Promise<HttpResponse<UpdateTemperatureOkResponse>>} Success
   */
  async updateTemperature(
    temperatureId: string,
    body: TemperaturePut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateTemperatureOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/temperature/{temperatureId}', {
      temperatureId,
    });
    const options = {
      responseSchema: updateTemperatureOkResponseSchema,
      requestSchema: temperaturePutRequest,
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
