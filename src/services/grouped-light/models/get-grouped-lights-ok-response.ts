import { z } from 'zod';
import { error } from '../../resource/models/error';
import { groupedLightGet } from './grouped-light-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getGroupedLightsOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(groupedLightGet).optional(),
});

/**
 *
 * @typedef  {GetGroupedLightsOkResponse} getGroupedLightsOkResponse
 * @property {Error[]}
 * @property {GroupedLightGet[]}
 */
export type GetGroupedLightsOkResponse = z.infer<typeof getGroupedLightsOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getGroupedLightsOkResponseSchema = getGroupedLightsOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getGroupedLightsOkResponseRequest = getGroupedLightsOkResponse;
