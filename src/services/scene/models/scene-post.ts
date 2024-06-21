import { z } from 'zod';
import { scenePostType } from './scene-post-type';
import { actionPost } from './action-post';
import { sceneMetadata } from './scene-metadata';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { scenePalette } from './scene-palette';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scenePost = z.object({
  type: scenePostType.optional(),
  actions: z.array(actionPost),
  metadata: sceneMetadata,
  group: resourceIdentifier,
  palette: scenePalette.optional(),
  speed: z.number().gte(0).lte(1).optional(),
  autoDynamic: z.boolean().optional(),
});

/**
 *
 * @typedef  {ScenePost} scenePost
 * @property {ScenePostType}
 * @property {ActionPost[]} - List of actions to be executed synchronously on recall
 * @property {SceneMetadata}
 * @property {ResourceIdentifier}
 * @property {ScenePalette} - Group of colors that describe the palette of colors to be used when playing dynamics
 * @property {number} - Speed of dynamic palette for this scene
 * @property {boolean} - Indicates whether to automatically start the scene dynamically on active recall
 */
export type ScenePost = z.infer<typeof scenePost>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePostResponse = z
  .object({
    type: scenePostType.optional(),
    actions: z.array(actionPost),
    metadata: sceneMetadata,
    group: resourceIdentifier,
    palette: scenePalette.optional(),
    speed: z.number().gte(0).lte(1).optional(),
    auto_dynamic: z.boolean().optional(),
  })
  .transform((data) => ({
    type: data['type'],
    actions: data['actions'],
    metadata: data['metadata'],
    group: data['group'],
    palette: data['palette'],
    speed: data['speed'],
    autoDynamic: data['auto_dynamic'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scenePostRequest = scenePost.transform((data) => ({
  type: data['type'],
  actions: data['actions'],
  metadata: data['metadata'],
  group: data['group'],
  palette: data['palette'],
  speed: data['speed'],
  auto_dynamic: data['autoDynamic'],
}));
