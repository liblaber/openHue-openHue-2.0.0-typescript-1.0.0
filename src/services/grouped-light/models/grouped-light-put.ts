import { z } from 'zod';
import { groupedLightPutType } from './grouped-light-put-type';
import { on } from '../../light/models/on';
import { dimming } from '../../light/models/dimming';
import { dimmingDelta } from '../../light/models/dimming-delta';
import { colorTemperature } from '../../light/models/color-temperature';
import { colorTemperatureDelta } from '../../light/models/color-temperature-delta';
import { color } from '../../light/models/color';
import { alert } from '../../light/models/alert';
import { signaling } from '../../light/models/signaling';
import { dynamics2 } from './dynamics2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const groupedLightPut = z.object({
  type: groupedLightPutType.optional(),
  on: on.optional(),
  dimming: dimming.optional(),
  dimmingDelta: dimmingDelta.optional(),
  colorTemperature: colorTemperature.optional(),
  colorTemperatureDelta: colorTemperatureDelta.optional(),
  color: color.optional(),
  alert: alert.optional(),
  signaling: signaling.optional(),
  dynamics: dynamics2.optional(),
});

/**
 *
 * @typedef  {GroupedLightPut} groupedLightPut
 * @property {GroupedLightPutType} - Type of the supported resources (always `grouped_light` here)
 * @property {On}
 * @property {Dimming}
 * @property {DimmingDelta}
 * @property {ColorTemperature}
 * @property {ColorTemperatureDelta}
 * @property {Color}
 * @property {Alert} - Joined alert control
 * @property {Signaling} - Feature containing basic signaling properties.
 * @property {Dynamics2}
 */
export type GroupedLightPut = z.infer<typeof groupedLightPut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightPutResponse = z
  .object({
    type: groupedLightPutType.optional(),
    on: on.optional(),
    dimming: dimming.optional(),
    dimming_delta: dimmingDelta.optional(),
    color_temperature: colorTemperature.optional(),
    color_temperature_delta: colorTemperatureDelta.optional(),
    color: color.optional(),
    alert: alert.optional(),
    signaling: signaling.optional(),
    dynamics: dynamics2.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    on: data['on'],
    dimming: data['dimming'],
    dimmingDelta: data['dimming_delta'],
    colorTemperature: data['color_temperature'],
    colorTemperatureDelta: data['color_temperature_delta'],
    color: data['color'],
    alert: data['alert'],
    signaling: data['signaling'],
    dynamics: data['dynamics'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightPutRequest = groupedLightPut.transform((data) => ({
  type: data['type'],
  on: data['on'],
  dimming: data['dimming'],
  dimming_delta: data['dimmingDelta'],
  color_temperature: data['colorTemperature'],
  color_temperature_delta: data['colorTemperatureDelta'],
  color: data['color'],
  alert: data['alert'],
  signaling: data['signaling'],
  dynamics: data['dynamics'],
}));
