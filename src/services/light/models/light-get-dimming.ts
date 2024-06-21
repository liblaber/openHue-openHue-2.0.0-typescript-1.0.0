import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetDimming = z.object({
  brightness: z.number().gte(0).lte(100).optional(),
  minDimLevel: z.number().gte(0).lte(100).optional(),
});

/**
 *
 * @typedef  {LightGetDimming} lightGetDimming
 * @property {number} - Brightness percentage. value cannot be 0, writing 0 changes it to lowest possible brightness
 * @property {number} - Percentage of the maximum lumen the device outputs on minimum brightness
 */
export type LightGetDimming = z.infer<typeof lightGetDimming>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetDimmingResponse = z
  .object({
    brightness: z.number().gte(0).lte(100).optional(),
    min_dim_level: z.number().gte(0).lte(100).optional(),
  })
  .transform((data) => ({
    brightness: data['brightness'],
    minDimLevel: data['min_dim_level'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetDimmingRequest = lightGetDimming.transform((data) => ({
  brightness: data['brightness'],
  min_dim_level: data['minDimLevel'],
}));
