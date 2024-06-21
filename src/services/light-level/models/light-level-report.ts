import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightLevelReport = z.object({
  changed: z.string().optional(),
  lightLevel: z.number().optional(),
});

/**
 * 
 * @typedef  {LightLevelReport} lightLevelReport   
 * @property {string} - last time the value of this property is changed.
 * @property {number} - Light level in 10000*log10(lux) +1 measured by sensor.
Logarithmic scale used because the human eye adjusts to light levels and small changes at low
lux levels are more noticeable than at high lux levels.
This allows use of linear scale configuration sliders.

 */
export type LightLevelReport = z.infer<typeof lightLevelReport>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightLevelReportResponse = z
  .object({
    changed: z.string().optional(),
    light_level: z.number().optional(),
  })
  .transform((data) => ({
    changed: data['changed'],
    lightLevel: data['light_level'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightLevelReportRequest = lightLevelReport.transform((data) => ({
  changed: data['changed'],
  light_level: data['lightLevel'],
}));
