import { z } from 'zod';
import { error } from '../../resource/models/error';
import { bridgeGet } from './bridge-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getBridgesOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(bridgeGet).optional(),
});

/**
 *
 * @typedef  {GetBridgesOkResponse} getBridgesOkResponse
 * @property {Error[]}
 * @property {BridgeGet[]}
 */
export type GetBridgesOkResponse = z.infer<typeof getBridgesOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getBridgesOkResponseSchema = getBridgesOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getBridgesOkResponseRequest = getBridgesOkResponse;
