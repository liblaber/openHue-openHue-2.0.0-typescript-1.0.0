import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseError = z.object({
  type: z.number().optional(),
  address: z.string().optional(),
  description: z.string().optional(),
});

/**
 *
 * @typedef  {ResponseError} responseError
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type ResponseError = z.infer<typeof responseError>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseErrorResponse = responseError;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseErrorRequest = responseError;
