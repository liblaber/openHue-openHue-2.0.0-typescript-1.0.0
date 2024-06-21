import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightLevelPut = z.object({
  type: z.string().optional(),
  enabled: z.boolean().optional(),
});

/**
 *
 * @typedef  {LightLevelPut} lightLevelPut
 * @property {string} - Type of the supported resources (always `light_level` here)
 * @property {boolean} - true when sensor is activated, false when deactivated
 */
export type LightLevelPut = z.infer<typeof lightLevelPut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightLevelPutResponse = lightLevelPut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightLevelPutRequest = lightLevelPut;
