import { z } from 'zod';
import { supportedEffects } from '../../light/models/supported-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scenePaletteEffects = z.object({
  effect: supportedEffects.optional(),
});

/**
 *
 * @typedef  {ScenePaletteEffects} scenePaletteEffects
 * @property {SupportedEffects}
 */
export type ScenePaletteEffects = z.infer<typeof scenePaletteEffects>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePaletteEffectsResponse = scenePaletteEffects;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePaletteEffectsRequest = scenePaletteEffects;
