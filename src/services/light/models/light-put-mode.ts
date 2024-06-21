import { z } from 'zod';

export const lightPutMode = z.enum(['normal', 'streaming']);

export type LightPutMode = z.infer<typeof lightPutMode>;
