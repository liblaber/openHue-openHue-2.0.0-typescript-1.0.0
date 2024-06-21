import { z } from 'zod';

export const dimmingMode_1 = z.enum(['dimming', 'previous']);

export type DimmingMode_1 = z.infer<typeof dimmingMode_1>;
