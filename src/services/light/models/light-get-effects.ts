import { z } from 'zod';
import { supportedEffects } from './supported-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetEffects = z.object({
  status: supportedEffects.optional(),
  statusValues: z.array(supportedEffects).optional(),
  effect: supportedEffects.optional(),
  effectValues: z.array(supportedEffects).optional(),
});

/**
 * Basic feature containing effect properties.
 * @typedef  {LightGetEffects} lightGetEffects - Basic feature containing effect properties. - Basic feature containing effect properties.
 * @property {SupportedEffects}
 * @property {SupportedEffects[]} - Possible status values in which a light could be when playing an effect.
 * @property {SupportedEffects}
 * @property {SupportedEffects[]} - Possible status values in which a light could be when playing an effect.
 */
export type LightGetEffects = z.infer<typeof lightGetEffects>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetEffectsResponse = z
  .object({
    status: supportedEffects.optional(),
    status_values: z.array(supportedEffects).optional(),
    effect: supportedEffects.optional(),
    effect_values: z.array(supportedEffects).optional(),
  })
  .transform((data) => ({
    status: data['status'],
    statusValues: data['status_values'],
    effect: data['effect'],
    effectValues: data['effect_values'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetEffectsRequest = lightGetEffects.transform((data) => ({
  status: data['status'],
  status_values: data['statusValues'],
  effect: data['effect'],
  effect_values: data['effectValues'],
}));
