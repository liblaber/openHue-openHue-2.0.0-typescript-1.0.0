import { z } from 'zod';
import { signal } from './signal';
import { color } from './color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const signaling = z.object({
  signal: signal.optional(),
  duration: z.number().gte(0).lte(65534000).optional(),
  color: z.array(color).min(1).max(2).optional(),
});

/**
 * Feature containing basic signaling properties.
 * @typedef  {Signaling} signaling - Feature containing basic signaling properties. - Feature containing basic signaling properties.
 * @property {Signal} - - `no_signal`: No signal is active. Write “no_signal” to stop active signal.
- `on_off`: Toggles between max brightness and Off in fixed color.
- `on_off_color`: Toggles between off and max brightness with color provided.
- `alternating`: Alternates between 2 provided colors.

 * @property {number} - Duration has a max of 65534000 ms and a stepsize of 1 second.
Values inbetween steps will be rounded.
Duration is ignored for `no_signal`.

 * @property {Color[]} - List of colors to apply to the signal (not supported by all signals)
 */
export type Signaling = z.infer<typeof signaling>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const signalingResponse = signaling;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const signalingRequest = signaling;
