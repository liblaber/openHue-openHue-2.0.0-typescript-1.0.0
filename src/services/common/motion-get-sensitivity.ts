// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { sensitivityStatus } from './sensitivity-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const motionGetSensitivity = z.object({
  status: sensitivityStatus.optional(),
  sensitivity: z.number().optional(),
  sensitivityMax: z.number().optional(),
});

/**
 *
 * @typedef  {MotionGetSensitivity} motionGetSensitivity
 * @property {SensitivityStatus}
 * @property {number} - Sensitivity of the sensor. Value in the range 0 to sensitivity_max
 * @property {number} - Maximum value of the sensitivity configuration attribute.
 */
export type MotionGetSensitivity = z.infer<typeof motionGetSensitivity>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const motionGetSensitivityResponse = z
  .object({
    status: sensitivityStatus.optional(),
    sensitivity: z.number().optional(),
    sensitivity_max: z.number().optional(),
  })
  .transform((data) => ({
    status: data['status'],
    sensitivity: data['sensitivity'],
    sensitivityMax: data['sensitivity_max'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const motionGetSensitivityRequest = z
  .object({
    status: sensitivityStatus.nullish(),
    sensitivity: z.number().nullish(),
    sensitivityMax: z.number().nullish(),
  })
  .transform((data) => ({
    status: data['status'],
    sensitivity: data['sensitivity'],
    sensitivity_max: data['sensitivityMax'],
  }));
