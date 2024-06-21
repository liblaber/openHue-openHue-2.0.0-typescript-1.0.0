import { z } from 'zod';
import { lightLevelReport } from './light-level-report';

/**
 * The shape of the model inside the application code - what the users use
 */
export const light = z.object({
  lightLevel: z.number().optional(),
  lightLevelValid: z.boolean().optional(),
  lightLevelReport: lightLevelReport.optional(),
});

/**
 *
 * @typedef  {Light} light
 * @property {number} - Deprecated. Moved to light_level_report/light_level
 * @property {boolean} - Deprecated. Indication whether the value presented in light_level is valid
 * @property {LightLevelReport}
 */
export type Light = z.infer<typeof light>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightResponse = z
  .object({
    light_level: z.number().optional(),
    light_level_valid: z.boolean().optional(),
    light_level_report: lightLevelReport.optional(),
  })
  .transform((data) => ({
    lightLevel: data['light_level'],
    lightLevelValid: data['light_level_valid'],
    lightLevelReport: data['light_level_report'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightRequest = light.transform((data) => ({
  light_level: data['lightLevel'],
  light_level_valid: data['lightLevelValid'],
  light_level_report: data['lightLevelReport'],
}));
