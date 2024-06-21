import { z } from 'zod';
import { error } from '../../resource/models/error';
import { lightGet } from './light-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getLightsOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(lightGet).optional(),
});

/**
 *
 * @typedef  {GetLightsOkResponse} getLightsOkResponse
 * @property {Error[]}
 * @property {LightGet[]}
 */
export type GetLightsOkResponse = z.infer<typeof getLightsOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getLightsOkResponseSchema = getLightsOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getLightsOkResponseRequest = getLightsOkResponse;
