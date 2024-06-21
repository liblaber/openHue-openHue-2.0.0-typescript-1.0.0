import { z } from 'zod';
import { lightArchetype } from './light-archetype';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetMetadata = z.object({
  name: z.string().optional(),
  archetype: lightArchetype.optional(),
  fixedMired: z.number().gte(0).lte(100).optional(),
});

/**
 * Deprecated, use metadata on device level
 * @typedef  {LightGetMetadata} lightGetMetadata - Deprecated, use metadata on device level - Deprecated, use metadata on device level
 * @property {string} - Human readable name of a resource
 * @property {LightArchetype} - Light archetype
 * @property {number} - A fixed mired value of the white lamp
 */
export type LightGetMetadata = z.infer<typeof lightGetMetadata>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetMetadataResponse = z
  .object({
    name: z.string().optional(),
    archetype: lightArchetype.optional(),
    fixed_mired: z.number().gte(0).lte(100).optional(),
  })
  .transform((data) => ({
    name: data['name'],
    archetype: data['archetype'],
    fixedMired: data['fixed_mired'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetMetadataRequest = lightGetMetadata.transform((data) => ({
  name: data['name'],
  archetype: data['archetype'],
  fixed_mired: data['fixedMired'],
}));
