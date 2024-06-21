import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const colorTemperature = z.object({
  mirek: z.number().gte(153).lte(500).optional(),
});

/**
 *
 * @typedef  {ColorTemperature} colorTemperature
 * @property {number} - color temperature in mirek or null when the light color is not in the ct spectrum
 */
export type ColorTemperature = z.infer<typeof colorTemperature>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const colorTemperatureResponse = colorTemperature;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const colorTemperatureRequest = colorTemperature;
