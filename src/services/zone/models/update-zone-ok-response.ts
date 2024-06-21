import { z } from 'zod';
import { error } from '../../resource/models/error';
import { resourceIdentifier } from '../../resource/models/resource-identifier';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateZoneOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(resourceIdentifier).optional(),
});

/**
 *
 * @typedef  {UpdateZoneOkResponse} updateZoneOkResponse
 * @property {Error[]}
 * @property {ResourceIdentifier[]}
 */
export type UpdateZoneOkResponse = z.infer<typeof updateZoneOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateZoneOkResponseSchema = updateZoneOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateZoneOkResponseRequest = updateZoneOkResponse;
