// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { resourceIdentifier, resourceIdentifierRequest, resourceIdentifierResponse } from './resource-identifier';
import { actionGetAction, actionGetActionRequest, actionGetActionResponse } from './action-get-action';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionGet = z.object({
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
  target: resourceIdentifier.optional(),
  action: actionGetAction.optional(),
});

/**
 *
 * @typedef  {ActionGet} actionGet
 * @property {string} - Type of the supported resources
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {ResourceIdentifier}
 * @property {ActionGetAction} - The action to be executed on recall
 */
export type ActionGet = z.infer<typeof actionGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionGetResponse = z
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
    target: resourceIdentifierResponse.optional(),
    action: actionGetActionResponse.optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    target: data['target'],
    action: data['action'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionGetRequest = z
  .object({
    type_: z.string().nullish(),
    id: z.string().nullish(),
    idV1: z.string().nullish(),
    owner: resourceIdentifierRequest.nullish(),
    target: resourceIdentifierRequest.nullish(),
    action: actionGetActionRequest.nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    id: data['id'],
    id_v1: data['idV1'],
    owner: data['owner'],
    target: data['target'],
    action: data['action'],
  }));