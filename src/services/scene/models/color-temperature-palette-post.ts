import { z } from 'zod';
import { colorTemperaturePalettePostColorTemperature } from './color-temperature-palette-post-color-temperature';
import { dimming } from '../../light/models/dimming';

/**
 * The shape of the model inside the application code - what the users use
 */
export const colorTemperaturePalettePost = z.object({
  colorTemperature: colorTemperaturePalettePostColorTemperature.optional(),
  dimming: dimming.optional(),
});

/**
 *
 * @typedef  {ColorTemperaturePalettePost} colorTemperaturePalettePost
 * @property {ColorTemperaturePalettePostColorTemperature}
 * @property {Dimming}
 */
export type ColorTemperaturePalettePost = z.infer<typeof colorTemperaturePalettePost>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const colorTemperaturePalettePostResponse = z
  .object({
    color_temperature: colorTemperaturePalettePostColorTemperature.optional(),
    dimming: dimming.optional(),
  })
  .transform((data) => ({
    colorTemperature: data['color_temperature'],
    dimming: data['dimming'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const colorTemperaturePalettePostRequest = colorTemperaturePalettePost.transform((data) => ({
  color_temperature: data['colorTemperature'],
  dimming: data['dimming'],
}));
