import { z } from 'zod';
import { color } from './color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const colorColorTemperature_2 = z.object({
  mirek: z.number().gte(153).lte(500).optional(),
  color: color.optional(),
});

/**
 *
 * @typedef  {ColorColorTemperature_2} colorColorTemperature_2
 * @property {number} - color temperature in mirek or null when the light color is not in the ct spectrum
 * @property {Color}
 */
export type ColorColorTemperature_2 = z.infer<typeof colorColorTemperature_2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const colorColorTemperature_2Response = colorColorTemperature_2;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const colorColorTemperature_2Request = colorColorTemperature_2;
