import { z } from 'zod';
import { batteryState } from './battery-state';

/**
 * The shape of the model inside the application code - what the users use
 */
export const powerState = z.object({
  batteryState: batteryState.optional(),
  batteryLevel: z.number().gte(0).lte(100).optional(),
});

/**
 * 
 * @typedef  {PowerState} powerState   
 * @property {BatteryState} - Status of the power source of a device, only for battery powered devices.

- `normal` – battery level is sufficient
- `low` – battery level low, some features (e.g. software update) might stop working, please change battery soon
- `critical` – battery level critical, device can fail any moment

 * @property {number} - The current battery state in percent, only for battery powered devices.
 */
export type PowerState = z.infer<typeof powerState>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const powerStateResponse = z
  .object({
    battery_state: batteryState.optional(),
    battery_level: z.number().gte(0).lte(100).optional(),
  })
  .transform((data) => ({
    batteryState: data['battery_state'],
    batteryLevel: data['battery_level'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const powerStateRequest = powerState.transform((data) => ({
  battery_state: data['batteryState'],
  battery_level: data['batteryLevel'],
}));
