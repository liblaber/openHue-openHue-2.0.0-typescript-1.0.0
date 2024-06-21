import { z } from 'zod';

export const identifyAction = z.enum(['identify']);

export type IdentifyAction = z.infer<typeof identifyAction>;
