import { z } from 'zod';
import { gamutPosition } from './gamut-position';

/**
 * The shape of the model inside the application code - what the users use
 */
export const color = z.object({
  xy: gamutPosition.optional(),
});

/**
 *
 * @typedef  {Color} color
 * @property {GamutPosition} - CIE XY gamut position
 */
export type Color = z.infer<typeof color>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const colorResponse = color;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const colorRequest = color;
