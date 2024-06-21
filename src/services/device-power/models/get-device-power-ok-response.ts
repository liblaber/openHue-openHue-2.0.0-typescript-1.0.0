import { z } from 'zod';
import { error } from '../../resource/models/error';
import { devicePowerGet } from './device-power-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getDevicePowerOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(devicePowerGet).optional(),
});

/**
 *
 * @typedef  {GetDevicePowerOkResponse} getDevicePowerOkResponse
 * @property {Error[]}
 * @property {DevicePowerGet[]}
 */
export type GetDevicePowerOkResponse = z.infer<typeof getDevicePowerOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getDevicePowerOkResponseSchema = getDevicePowerOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getDevicePowerOkResponseRequest = getDevicePowerOkResponse;
