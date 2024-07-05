// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const on = z.object({
  on1: z.boolean().optional(),
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
export const onResponse = z
  .object({
    on: z.boolean().optional(),
  })
  .transform((data) => ({
    on1: data['on'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const onRequest = z.object({ on1: z.boolean().nullish() }).transform((data) => ({
  on: data['on1'],
}));