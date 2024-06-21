import { z } from 'zod';

export const dimmingMode_2 = z.enum(['dimming', 'previous']);

export type DimmingMode_2 = z.infer<typeof dimmingMode_2>;
