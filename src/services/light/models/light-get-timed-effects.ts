import { z } from 'zod';
import { supportedTimedEffects } from './supported-timed-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetTimedEffects = z.object({
  effect: supportedTimedEffects.optional(),
  effectValues: z.array(supportedTimedEffects).optional(),
  status: supportedTimedEffects.optional(),
  statusValues: z.array(supportedTimedEffects).optional(),
  duration: z.number().optional(),
});

/**
 * Basic feature containing timed effect properties.
 * @typedef  {LightGetTimedEffects} lightGetTimedEffects - Basic feature containing timed effect properties. - Basic feature containing timed effect properties.
 * @property {SupportedTimedEffects} - Current status values the light is in regarding timed effects
 * @property {SupportedTimedEffects[]} - Possible timed effect values you can set in a light
 * @property {SupportedTimedEffects} - Current status values the light is in regarding timed effects
 * @property {SupportedTimedEffects[]} - Possible status values in which a light could be when playing a timed effect.
 * @property {number} - Duration is mandatory when timed effect is set except for no_effect. Resolution decreases for a larger duration. e.g Effects with duration smaller than a minute will be rounded to a resolution of 1s, while effects with duration larger than an hour will be arounded up to a resolution of 300s. Duration has a max of 21600000 ms.
 */
export type LightGetTimedEffects = z.infer<typeof lightGetTimedEffects>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetTimedEffectsResponse = z
  .object({
    effect: supportedTimedEffects.optional(),
    effect_values: z.array(supportedTimedEffects).optional(),
    status: supportedTimedEffects.optional(),
    status_values: z.array(supportedTimedEffects).optional(),
    duration: z.number().optional(),
  })
  .transform((data) => ({
    effect: data['effect'],
    effectValues: data['effect_values'],
    status: data['status'],
    statusValues: data['status_values'],
    duration: data['duration'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetTimedEffectsRequest = lightGetTimedEffects.transform((data) => ({
  effect: data['effect'],
  effect_values: data['effectValues'],
  status: data['status'],
  status_values: data['statusValues'],
  duration: data['duration'],
}));
