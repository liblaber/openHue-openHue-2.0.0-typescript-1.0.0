import { z } from 'zod';
import { colorPaletteGet } from './color-palette-get';
import { dimming } from '../../light/models/dimming';
import { colorTemperaturePalettePost } from './color-temperature-palette-post';
import { scenePaletteEffects } from './scene-palette-effects';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scenePalette = z.object({
  color: z.array(colorPaletteGet).max(9).optional(),
  dimming: z.array(dimming).max(1).optional(),
  colorTemperature: z.array(colorTemperaturePalettePost).max(1).optional(),
  effects: z.array(scenePaletteEffects).max(3).optional(),
});

/**
 * Group of colors that describe the palette of colors to be used when playing dynamics
 * @typedef  {ScenePalette} scenePalette - Group of colors that describe the palette of colors to be used when playing dynamics - Group of colors that describe the palette of colors to be used when playing dynamics
 * @property {ColorPaletteGet[]}
 * @property {Dimming[]}
 * @property {ColorTemperaturePalettePost[]}
 * @property {ScenePaletteEffects[]}
 */
export type ScenePalette = z.infer<typeof scenePalette>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePaletteResponse = z
  .object({
    color: z.array(colorPaletteGet).max(9).optional(),
    dimming: z.array(dimming).max(1).optional(),
    color_temperature: z.array(colorTemperaturePalettePost).max(1).optional(),
    effects: z.array(scenePaletteEffects).max(3).optional(),
  })
  .transform((data) => ({
    color: data['color'],
    dimming: data['dimming'],
    colorTemperature: data['color_temperature'],
    effects: data['effects'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePaletteRequest = scenePalette.transform((data) => ({
  color: data['color'],
  dimming: data['dimming'],
  color_temperature: data['colorTemperature'],
  effects: data['effects'],
}));
