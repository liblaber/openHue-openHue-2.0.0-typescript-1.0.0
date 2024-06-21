import { z } from 'zod';
import { error } from '../../resource/models/error';
import { roomGet } from './room-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getRoomOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(roomGet).optional(),
});

/**
 *
 * @typedef  {GetRoomOkResponse} getRoomOkResponse
 * @property {Error[]}
 * @property {RoomGet[]}
 */
export type GetRoomOkResponse = z.infer<typeof getRoomOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getRoomOkResponseSchema = getRoomOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getRoomOkResponseRequest = getRoomOkResponse;
