// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { supportedSignals } from './supported-signals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const groupedLightGetSignaling = z.object({
  signalValues: z.array(supportedSignals).optional(),
});

/**
 * Feature containing basic signaling properties.
 * @typedef  {GroupedLightGetSignaling} groupedLightGetSignaling - Feature containing basic signaling properties. - Feature containing basic signaling properties.
 * @property {SupportedSignals[]} - Signals that the light supports.
 */
export type GroupedLightGetSignaling = z.infer<typeof groupedLightGetSignaling>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightGetSignalingResponse = z
  .object({
    signal_values: z.array(supportedSignals).optional(),
  })
  .transform((data) => ({
    signalValues: data['signal_values'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightGetSignalingRequest = z
  .object({ signalValues: z.array(supportedSignals).nullish() })
  .transform((data) => ({
    signal_values: data['signalValues'],
  }));