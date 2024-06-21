import { z } from 'zod';
import { error } from '../../resource/models/error';
import { motionGet } from './motion-get';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getMotionSensorOkResponse = z.object({
  errors: z.array(error).optional(),
  data: z.array(motionGet).optional(),
});

/**
 *
 * @typedef  {GetMotionSensorOkResponse} getMotionSensorOkResponse
 * @property {Error[]}
 * @property {MotionGet[]}
 */
export type GetMotionSensorOkResponse = z.infer<typeof getMotionSensorOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getMotionSensorOkResponseSchema = getMotionSensorOkResponse;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getMotionSensorOkResponseRequest = getMotionSensorOkResponse;
