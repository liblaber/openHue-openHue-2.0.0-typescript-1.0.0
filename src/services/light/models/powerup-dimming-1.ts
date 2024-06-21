import { z } from 'zod';
import { dimmingMode_1 } from './dimming-mode-1';
import { dimming } from './dimming';
import { dimmingColor_1 } from './dimming-color-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const powerupDimming_1 = z.object({
  mode: dimmingMode_1.optional(),
  dimming: dimming.optional(),
  color: dimmingColor_1.optional(),
});

/**
 * 
 * @typedef  {PowerupDimming_1} powerupDimming_1   
 * @property {DimmingMode_1} - Dimming will set the brightness to the specified value after power up.
When setting mode “dimming”, the dimming property must be included.
Previous will set brightness to the state it was in before powering off.

 * @property {Dimming} 
 * @property {DimmingColor_1} 
 */
export type PowerupDimming_1 = z.infer<typeof powerupDimming_1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupDimming_1Response = powerupDimming_1;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupDimming_1Request = powerupDimming_1;
