import { z } from 'zod';
import { color } from './color';
import { supportedGradientMode } from './supported-gradient-mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetGradient = z.object({
  points: z.array(color).max(5).optional(),
  mode: supportedGradientMode.optional(),
  pointsCapable: z.number().optional(),
  modeValues: z.array(supportedGradientMode).optional(),
  pixelCount: z.number().optional(),
});

/**
 *
 * @typedef  {LightGetGradient} lightGetGradient
 * @property {Color[]} - Collection of gradients points. For control of the gradient points through a PUT a minimum of 2 points need to be provided.
 * @property {SupportedGradientMode} - Mode in which the points are currently being deployed. If not provided during PUT/POST it will be defaulted to interpolated_palette
 * @property {number} - Number of color points that gradient lamp is capable of showing with gradience.
 * @property {SupportedGradientMode[]} - Modes a gradient device can deploy the gradient palette of colors
 * @property {number} - Number of pixels in the device
 */
export type LightGetGradient = z.infer<typeof lightGetGradient>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetGradientResponse = z
  .object({
    points: z.array(color).max(5).optional(),
    mode: supportedGradientMode.optional(),
    points_capable: z.number().optional(),
    mode_values: z.array(supportedGradientMode).optional(),
    pixel_count: z.number().optional(),
  })
  .transform((data) => ({
    points: data['points'],
    mode: data['mode'],
    pointsCapable: data['points_capable'],
    modeValues: data['mode_values'],
    pixelCount: data['pixel_count'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetGradientRequest = lightGetGradient.transform((data) => ({
  points: data['points'],
  mode: data['mode'],
  points_capable: data['pointsCapable'],
  mode_values: data['modeValues'],
  pixel_count: data['pixelCount'],
}));