// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { error, errorRequest, errorResponse } from '../../common/error';
import {
  resourceIdentifier,
  resourceIdentifierRequest,
  resourceIdentifierResponse,
} from '../../common/resource-identifier';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createSceneOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(resourceIdentifier).optional(),
});

/**
 *
 * @typedef  {CreateSceneOkResponse} createSceneOkResponse
 * @property {Error[]}
 * @property {ResourceIdentifier[]}
 */
export type CreateSceneOkResponse = z.infer<typeof createSceneOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createSceneOkResponseResponse = z
  .object({
    errors: z.array(errorResponse).optional(),
    data: z.array(resourceIdentifierResponse).optional(),
  })
  .transform((data) => ({
    errors: data['errors'],
    data: data['data'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createSceneOkResponseRequest = z
  .object({ errors: z.array(errorRequest).nullish(), data: z.array(resourceIdentifierRequest).nullish() })
  .transform((data) => ({
    errors: data['errors'],
    data: data['data'],
  }));
