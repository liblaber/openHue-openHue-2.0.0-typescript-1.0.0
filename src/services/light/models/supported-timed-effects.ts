import { z } from 'zod';

export const supportedTimedEffects = z.enum(['sunrise', 'no_effect']);

export type SupportedTimedEffects = z.infer<typeof supportedTimedEffects>;
