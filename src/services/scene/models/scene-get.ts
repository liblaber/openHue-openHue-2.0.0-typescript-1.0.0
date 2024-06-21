import { z } from 'zod';
import { sceneGetType } from './scene-get-type';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { actionGet } from './action-get';
import { sceneMetadata } from './scene-metadata';
import { scenePalette } from './scene-palette';
import { sceneGetStatus } from './scene-get-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const sceneGet = z.object({
  type: sceneGetType.optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  owner: resourceIdentifier.optional(),
  actions: z.array(actionGet).optional(),
  metadata: sceneMetadata.optional(),
  group: resourceIdentifier.optional(),
  palette: scenePalette.optional(),
  speed: z.number().gte(0).lte(1).optional(),
  autoDynamic: z.boolean().optional(),
  status: sceneGetStatus.optional(),
});

/**
 *
 * @typedef  {SceneGet} sceneGet
 * @property {SceneGetType}
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {ActionGet[]} - List of actions to be executed synchronously on recall
 * @property {SceneMetadata}
 * @property {ResourceIdentifier}
 * @property {ScenePalette} - Group of colors that describe the palette of colors to be used when playing dynamics
 * @property {number} - Speed of dynamic palette for this scene
 * @property {boolean} - Indicates whether to automatically start the scene dynamically on active recall
 * @property {SceneGetStatus}
 */
export type SceneGet = z.infer<typeof sceneGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneGetResponse = z
  .object({
    type: sceneGetType.optional(),
    id: z
      .string()
      .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
      .optional(),
    id_v1: z
      .string()
      .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
      .optional(),
    owner: resourceIdentifier.optional(),
    actions: z.array(actionGet).optional(),
    metadata: sceneMetadata.optional(),
    group: resourceIdentifier.optional(),
    palette: scenePalette.optional(),
    speed: z.number().gte(0).lte(1).optional(),
    auto_dynamic: z.boolean().optional(),
    status: sceneGetStatus.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    actions: data['actions'],
    metadata: data['metadata'],
    group: data['group'],
    palette: data['palette'],
    speed: data['speed'],
    autoDynamic: data['auto_dynamic'],
    status: data['status'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneGetRequest = sceneGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  owner: data['owner'],
  actions: data['actions'],
  metadata: data['metadata'],
  group: data['group'],
  palette: data['palette'],
  speed: data['speed'],
  auto_dynamic: data['autoDynamic'],
  status: data['status'],
}));
