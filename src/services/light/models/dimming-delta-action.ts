import { z } from 'zod';

export const dimmingDeltaAction = z.enum(['up', 'down', 'stop']);

export type DimmingDeltaAction = z.infer<typeof dimmingDeltaAction>;
