import { z } from 'zod';
import { on } from '../../light/models/on';
import { dimming } from '../../light/models/dimming';
import { color } from '../../light/models/color';
import { colorTemperature } from '../../light/models/color-temperature';
import { gradient } from '../../light/models/gradient';
import { actionEffects_1 } from './action-effects-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionGetAction = z.object({
  on: on.optional(),
  dimming: dimming.optional(),
  color: color.optional(),
  colorTemperature: colorTemperature.optional(),
  gradient: gradient.optional(),
  effects: actionEffects_1.optional(),
});

/**
 * The action to be executed on recall
 * @typedef  {ActionGetAction} actionGetAction - The action to be executed on recall - The action to be executed on recall
 * @property {On}
 * @property {Dimming}
 * @property {Color}
 * @property {ColorTemperature}
 * @property {Gradient} - Basic feature containing gradient properties.
 * @property {ActionEffects_1} - Basic feature containing effect properties.
 */
export type ActionGetAction = z.infer<typeof actionGetAction>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionGetActionResponse = z
  .object({
    on: on.optional(),
    dimming: dimming.optional(),
    color: color.optional(),
    color_temperature: colorTemperature.optional(),
    gradient: gradient.optional(),
    effects: actionEffects_1.optional(),
  })
  .transform((data) => ({
    on: data['on'],
    dimming: data['dimming'],
    color: data['color'],
    colorTemperature: data['color_temperature'],
    gradient: data['gradient'],
    effects: data['effects'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionGetActionRequest = actionGetAction.transform((data) => ({
  on: data['on'],
  dimming: data['dimming'],
  color: data['color'],
  color_temperature: data['colorTemperature'],
  gradient: data['gradient'],
  effects: data['effects'],
}));
