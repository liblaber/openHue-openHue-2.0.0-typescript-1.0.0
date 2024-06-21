import { z } from 'zod';
import { error } from '../../resource/models/error';
import { lightLevelGet } from './light-level-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getLightLevelOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(lightLevelGet).optional(),
});

/**
 *
 * @typedef  {GetLightLevelOkResponse} getLightLevelOkResponse
 * @property {Error[]}
 * @property {LightLevelGet[]}
 */
export type GetLightLevelOkResponse = z.infer<typeof getLightLevelOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getLightLevelOkResponseSchema = getLightLevelOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getLightLevelOkResponseRequest = getLightLevelOkResponse;
