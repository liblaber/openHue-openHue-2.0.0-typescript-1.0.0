import { z } from 'zod';
import { roomArchetype } from './room-archetype';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomGetMetadata = z.object({
  name: z.string().optional(),
  archetype: roomArchetype.optional(),
});

/**
 * configuration object for a room
 * @typedef  {RoomGetMetadata} roomGetMetadata - configuration object for a room - configuration object for a room
 * @property {string} - Human readable name of a resource
 * @property {RoomArchetype} - Possible archetypes of a room
 */
export type RoomGetMetadata = z.infer<typeof roomGetMetadata>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomGetMetadataResponse = roomGetMetadata;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomGetMetadataRequest = roomGetMetadata;
