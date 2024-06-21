import { z } from 'zod';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { roomPutMetadata } from './room-put-metadata';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomPut = z.object({
  type: z.string().optional(),
  children: z.array(resourceIdentifier).optional(),
  metadata: roomPutMetadata.optional(),
});

/**
 *
 * @typedef  {RoomPut} roomPut
 * @property {string} - Type of the supported resources (always `room` here)
 * @property {ResourceIdentifier[]} - Child devices/services to group by the derived group
 * @property {RoomPutMetadata} - configuration object for a room
 */
export type RoomPut = z.infer<typeof roomPut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomPutResponse = roomPut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomPutRequest = roomPut;
