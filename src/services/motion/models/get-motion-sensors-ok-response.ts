import { z } from 'zod';
import { error } from '../../resource/models/error';
import { motionGet } from './motion-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getMotionSensorsOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(motionGet).optional(),
});

/**
 *
 * @typedef  {GetMotionSensorsOkResponse} getMotionSensorsOkResponse
 * @property {Error[]}
 * @property {MotionGet[]}
 */
export type GetMotionSensorsOkResponse = z.infer<typeof getMotionSensorsOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getMotionSensorsOkResponseSchema = getMotionSensorsOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getMotionSensorsOkResponseRequest = getMotionSensorsOkResponse;
