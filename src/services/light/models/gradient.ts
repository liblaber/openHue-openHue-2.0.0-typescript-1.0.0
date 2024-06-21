import { z } from 'zod';
import { color } from './color';
import { supportedGradientMode } from './supported-gradient-mode';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gradient = z.object({
  points: z.array(color).max(5).optional(),
  mode: supportedGradientMode.optional(),
});

/**
 * Basic feature containing gradient properties.
 * @typedef  {Gradient} gradient - Basic feature containing gradient properties. - Basic feature containing gradient properties.
 * @property {Color[]} - Collection of gradients points. For control of the gradient points through a PUT a minimum of 2 points need to be provided.
 * @property {SupportedGradientMode} - Mode in which the points are currently being deployed. If not provided during PUT/POST it will be defaulted to interpolated_palette
 */
export type Gradient = z.infer<typeof gradient>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gradientResponse = gradient;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gradientRequest = gradient;
