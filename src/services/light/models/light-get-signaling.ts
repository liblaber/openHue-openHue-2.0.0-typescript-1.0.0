import { z } from 'zod';
import { supportedSignals } from './supported-signals';
import { color } from './color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetSignaling = z.object({
  signalValues: z.array(supportedSignals).optional(),
  estimatedEnd: z.number().optional(),
  colors: z.array(color).optional(),
});

/**
 * Feature containing signaling properties.
 * @typedef  {LightGetSignaling} lightGetSignaling - Feature containing signaling properties. - Feature containing signaling properties.
 * @property {SupportedSignals[]}
 * @property {number} - Timestamp indicating when the active signal is expected to end. Value is not set if there is no_signal
 * @property {Color[]} - Colors that were provided for the active effect.
 */
export type LightGetSignaling = z.infer<typeof lightGetSignaling>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetSignalingResponse = z
  .object({
    signal_values: z.array(supportedSignals).optional(),
    estimated_end: z.number().optional(),
    colors: z.array(color).optional(),
  })
  .transform((data) => ({
    signalValues: data['signal_values'],
    estimatedEnd: data['estimated_end'],
    colors: data['colors'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetSignalingRequest = lightGetSignaling.transform((data) => ({
  signal_values: data['signalValues'],
  estimated_end: data['estimatedEnd'],
  colors: data['colors'],
}));
