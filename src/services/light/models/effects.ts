import { z } from 'zod';
import { supportedEffects } from './supported-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const effects = z.object({
  effect: supportedEffects.optional(),
});

/**
 * Basic feature containing effect properties.
 * @typedef  {Effects} effects - Basic feature containing effect properties. - Basic feature containing effect properties.
 * @property {SupportedEffects}
 */
export type Effects = z.infer<typeof effects>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const effectsResponse = effects;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const effectsRequest = effects;
