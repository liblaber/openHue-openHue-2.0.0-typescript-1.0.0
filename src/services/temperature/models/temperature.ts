import { z } from 'zod';
import { temperatureReport } from './temperature-report';

/**
 * The shape of the model inside the application code - what the users use
 */
export const temperature = z.object({
  temperature: z.number().optional(),
  temperatureValid: z.boolean().optional(),
  temperatureReport: temperatureReport.optional(),
});

/**
 *
 * @typedef  {Temperature} temperature
 * @property {number} - Deprecated. Moved to Temperature_report/temperature
 * @property {boolean} - Deprecated. Indication whether the value presented in temperature is valid
 * @property {TemperatureReport}
 */
export type Temperature = z.infer<typeof temperature>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const temperatureResponse = z
  .object({
    temperature: z.number().optional(),
    temperature_valid: z.boolean().optional(),
    temperature_report: temperatureReport.optional(),
  })
  .transform((data) => ({
    temperature: data['temperature'],
    temperatureValid: data['temperature_valid'],
    temperatureReport: data['temperature_report'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const temperatureRequest = temperature.transform((data) => ({
  temperature: data['temperature'],
  temperature_valid: data['temperatureValid'],
  temperature_report: data['temperatureReport'],
}));
