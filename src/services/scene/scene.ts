import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  CreateSceneOkResponse,
  DeleteSceneOkResponse,
  GetSceneOkResponse,
  GetScenesOkResponse,
  ScenePost,
  ScenePut,
  UpdateSceneOkResponse,
  createSceneOkResponseSchema,
  deleteSceneOkResponseSchema,
  getSceneOkResponseSchema,
  getScenesOkResponseSchema,
  scenePostRequest,
  scenePutRequest,
  updateSceneOkResponseSchema,
} from './models';

export class SceneService extends BaseService {
  /**
   * List all available scenes
   * @returns {Promise<HttpResponse<GetScenesOkResponse>>} Scene Success Response
   */
  async getScenes(requestConfig?: RequestConfig): Promise<HttpResponse<GetScenesOkResponse>> {
    const path = '/clip/v2/resource/scene';
    const options = {
      responseSchema: getScenesOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Creates a new scene
   * @returns {Promise<HttpResponse<CreateSceneOkResponse>>} Success
   */
  async createScene(
    body: ScenePost,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateSceneOkResponse>> {
    const path = '/clip/v2/resource/scene';
    const options = {
      responseSchema: createSceneOkResponseSchema,
      requestSchema: scenePostRequest,
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
   * Get details of a single scene from its given `{sceneId}`
   * @param {string} sceneId - ID of the scene.
   * @returns {Promise<HttpResponse<GetSceneOkResponse>>} Scene Success Response
   */
  async getScene(
    sceneId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetSceneOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/scene/{sceneId}', { sceneId });
    const options = {
      responseSchema: getSceneOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single scene from its given `{sceneId}`
   * @param {string} sceneId - ID of the scene.
   * @returns {Promise<HttpResponse<UpdateSceneOkResponse>>} Success
   */
  async updateScene(
    sceneId: string,
    body: ScenePut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateSceneOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/scene/{sceneId}', { sceneId });
    const options = {
      responseSchema: updateSceneOkResponseSchema,
      requestSchema: scenePutRequest,
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
   * Delete a single scene from its given `{sceneId}`
   * @param {string} sceneId - ID of the scene.
   * @returns {Promise<HttpResponse<DeleteSceneOkResponse>>} Success
   */
  async deleteScene(
    sceneId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeleteSceneOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/scene/{sceneId}', { sceneId });
    const options = {
      responseSchema: deleteSceneOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.delete(path, options);
  }
}
