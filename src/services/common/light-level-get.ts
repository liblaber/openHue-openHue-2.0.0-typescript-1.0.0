// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { resourceIdentifier, resourceIdentifierRequest, resourceIdentifierResponse } from './resource-identifier';
import { light, lightRequest, lightResponse } from './light';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightLevelGet = z.object({
  type_: z.string().optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  owner: resourceIdentifier.optional(),
  enabled: z.boolean().optional(),
  light: light.optional(),
});

/**
 *
 * @typedef  {LightLevelGet} lightLevelGet
 * @property {string} - Type of the supported resources
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {boolean} - true when sensor is activated, false when deactivated
 * @property {Light}
 */
export type LightLevelGet = z.infer<typeof lightLevelGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightLevelGetResponse = z
  .object({
    type: z.string().optional(),
    id: z
      .string()
      .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
      .optional(),
    id_v1: z
      .string()
      .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
      .optional(),
    owner: resourceIdentifierResponse.optional(),
    enabled: z.boolean().optional(),
    light: lightResponse.optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    enabled: data['enabled'],
    light: data['light'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightLevelGetRequest = z
  .object({
    type_: z.string().nullish(),
    id: z.string().nullish(),
    idV1: z.string().nullish(),
    owner: resourceIdentifierRequest.nullish(),
    enabled: z.boolean().nullish(),
    light: lightRequest.nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    id: data['id'],
    id_v1: data['idV1'],
    owner: data['owner'],
    enabled: data['enabled'],
    light: data['light'],
  }));