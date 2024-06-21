import { z } from 'zod';

export const gamutType = z.enum(['A', 'B', 'C', 'other']);

export type GamutType = z.infer<typeof gamutType>;
