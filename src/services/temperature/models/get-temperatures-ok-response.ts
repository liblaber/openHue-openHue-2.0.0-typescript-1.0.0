import { z } from 'zod';
import { error } from '../../resource/models/error';
import { temperatureGet } from './temperature-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getTemperaturesOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(temperatureGet).optional(),
});

/**
 *
 * @typedef  {GetTemperaturesOkResponse} getTemperaturesOkResponse
 * @property {Error[]}
 * @property {TemperatureGet[]}
 */
export type GetTemperaturesOkResponse = z.infer<typeof getTemperaturesOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getTemperaturesOkResponseSchema = getTemperaturesOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getTemperaturesOkResponseRequest = getTemperaturesOkResponse;
