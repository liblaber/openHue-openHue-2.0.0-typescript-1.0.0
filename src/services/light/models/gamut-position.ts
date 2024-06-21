import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gamutPosition = z.object({
  x: z.number().gte(0).lte(1).optional(),
  y: z.number().gte(0).lte(1).optional(),
});

/**
 * CIE XY gamut position
 * @typedef  {GamutPosition} gamutPosition - CIE XY gamut position - CIE XY gamut position
 * @property {number} - X position in color gamut
 * @property {number} - y position in color gamut
 */
export type GamutPosition = z.infer<typeof gamutPosition>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gamutPositionResponse = gamutPosition;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gamutPositionRequest = gamutPosition;
