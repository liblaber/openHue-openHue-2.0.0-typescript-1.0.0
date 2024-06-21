import { z } from 'zod';

export const active = z.enum(['inactive', 'static', 'dynamic_palette']);

export type Active = z.infer<typeof active>;
