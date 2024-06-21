import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const success = z.object({
  username: z.string().optional(),
  clientkey: z.string().optional(),
});

/**
 *
 * @typedef  {Success} success
 * @property {string}
 * @property {string}
 */
export type Success = z.infer<typeof success>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const successResponse = success;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const successRequest = success;
