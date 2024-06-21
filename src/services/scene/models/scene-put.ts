import { z } from 'zod';
import { scenePutType } from './scene-put-type';
import { actionPost } from './action-post';
import { sceneRecall } from './scene-recall';
import { sceneMetadata } from './scene-metadata';
import { scenePalette } from './scene-palette';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scenePut = z.object({
  type: scenePutType.optional(),
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
    actions: z.array(actionPost).optional(),
    recall: sceneRecall.optional(),
    metadata: sceneMetadata.optional(),
    palette: scenePalette.optional(),
    speed: z.number().gte(0).lte(1).optional(),
    auto_dynamic: z.boolean().optional(),
  })
  .transform((data) => ({
    type: data['type'],
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
export const scenePutRequest = scenePut.transform((data) => ({
  type: data['type'],
  actions: data['actions'],
  recall: data['recall'],
  metadata: data['metadata'],
  palette: data['palette'],
  speed: data['speed'],
  auto_dynamic: data['autoDynamic'],
}));
