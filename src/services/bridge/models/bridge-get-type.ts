import { z } from 'zod';

export const bridgeGetType = z.enum(['bridge']);

export type BridgeGetType = z.infer<typeof bridgeGetType>;
