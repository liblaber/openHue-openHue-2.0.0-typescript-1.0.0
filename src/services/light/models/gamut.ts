import { z } from 'zod';
import { gamutPosition } from './gamut-position';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gamut = z.object({
  red: gamutPosition.optional(),
  green: gamutPosition.optional(),
  blue: gamutPosition.optional(),
});

/**
 * Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.
 * @typedef  {Gamut} gamut - Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present. - Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.
 * @property {GamutPosition} - CIE XY gamut position
 * @property {GamutPosition} - CIE XY gamut position
 * @property {GamutPosition} - CIE XY gamut position
 */
export type Gamut = z.infer<typeof gamut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gamutResponse = gamut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gamutRequest = gamut;
