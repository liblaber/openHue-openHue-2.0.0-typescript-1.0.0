import { z } from 'zod';
import { error } from '../../resource/models/error';
import { sceneGet } from './scene-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSceneOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(sceneGet).optional(),
});

/**
 *
 * @typedef  {GetSceneOkResponse} getSceneOkResponse
 * @property {Error[]}
 * @property {SceneGet[]}
 */
export type GetSceneOkResponse = z.infer<typeof getSceneOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSceneOkResponseSchema = getSceneOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSceneOkResponseRequest = getSceneOkResponse;
