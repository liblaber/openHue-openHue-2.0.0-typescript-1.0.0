import { z } from 'zod';
import { resourceIdentifier } from '../../resource/models/resource-identifier';

/**
 * The shape of the model inside the application code - what the users use
 */
export const sceneMetadata = z.object({
  name: z.string().min(1).max(32).optional(),
  image: resourceIdentifier.optional(),
  appdata: z.string().min(1).max(16).optional(),
});

/**
 *
 * @typedef  {SceneMetadata} sceneMetadata
 * @property {string} - Human readable name of a resource
 * @property {ResourceIdentifier}
 * @property {string} - Application specific data. Free format string.
 */
export type SceneMetadata = z.infer<typeof sceneMetadata>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneMetadataResponse = sceneMetadata;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneMetadataRequest = sceneMetadata;
