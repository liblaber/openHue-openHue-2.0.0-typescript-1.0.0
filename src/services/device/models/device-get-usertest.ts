import { z } from 'zod';
import { usertestStatus } from './usertest-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deviceGetUsertest = z.object({
  status: usertestStatus.optional(),
  usertest: z.boolean().optional(),
});

/**
 * 
 * @typedef  {DeviceGetUsertest} deviceGetUsertest   
 * @property {UsertestStatus} 
 * @property {boolean} - Activates or extends user usertest mode of device for 120 seconds.
`false` deactivates usertest mode.
In usertest mode, devices report changes in state faster and indicate state changes on device LED (if applicable)

 */
export type DeviceGetUsertest = z.infer<typeof deviceGetUsertest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceGetUsertestResponse = deviceGetUsertest;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceGetUsertestRequest = deviceGetUsertest;
