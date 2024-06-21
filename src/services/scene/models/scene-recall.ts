import { z } from 'zod';
import { sceneRecallAction } from './scene-recall-action';
import { dimming } from '../../light/models/dimming';

/**
 * The shape of the model inside the application code - what the users use
 */
export const sceneRecall = z.object({
  action: sceneRecallAction.optional(),
  duration: z.number().optional(),
  dimming: dimming.optional(),
});

/**
 *
 * @typedef  {SceneRecall} sceneRecall
 * @property {SceneRecallAction} - When writing active, the actions in the scene are executed on the target. dynamic_palette starts dynamic scene with colors in the Palette object.
 * @property {number} - Transition to the scene within the timeframe given by duration
 * @property {Dimming}
 */
export type SceneRecall = z.infer<typeof sceneRecall>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneRecallResponse = sceneRecall;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneRecallRequest = sceneRecall;
