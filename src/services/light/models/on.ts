import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const on = z.object({
  on: z.boolean().optional(),
});

/**
 *
 * @typedef  {On} on
 * @property {boolean} - On/Off state of the light on=true, off=false
 */
export type On = z.infer<typeof on>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const onResponse = on;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const onRequest = on;
