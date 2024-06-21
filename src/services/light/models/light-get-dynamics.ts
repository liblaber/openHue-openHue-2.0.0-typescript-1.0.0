import { z } from 'zod';
import { supportedDynamicStatus } from './supported-dynamic-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGetDynamics = z.object({
  status: supportedDynamicStatus.optional(),
  statusValues: z.array(supportedDynamicStatus).optional(),
  speed: z.number().gte(0).lte(0).optional(),
  speedValid: z.boolean().optional(),
});

/**
 *
 * @typedef  {LightGetDynamics} lightGetDynamics
 * @property {SupportedDynamicStatus} - Current status of the lamp with dynamics.
 * @property {SupportedDynamicStatus[]} - Statuses in which a lamp could be when playing dynamics.
 * @property {number} - speed of dynamic palette or effect. The speed is valid for the dynamic palette if the status is dynamic_palette or for the corresponding effect listed in status. In case of status none, the speed is not valid
 * @property {boolean} - Indicates whether the value presented in speed is valid
 */
export type LightGetDynamics = z.infer<typeof lightGetDynamics>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetDynamicsResponse = z
  .object({
    status: supportedDynamicStatus.optional(),
    status_values: z.array(supportedDynamicStatus).optional(),
    speed: z.number().gte(0).lte(0).optional(),
    speed_valid: z.boolean().optional(),
  })
  .transform((data) => ({
    status: data['status'],
    statusValues: data['status_values'],
    speed: data['speed'],
    speedValid: data['speed_valid'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetDynamicsRequest = lightGetDynamics.transform((data) => ({
  status: data['status'],
  status_values: data['statusValues'],
  speed: data['speed'],
  speed_valid: data['speedValid'],
}));
