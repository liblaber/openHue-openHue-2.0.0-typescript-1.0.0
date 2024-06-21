import { z } from 'zod';

export const batteryState = z.enum(['normal', 'low', 'critical']);

export type BatteryState = z.infer<typeof batteryState>;
