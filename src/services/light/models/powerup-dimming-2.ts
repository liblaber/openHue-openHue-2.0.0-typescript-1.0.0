import { z } from 'zod';
import { dimmingMode_2 } from './dimming-mode-2';
import { dimmingColor_2 } from './dimming-color-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const powerupDimming_2 = z.object({
  mode: dimmingMode_2.optional(),
  dimming: z.number().gte(0).lte(100).optional(),
  color: dimmingColor_2.optional(),
});

/**
 * 
 * @typedef  {PowerupDimming_2} powerupDimming_2   
 * @property {DimmingMode_2} - Dimming will set the brightness to the specified value after power up.
When setting mode “dimming”, the dimming property must be included.
Previous will set brightness to the state it was in before powering off.

 * @property {number} - Brightness percentage. value cannot be 0, writing 0 changes it to lowest possible brightness
 * @property {DimmingColor_2} 
 */
export type PowerupDimming_2 = z.infer<typeof powerupDimming_2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupDimming_2Response = powerupDimming_2;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupDimming_2Request = powerupDimming_2;
