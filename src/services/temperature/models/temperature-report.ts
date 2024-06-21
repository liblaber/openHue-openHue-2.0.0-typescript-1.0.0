import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const temperatureReport = z.object({
  changed: z.string().optional(),
  temperature: z.number().optional(),
});

/**
 *
 * @typedef  {TemperatureReport} temperatureReport
 * @property {string} - last time the value of this property is changed.
 * @property {number} - Temperature in 1.00 degrees Celsius
 */
export type TemperatureReport = z.infer<typeof temperatureReport>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const temperatureReportResponse = temperatureReport;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const temperatureReportRequest = temperatureReport;
