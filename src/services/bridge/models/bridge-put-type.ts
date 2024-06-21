import { z } from 'zod';

export const bridgePutType = z.enum(['bridge']);

export type BridgePutType = z.infer<typeof bridgePutType>;
