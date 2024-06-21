import { z } from 'zod';
import { motionPutSensitivity } from './motion-put-sensitivity';

/**
 * The shape of the model inside the application code - what the users use
 */
export const motionPut = z.object({
  type: z.string().optional(),
  enabled: z.boolean().optional(),
  sensitivity: motionPutSensitivity.optional(),
});

/**
 *
 * @typedef  {MotionPut} motionPut
 * @property {string} - Type of the supported resources (always `motion` here)
 * @property {boolean} - true when the sensor is activated, false when deactivated
 * @property {MotionPutSensitivity}
 */
export type MotionPut = z.infer<typeof motionPut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const motionPutResponse = motionPut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const motionPutRequest = motionPut;
