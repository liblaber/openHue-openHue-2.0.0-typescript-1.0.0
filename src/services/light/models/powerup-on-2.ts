// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { onMode2 } from './on-mode-2';
import { on, onRequest, onResponse } from '../../common/on';

/**
 * The shape of the model inside the application code - what the users use
 */
export const powerupOn2 = z.object({
  mode: onMode2.optional(),
  on: on.optional(),
});

/**
 * 
 * @typedef  {PowerupOn2} powerupOn2   
 * @property {OnMode2} - State to activate after powerup.
On will use the value specified in the “on” property.
When setting mode “on”, the on property must be included.
Toggle will alternate between on and off on each subsequent power toggle.
Previous will return to the state it was in before powering off.

 * @property {On} 
 */
export type PowerupOn2 = z.infer<typeof powerupOn2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupOn2Response = z
  .object({
    mode: onMode2.optional(),
    on: onResponse.optional(),
  })
  .transform((data) => ({
    mode: data['mode'],
    on: data['on'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupOn2Request = z.object({ mode: onMode2.nullish(), on: onRequest.nullish() }).transform((data) => ({
  mode: data['mode'],
  on: data['on'],
}));
