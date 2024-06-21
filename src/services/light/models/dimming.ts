import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dimming = z.object({
  brightness: z.number().gte(0).lte(100).optional(),
});

/**
 *
 * @typedef  {Dimming} dimming
 * @property {number} - Brightness percentage. value cannot be 0, writing 0 changes it to lowest possible brightness
 */
export type Dimming = z.infer<typeof dimming>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingResponse = dimming;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingRequest = dimming;
