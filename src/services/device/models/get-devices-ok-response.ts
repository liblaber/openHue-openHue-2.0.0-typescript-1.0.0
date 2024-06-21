import { z } from 'zod';
import { error } from '../../resource/models/error';
import { deviceGet } from './device-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getDevicesOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(deviceGet).optional(),
});

/**
 *
 * @typedef  {GetDevicesOkResponse} getDevicesOkResponse
 * @property {Error[]}
 * @property {DeviceGet[]}
 */
export type GetDevicesOkResponse = z.infer<typeof getDevicesOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getDevicesOkResponseSchema = getDevicesOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getDevicesOkResponseRequest = getDevicesOkResponse;
