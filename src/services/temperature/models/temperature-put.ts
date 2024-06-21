import { z } from 'zod';
import { temperaturePutType } from './temperature-put-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const temperaturePut = z.object({
  type: temperaturePutType.optional(),
  enabled: z.boolean().optional(),
});

/**
 *
 * @typedef  {TemperaturePut} temperaturePut
 * @property {TemperaturePutType} - Type of the supported resources (always `temperature` here)
 * @property {boolean} - true when sensor is activated, false when deactivated
 */
export type TemperaturePut = z.infer<typeof temperaturePut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const temperaturePutResponse = temperaturePut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const temperaturePutRequest = temperaturePut;
