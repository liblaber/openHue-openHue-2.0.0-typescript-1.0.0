// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { scenePutType } from './scene-put-type';
import { actionPost, actionPostRequest, actionPostResponse } from '../../common/action-post';
import { sceneRecall, sceneRecallRequest, sceneRecallResponse } from './scene-recall';
import { sceneMetadata, sceneMetadataRequest, sceneMetadataResponse } from '../../common/scene-metadata';
import { scenePalette, scenePaletteRequest, scenePaletteResponse } from '../../common/scene-palette';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scenePut = z.object({
  type_: scenePutType.optional(),
  actions: z.array(actionPost).optional(),
  recall: sceneRecall.optional(),
  metadata: sceneMetadata.optional(),
  palette: scenePalette.optional(),
  speed: z.number().gte(0).lte(1).optional(),
  autoDynamic: z.boolean().optional(),
});

/**
 *
 * @typedef  {ScenePut} scenePut
 * @property {ScenePutType}
 * @property {ActionPost[]} - List of actions to be executed synchronously on recall
 * @property {SceneRecall}
 * @property {SceneMetadata}
 * @property {ScenePalette} - Group of colors that describe the palette of colors to be used when playing dynamics
 * @property {number} - Speed of dynamic palette for this scene
 * @property {boolean} - Indicates whether to automatically start the scene dynamically on active recall
 */
export type ScenePut = z.infer<typeof scenePut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePutResponse = z
  .object({
    type: scenePutType.optional(),
    actions: z.array(actionPostResponse).optional(),
    recall: sceneRecallResponse.optional(),
    metadata: sceneMetadataResponse.optional(),
    palette: scenePaletteResponse.optional(),
    speed: z.number().gte(0).lte(1).optional(),
    auto_dynamic: z.boolean().optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    actions: data['actions'],
    recall: data['recall'],
    metadata: data['metadata'],
    palette: data['palette'],
    speed: data['speed'],
    autoDynamic: data['auto_dynamic'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePutRequest = z
  .object({
    type_: scenePutType.nullish(),
    actions: z.array(actionPostRequest).nullish(),
    recall: sceneRecallRequest.nullish(),
    metadata: sceneMetadataRequest.nullish(),
    palette: scenePaletteRequest.nullish(),
    speed: z.number().nullish(),
    autoDynamic: z.boolean().nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    actions: data['actions'],
    recall: data['recall'],
    metadata: data['metadata'],
    palette: data['palette'],
    speed: data['speed'],
    auto_dynamic: data['autoDynamic'],
  }));
