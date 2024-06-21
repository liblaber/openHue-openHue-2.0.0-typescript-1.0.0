import { z } from 'zod';
import { on } from './on';
import { dimming } from './dimming';
import { dimmingDelta } from './dimming-delta';
import { colorTemperature } from './color-temperature';
import { colorTemperatureDelta } from './color-temperature-delta';
import { color } from './color';
import { dynamics } from './dynamics';
import { alert } from './alert';
import { signaling } from './signaling';
import { lightPutMode } from './light-put-mode';
import { gradient } from './gradient';
import { effects } from './effects';
import { lightPutTimedEffects } from './light-put-timed-effects';
import { powerup } from './powerup';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightPut = z.object({
  type: z.string().optional(),
  on: on.optional(),
  dimming: dimming.optional(),
  dimmingDelta: dimmingDelta.optional(),
  colorTemperature: colorTemperature.optional(),
  colorTemperatureDelta: colorTemperatureDelta.optional(),
  color: color.optional(),
  dynamics: dynamics.optional(),
  alert: alert.optional(),
  signaling: signaling.optional(),
  mode: lightPutMode.optional(),
  gradient: gradient.optional(),
  effects: effects.optional(),
  timedEffects: lightPutTimedEffects.optional(),
  powerup: powerup.optional(),
});

/**
 *
 * @typedef  {LightPut} lightPut
 * @property {string} - Type of the supported resources (always `light` here)
 * @property {On}
 * @property {Dimming}
 * @property {DimmingDelta}
 * @property {ColorTemperature}
 * @property {ColorTemperatureDelta}
 * @property {Color}
 * @property {Dynamics}
 * @property {Alert} - Joined alert control
 * @property {Signaling} - Feature containing basic signaling properties.
 * @property {LightPutMode}
 * @property {Gradient} - Basic feature containing gradient properties.
 * @property {Effects} - Basic feature containing effect properties.
 * @property {LightPutTimedEffects} - Basic feature containing timed effect properties.
 * @property {Powerup} - Feature containing properties to configure powerup behaviour of a lightsource.
 */
export type LightPut = z.infer<typeof lightPut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightPutResponse = z
  .object({
    type: z.string().optional(),
    on: on.optional(),
    dimming: dimming.optional(),
    dimming_delta: dimmingDelta.optional(),
    color_temperature: colorTemperature.optional(),
    color_temperature_delta: colorTemperatureDelta.optional(),
    color: color.optional(),
    dynamics: dynamics.optional(),
    alert: alert.optional(),
    signaling: signaling.optional(),
    mode: lightPutMode.optional(),
    gradient: gradient.optional(),
    effects: effects.optional(),
    timed_effects: lightPutTimedEffects.optional(),
    powerup: powerup.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    on: data['on'],
    dimming: data['dimming'],
    dimmingDelta: data['dimming_delta'],
    colorTemperature: data['color_temperature'],
    colorTemperatureDelta: data['color_temperature_delta'],
    color: data['color'],
    dynamics: data['dynamics'],
    alert: data['alert'],
    signaling: data['signaling'],
    mode: data['mode'],
    gradient: data['gradient'],
    effects: data['effects'],
    timedEffects: data['timed_effects'],
    powerup: data['powerup'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightPutRequest = lightPut.transform((data) => ({
  type: data['type'],
  on: data['on'],
  dimming: data['dimming'],
  dimming_delta: data['dimmingDelta'],
  color_temperature: data['colorTemperature'],
  color_temperature_delta: data['colorTemperatureDelta'],
  color: data['color'],
  dynamics: data['dynamics'],
  alert: data['alert'],
  signaling: data['signaling'],
  mode: data['mode'],
  gradient: data['gradient'],
  effects: data['effects'],
  timed_effects: data['timedEffects'],
  powerup: data['powerup'],
}));
