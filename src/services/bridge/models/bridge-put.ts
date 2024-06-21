import { z } from 'zod';
import { bridgePutType } from './bridge-put-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bridgePut = z.object({
  type: bridgePutType.optional(),
});

/**
 *
 * @typedef  {BridgePut} bridgePut
 * @property {BridgePutType}
 */
export type BridgePut = z.infer<typeof bridgePut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bridgePutResponse = bridgePut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bridgePutRequest = bridgePut;
