import { z } from 'zod';
import { gamutPosition } from './gamut-position';
import { gamut } from './gamut';
import { gamutType } from './gamut-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetColor = z.object({
  xy: gamutPosition.optional(),
  gamut: gamut.optional(),
  gamutType: gamutType.optional(),
});

/**
 *
 * @typedef  {LightGetColor} lightGetColor
 * @property {GamutPosition} - CIE XY gamut position
 * @property {Gamut} - Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.
 * @property {GamutType} - The gammut types supported by hue – A Gamut of early Philips color-only products – B Limited gamut of first Hue color products – C Richer color gamut of Hue white and color ambiance products – other Color gamut of non-hue products with non-hue gamuts resp w/o gamut
 */
export type LightGetColor = z.infer<typeof lightGetColor>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetColorResponse = z
  .object({
    xy: gamutPosition.optional(),
    gamut: gamut.optional(),
    gamut_type: gamutType.optional(),
  })
  .transform((data) => ({
    xy: data['xy'],
    gamut: data['gamut'],
    gamutType: data['gamut_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetColorRequest = lightGetColor.transform((data) => ({
  xy: data['xy'],
  gamut: data['gamut'],
  gamut_type: data['gamutType'],
}));
