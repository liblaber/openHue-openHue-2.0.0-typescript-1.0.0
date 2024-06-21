import { z } from 'zod';
import { error } from '../../resource/models/error';
import { deviceGet } from './device-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getDeviceOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(deviceGet).optional(),
});

/**
 *
 * @typedef  {GetDeviceOkResponse} getDeviceOkResponse
 * @property {Error[]}
 * @property {DeviceGet[]}
 */
export type GetDeviceOkResponse = z.infer<typeof getDeviceOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getDeviceOkResponseSchema = getDeviceOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getDeviceOkResponseRequest = getDeviceOkResponse;
