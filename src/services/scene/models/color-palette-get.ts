import { z } from 'zod';
import { color } from '../../light/models/color';
import { dimming } from '../../light/models/dimming';

/**
 * The shape of the model inside the application code - what the users use
 */
export const colorPaletteGet = z.object({
  color: color.optional(),
  dimming: dimming.optional(),
});

/**
 *
 * @typedef  {ColorPaletteGet} colorPaletteGet
 * @property {Color}
 * @property {Dimming}
 */
export type ColorPaletteGet = z.infer<typeof colorPaletteGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const colorPaletteGetResponse = colorPaletteGet;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const colorPaletteGetRequest = colorPaletteGet;
