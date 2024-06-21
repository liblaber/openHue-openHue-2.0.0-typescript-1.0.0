import { z } from 'zod';
import { supportedEffects } from '../../light/models/supported-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionEffects_2 = z.object({
  effect: supportedEffects.optional(),
});

/**
 * Basic feature containing effect properties.
 * @typedef  {ActionEffects_2} actionEffects_2 - Basic feature containing effect properties. - Basic feature containing effect properties.
 * @property {SupportedEffects}
 */
export type ActionEffects_2 = z.infer<typeof actionEffects_2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionEffects_2Response = actionEffects_2;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionEffects_2Request = actionEffects_2;
