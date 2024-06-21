import { z } from 'zod';
import { error } from '../../resource/models/error';
import { resourceIdentifier } from '../../resource/models/resource-identifier';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateDeviceOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(resourceIdentifier).optional(),
});

/**
 *
 * @typedef  {UpdateDeviceOkResponse} updateDeviceOkResponse
 * @property {Error[]}
 * @property {ResourceIdentifier[]}
 */
export type UpdateDeviceOkResponse = z.infer<typeof updateDeviceOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateDeviceOkResponseSchema = updateDeviceOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateDeviceOkResponseRequest = updateDeviceOkResponse;
