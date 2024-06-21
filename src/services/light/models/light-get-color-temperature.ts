import { z } from 'zod';
import { mirekSchema } from './mirek-schema';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetColorTemperature = z.object({
  mirek: z.number().gte(153).lte(500).optional(),
  mirekValid: z.boolean().optional(),
  mirekSchema: mirekSchema.optional(),
});

/**
 *
 * @typedef  {LightGetColorTemperature} lightGetColorTemperature
 * @property {number} - color temperature in mirek or null when the light color is not in the ct spectrum
 * @property {boolean} - Indication whether the value presented in mirek is valid
 * @property {MirekSchema}
 */
export type LightGetColorTemperature = z.infer<typeof lightGetColorTemperature>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetColorTemperatureResponse = z
  .object({
    mirek: z.number().gte(153).lte(500).optional(),
    mirek_valid: z.boolean().optional(),
    mirek_schema: mirekSchema.optional(),
  })
  .transform((data) => ({
    mirek: data['mirek'],
    mirekValid: data['mirek_valid'],
    mirekSchema: data['mirek_schema'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetColorTemperatureRequest = lightGetColorTemperature.transform((data) => ({
  mirek: data['mirek'],
  mirek_valid: data['mirekValid'],
  mirek_schema: data['mirekSchema'],
}));
