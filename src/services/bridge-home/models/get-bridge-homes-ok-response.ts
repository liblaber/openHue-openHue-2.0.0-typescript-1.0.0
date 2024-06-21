import { z } from 'zod';
import { error } from '../../resource/models/error';
import { bridgeHomeGet } from './bridge-home-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getBridgeHomesOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(bridgeHomeGet).optional(),
});

/**
 *
 * @typedef  {GetBridgeHomesOkResponse} getBridgeHomesOkResponse
 * @property {Error[]}
 * @property {BridgeHomeGet[]}
 */
export type GetBridgeHomesOkResponse = z.infer<typeof getBridgeHomesOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getBridgeHomesOkResponseSchema = getBridgeHomesOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getBridgeHomesOkResponseRequest = getBridgeHomesOkResponse;
