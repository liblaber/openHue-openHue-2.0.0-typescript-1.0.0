import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const motionPutSensitivity = z.object({
  sensitivity: z.number().optional(),
});

/**
 *
 * @typedef  {MotionPutSensitivity} motionPutSensitivity
 * @property {number} - Sensitivity of the sensor. Value in the range 0 to sensitivity_max.
 */
export type MotionPutSensitivity = z.infer<typeof motionPutSensitivity>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const motionPutSensitivityResponse = motionPutSensitivity;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const motionPutSensitivityRequest = motionPutSensitivity;
