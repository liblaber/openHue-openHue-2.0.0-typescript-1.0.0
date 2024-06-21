import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetBridgeHomeOkResponse,
  GetBridgeHomesOkResponse,
  getBridgeHomeOkResponseSchema,
  getBridgeHomesOkResponseSchema,
} from './models';

export class BridgeHomeService extends BaseService {
  /**
   * List all available bridge homes.
   * @returns {Promise<HttpResponse<GetBridgeHomesOkResponse>>} Bridge Home Success Response
   */
  async getBridgeHomes(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetBridgeHomesOkResponse>> {
    const path = '/clip/v2/resource/bridge_home';
    const options = {
      responseSchema: getBridgeHomesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Get details of a single bridge home from its given `{bridgeHomeId}`.
   * @param {string} bridgeHomeId - ID of the bridge home.
   * @returns {Promise<HttpResponse<GetBridgeHomeOkResponse>>} Bridge Home Success Response
   */
  async getBridgeHome(
    bridgeHomeId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetBridgeHomeOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/bridge_home/{bridgeHomeId}', {
      bridgeHomeId,
    });
    const options = {
      responseSchema: getBridgeHomeOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }
}
