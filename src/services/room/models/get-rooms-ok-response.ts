import { z } from 'zod';
import { error } from '../../resource/models/error';
import { roomGet } from './room-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getRoomsOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(roomGet).optional(),
});

/**
 *
 * @typedef  {GetRoomsOkResponse} getRoomsOkResponse
 * @property {Error[]}
 * @property {RoomGet[]}
 */
export type GetRoomsOkResponse = z.infer<typeof getRoomsOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getRoomsOkResponseSchema = getRoomsOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getRoomsOkResponseRequest = getRoomsOkResponse;
