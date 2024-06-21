import { z } from 'zod';
import { active } from './active';

/**
 * The shape of the model inside the application code - what the users use
 */
export const sceneGetStatus = z.object({
  active: active.optional(),
});

/**
 *
 * @typedef  {SceneGetStatus} sceneGetStatus
 * @property {Active}
 */
export type SceneGetStatus = z.infer<typeof sceneGetStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneGetStatusResponse = sceneGetStatus;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneGetStatusRequest = sceneGetStatus;
