import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionColorTemperature = z.object({
  mirek: z.number().gte(153).lte(500).optional(),
});

/**
 *
 * @typedef  {ActionColorTemperature} actionColorTemperature
 * @property {number} - color temperature in mirek or null when the light color is not in the ct spectrum
 */
export type ActionColorTemperature = z.infer<typeof actionColorTemperature>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionColorTemperatureResponse = actionColorTemperature;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionColorTemperatureRequest = actionColorTemperature;
