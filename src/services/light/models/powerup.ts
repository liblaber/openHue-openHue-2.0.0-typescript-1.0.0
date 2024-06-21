import { z } from 'zod';
import { powerupPreset_2 } from './powerup-preset-2';
import { powerupOn_2 } from './powerup-on-2';
import { powerupDimming_2 } from './powerup-dimming-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const powerup = z.object({
  preset: powerupPreset_2.optional(),
  configured: z.boolean().optional(),
  on: powerupOn_2.optional(),
  dimming: powerupDimming_2.optional(),
});

/**
 * Feature containing properties to configure powerup behaviour of a lightsource.
 * @typedef  {Powerup} powerup - Feature containing properties to configure powerup behaviour of a lightsource. - Feature containing properties to configure powerup behaviour of a lightsource.
 * @property {PowerupPreset_2} - When setting the custom preset the additional properties can be set. For all other presets, no other properties can be included.
 * @property {boolean} - Indicates if the shown values have been configured in the lightsource.
 * @property {PowerupOn_2}
 * @property {PowerupDimming_2}
 */
export type Powerup = z.infer<typeof powerup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupResponse = powerup;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const powerupRequest = powerup;
