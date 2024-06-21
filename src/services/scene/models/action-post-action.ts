import { z } from 'zod';
import { on } from '../../light/models/on';
import { dimming } from '../../light/models/dimming';
import { color } from '../../light/models/color';
import { actionColorTemperature } from './action-color-temperature';
import { gradient } from '../../light/models/gradient';
import { actionEffects_2 } from './action-effects-2';
import { dynamics2 } from '../../grouped-light/models/dynamics2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionPostAction = z.object({
  on: on.optional(),
  dimming: dimming.optional(),
  color: color.optional(),
  colorTemperature: actionColorTemperature.optional(),
  gradient: gradient.optional(),
  effects: actionEffects_2.optional(),
  dynamics: dynamics2.optional(),
});

/**
 * The action to be executed on recall
 * @typedef  {ActionPostAction} actionPostAction - The action to be executed on recall - The action to be executed on recall
 * @property {On}
 * @property {Dimming}
 * @property {Color}
 * @property {ActionColorTemperature}
 * @property {Gradient} - Basic feature containing gradient properties.
 * @property {ActionEffects_2} - Basic feature containing effect properties.
 * @property {Dynamics2}
 */
export type ActionPostAction = z.infer<typeof actionPostAction>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionPostActionResponse = z
  .object({
    on: on.optional(),
    dimming: dimming.optional(),
    color: color.optional(),
    color_temperature: actionColorTemperature.optional(),
    gradient: gradient.optional(),
    effects: actionEffects_2.optional(),
    dynamics: dynamics2.optional(),
  })
  .transform((data) => ({
    on: data['on'],
    dimming: data['dimming'],
    color: data['color'],
    colorTemperature: data['color_temperature'],
    gradient: data['gradient'],
    effects: data['effects'],
    dynamics: data['dynamics'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionPostActionRequest = actionPostAction.transform((data) => ({
  on: data['on'],
  dimming: data['dimming'],
  color: data['color'],
  color_temperature: data['colorTemperature'],
  gradient: data['gradient'],
  effects: data['effects'],
  dynamics: data['dynamics'],
}));
