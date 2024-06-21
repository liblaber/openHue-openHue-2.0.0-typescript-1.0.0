import { z } from 'zod';
import { error } from '../../resource/models/error';
import { lightGet } from './light-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getLightOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(lightGet).optional(),
});

/**
 *
 * @typedef  {GetLightOkResponse} getLightOkResponse
 * @property {Error[]}
 * @property {LightGet[]}
 */
export type GetLightOkResponse = z.infer<typeof getLightOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getLightOkResponseSchema = getLightOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getLightOkResponseRequest = getLightOkResponse;
