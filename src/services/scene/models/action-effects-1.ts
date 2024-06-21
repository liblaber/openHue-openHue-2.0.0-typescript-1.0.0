import { z } from 'zod';
import { supportedEffects } from '../../light/models/supported-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionEffects_1 = z.object({
  effect: supportedEffects.optional(),
});

/**
 * Basic feature containing effect properties.
 * @typedef  {ActionEffects_1} actionEffects_1 - Basic feature containing effect properties. - Basic feature containing effect properties.
 * @property {SupportedEffects}
 */
export type ActionEffects_1 = z.infer<typeof actionEffects_1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionEffects_1Response = actionEffects_1;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionEffects_1Request = actionEffects_1;
