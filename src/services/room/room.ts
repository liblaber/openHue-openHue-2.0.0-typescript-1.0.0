import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  CreateRoomOkResponse,
  DeleteRoomOkResponse,
  GetRoomOkResponse,
  GetRoomsOkResponse,
  RoomPut,
  UpdateRoomOkResponse,
  createRoomOkResponseSchema,
  deleteRoomOkResponseSchema,
  getRoomOkResponseSchema,
  getRoomsOkResponseSchema,
  roomPutRequest,
  updateRoomOkResponseSchema,
} from './models';

export class RoomService extends BaseService {
  /**
   * List all available rooms
   * @returns {Promise<HttpResponse<GetRoomsOkResponse>>} Room Success Response
   */
  async getRooms(requestConfig?: RequestConfig): Promise<HttpResponse<GetRoomsOkResponse>> {
    const path = '/clip/v2/resource/room';
    const options = {
      responseSchema: getRoomsOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Create a new room
   * @returns {Promise<HttpResponse<CreateRoomOkResponse>>} Success
   */
  async createRoom(
    body: RoomPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateRoomOkResponse>> {
    const path = '/clip/v2/resource/room';
    const options = {
      responseSchema: createRoomOkResponseSchema,
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
   * Get details of a single room from its given `{roomId}`
   * @param {string} roomId - ID of the room
   * @returns {Promise<HttpResponse<GetRoomOkResponse>>} Room Success Response
   */
  async getRoom(
    roomId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetRoomOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/room/{roomId}', { roomId });
    const options = {
      responseSchema: getRoomOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.get(path, options);
  }

  /**
   * Update a single room from its given `{roomId}`
   * @param {string} roomId - ID of the room
   * @returns {Promise<HttpResponse<UpdateRoomOkResponse>>} Success
   */
  async updateRoom(
    roomId: string,
    body: RoomPut,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateRoomOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/room/{roomId}', { roomId });
    const options = {
      responseSchema: updateRoomOkResponseSchema,
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
   * Delete a single room from its given `{roomId}`
   * @param {string} roomId - ID of the room
   * @returns {Promise<HttpResponse<DeleteRoomOkResponse>>} Success
   */
  async deleteRoom(
    roomId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeleteRoomOkResponse>> {
    const path = this.client.buildPath('/clip/v2/resource/room/{roomId}', { roomId });
    const options = {
      responseSchema: deleteRoomOkResponseSchema,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };

    return this.client.delete(path, options);
  }
}
