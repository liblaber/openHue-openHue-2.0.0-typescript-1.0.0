// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { error, errorRequest, errorResponse } from '../../common/error';
import { sceneGet, sceneGetRequest, sceneGetResponse } from '../../common/scene-get';

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
export const getSceneOkResponseResponse = z
  .object({
    errors: z.array(errorResponse).optional(),
    data: z.array(sceneGetResponse).optional(),
  })
  .transform((data) => ({
    errors: data['errors'],
    data: data['data'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSceneOkResponseRequest = z
  .object({ errors: z.array(errorRequest).nullish(), data: z.array(sceneGetRequest).nullish() })
  .transform((data) => ({
    errors: data['errors'],
    data: data['data'],
  }));
