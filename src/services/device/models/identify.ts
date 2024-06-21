import { z } from 'zod';
import { identifyAction } from './identify-action';

/**
 * The shape of the model inside the application code - what the users use
 */
export const identify = z.object({
  action: identifyAction.optional(),
});

/**
 * 
 * @typedef  {Identify} identify   
 * @property {IdentifyAction} - Triggers a visual identification sequence, current implemented as (which can change in the future):
Bridge performs Zigbee LED identification cycles for 5 seconds Lights perform one breathe cycle Sensors
perform LED identification cycles for 15 seconds

 */
export type Identify = z.infer<typeof identify>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const identifyResponse = identify;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const identifyRequest = identify;
