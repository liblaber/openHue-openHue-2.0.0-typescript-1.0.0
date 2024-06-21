import { z } from 'zod';
import { dimmingDeltaAction } from './dimming-delta-action';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dimmingDelta = z.object({
  action: dimmingDeltaAction.optional(),
  brightnessDelta: z.number().gte(0).lte(100).optional(),
});

/**
 * 
 * @typedef  {DimmingDelta} dimmingDelta   
 * @property {DimmingDeltaAction} 
 * @property {number} - Brightness percentage of full-scale increase delta to current dimlevel. Clip at Max-level or Min-level.

 */
export type DimmingDelta = z.infer<typeof dimmingDelta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingDeltaResponse = z
  .object({
    action: dimmingDeltaAction.optional(),
    brightness_delta: z.number().gte(0).lte(100).optional(),
  })
  .transform((data) => ({
    action: data['action'],
    brightnessDelta: data['brightness_delta'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingDeltaRequest = dimmingDelta.transform((data) => ({
  action: data['action'],
  brightness_delta: data['brightnessDelta'],
}));
