import { z } from 'zod';
import { productArchetype } from './product-archetype';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deviceGetMetadata = z.object({
  name: z.string().min(1).max(32).optional(),
  archetype: productArchetype.optional(),
});

/**
 *
 * @typedef  {DeviceGetMetadata} deviceGetMetadata
 * @property {string} - Human readable name of a resource
 * @property {ProductArchetype} - The default archetype given by manufacturer. Can be changed by user.
 */
export type DeviceGetMetadata = z.infer<typeof deviceGetMetadata>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceGetMetadataResponse = deviceGetMetadata;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceGetMetadataRequest = deviceGetMetadata;
