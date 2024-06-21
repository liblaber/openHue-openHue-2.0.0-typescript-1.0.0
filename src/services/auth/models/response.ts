import { z } from 'zod';
import { success } from './success';
import { responseError } from './response-error';

/**
 * The shape of the model inside the application code - what the users use
 */
export const response = z.object({
  success: success.optional(),
  error: responseError.optional(),
});

/**
 *
 * @typedef  {Response} response
 * @property {Success}
 * @property {ResponseError}
 */
export type Response = z.infer<typeof response>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseSchema = response;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseRequest = response;
