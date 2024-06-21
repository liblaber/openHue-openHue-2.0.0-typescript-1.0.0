import { z } from 'zod';
import { error } from '../../resource/models/error';
import { devicePowerGet } from './device-power-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getDevicePowersOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(devicePowerGet).optional(),
});

/**
 *
 * @typedef  {GetDevicePowersOkResponse} getDevicePowersOkResponse
 * @property {Error[]}
 * @property {DevicePowerGet[]}
 */
export type GetDevicePowersOkResponse = z.infer<typeof getDevicePowersOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getDevicePowersOkResponseSchema = getDevicePowersOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getDevicePowersOkResponseRequest = getDevicePowersOkResponse;
