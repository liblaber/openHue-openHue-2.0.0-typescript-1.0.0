import { z } from 'zod';

export const lightGetMode = z.enum(['normal', 'streaming']);

export type LightGetMode = z.infer<typeof lightGetMode>;
