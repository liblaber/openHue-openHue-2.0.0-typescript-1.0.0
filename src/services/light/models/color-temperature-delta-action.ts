import { z } from 'zod';

export const colorTemperatureDeltaAction = z.enum(['up', 'down', 'stop']);

export type ColorTemperatureDeltaAction = z.infer<typeof colorTemperatureDeltaAction>;
