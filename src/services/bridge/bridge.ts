import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  BridgePut,
  GetBridgeOkResponse,
  GetBridgesOkResponse,
  UpdateBridgeOkResponse,
  bridgePutRequest,
  getBridgeOkResponseSchema,
  getBridgesOkResponseSchema,
  updateBridgeOkResponseSchema,
} from './models';

export class BridgeService extends BaseService {
  /**
   * List all available bridges
   * @returns {Promise<HttpResponse<GetBridgesOkResponse>>} Bridge Success Response
   */
  async getBridges(requestConfig?: RequestConfig): Promise<HttpResponse<GetBridgesOkResponse>> {
    const path = '/clip/v2/resource/bridge';
    const options = {
      responseSchema: getBridgesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single bridge from its given `{bridgeId}`.
   * @param {string} bridgeId - ID of the bridge
   * @returns {Promise<HttpResponse<GetBridgeOkResponse>>} Bridge Success Response
   */
  async getBridge(
    bridgeId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetBridgeOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/bridge/{bridgeId}', { bridgeId });
    const options = {
      responseSchema: getBridgeOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single bridge from its given `{bridgeId}`.
   * @param {string} bridgeId - ID of the bridge
   * @returns {Promise<HttpResponse<UpdateBridgeOkResponse>>} Success
   */
  async updateBridge(
    bridgeId: string,
    body: BridgePut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateBridgeOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/bridge/{bridgeId}', { bridgeId });
    const options = {
      responseSchema: updateBridgeOkResponseSchema,
      requestSchema: bridgePutRequest,
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
