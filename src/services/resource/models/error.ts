import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const error = z.object({
  description: z.string().optional(),
});

/**
 *
 * @typedef  {Error} error
 * @property {string} - a human-readable explanation specific to this occurrence of the problem.
 */
export type Error = z.infer<typeof error>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const errorResponse = error;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const errorRequest = error;
