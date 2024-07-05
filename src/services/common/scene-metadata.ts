// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { resourceIdentifier, resourceIdentifierRequest, resourceIdentifierResponse } from './resource-identifier';

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
export const sceneMetadataResponse = z
  .object({
    name: z.string().min(1).max(32).optional(),
    image: resourceIdentifierResponse.optional(),
    appdata: z.string().min(1).max(16).optional(),
  })
  .transform((data) => ({
    name: data['name'],
    image: data['image'],
    appdata: data['appdata'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sceneMetadataRequest = z
  .object({ name: z.string().nullish(), image: resourceIdentifierRequest.nullish(), appdata: z.string().nullish() })
  .transform((data) => ({
    name: data['name'],
    image: data['image'],
    appdata: data['appdata'],
  }));