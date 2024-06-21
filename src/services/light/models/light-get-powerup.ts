import { z } from 'zod';
import { powerupPreset_1 } from './powerup-preset-1';
import { powerupOn_1 } from './powerup-on-1';
import { powerupDimming_1 } from './powerup-dimming-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetPowerup = z.object({
  preset: powerupPreset_1.optional(),
  configured: z.boolean().optional(),
  on: powerupOn_1.optional(),
  dimming: powerupDimming_1.optional(),
});

/**
 * Feature containing properties to configure powerup behaviour of a lightsource.
 * @typedef  {LightGetPowerup} lightGetPowerup - Feature containing properties to configure powerup behaviour of a lightsource. - Feature containing properties to configure powerup behaviour of a lightsource.
 * @property {PowerupPreset_1} - When setting the custom preset the additional properties can be set. For all other presets, no other properties can be included.
 * @property {boolean} - Indicates if the shown values have been configured in the lightsource.
 * @property {PowerupOn_1}
 * @property {PowerupDimming_1}
 */
export type LightGetPowerup = z.infer<typeof lightGetPowerup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetPowerupResponse = lightGetPowerup;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetPowerupRequest = lightGetPowerup;
