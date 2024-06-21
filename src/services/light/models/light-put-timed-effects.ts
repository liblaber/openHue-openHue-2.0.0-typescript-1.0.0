import { z } from 'zod';
import { supportedTimedEffects } from './supported-timed-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightPutTimedEffects = z.object({
  effect: supportedTimedEffects.optional(),
  duration: z.number().optional(),
});

/**
 * Basic feature containing timed effect properties.
 * @typedef  {LightPutTimedEffects} lightPutTimedEffects - Basic feature containing timed effect properties. - Basic feature containing timed effect properties.
 * @property {SupportedTimedEffects} - Current status values the light is in regarding timed effects
 * @property {number} - Duration is mandatory when timed effect is set except for no_effect. Resolution decreases for a larger duration. e.g Effects with duration smaller than a minute will be rounded to a resolution of 1s, while effects with duration larger than an hour will be arounded up to a resolution of 300s. Duration has a max of 21600000 ms.
 */
export type LightPutTimedEffects = z.infer<typeof lightPutTimedEffects>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightPutTimedEffectsResponse = lightPutTimedEffects;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightPutTimedEffectsRequest = lightPutTimedEffects;
