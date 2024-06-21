import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const alert = z.object({
  action: z.string().optional(),
});

/**
 * Joined alert control
 * @typedef  {Alert} alert - Joined alert control - Joined alert control
 * @property {string}
 */
export type Alert = z.infer<typeof alert>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const alertResponse = alert;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const alertRequest = alert;
