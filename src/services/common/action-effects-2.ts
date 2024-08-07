// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { supportedEffects } from './supported-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionEffects2 = z.object({
  effect: supportedEffects.optional(),
});

/**
 * Basic feature containing effect properties.
 * @typedef  {ActionEffects2} actionEffects2 - Basic feature containing effect properties. - Basic feature containing effect properties.
 * @property {SupportedEffects}
 */
export type ActionEffects2 = z.infer<typeof actionEffects2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionEffects2Response = z
  .object({
    effect: supportedEffects.optional(),
  })
  .transform((data) => ({
    effect: data['effect'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionEffects2Request = z.object({ effect: supportedEffects.nullish() }).transform((data) => ({
  effect: data['effect'],
}));
