import { z } from 'zod';
import { onMode_1 } from './on-mode-1';
import { on } from './on';

/**
 * The shape of the model inside the application code - what the users use
 */
export const powerupOn_1 = z.object({
  mode: onMode_1.optional(),
  on: on.optional(),
});

/**
 * 
 * @typedef  {PowerupOn_1} powerupOn_1   
 * @property {OnMode_1} - State to activate after powerup.
On will use the value specified in the “on” property.
When setting mode “on”, the on property must be included.
Toggle will alternate between on and off on each subsequent power toggle.
Previous will return to the state it was in before powering off.

 * @property {On} 
 */
export type PowerupOn_1 = z.infer<typeof powerupOn_1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupOn_1Response = powerupOn_1;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupOn_1Request = powerupOn_1;
