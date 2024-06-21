import { z } from 'zod';
import { error } from './error';
import { resourceGet } from './resource-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getResourcesOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(resourceGet).optional(),
});

/**
 *
 * @typedef  {GetResourcesOkResponse} getResourcesOkResponse
 * @property {Error[]}
 * @property {ResourceGet[]}
 */
export type GetResourcesOkResponse = z.infer<typeof getResourcesOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getResourcesOkResponseSchema = getResourcesOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getResourcesOkResponseRequest = getResourcesOkResponse;
