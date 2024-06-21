import { z } from 'zod';

export const bridgeHomeGetType = z.enum(['bridge_home']);

export type BridgeHomeGetType = z.infer<typeof bridgeHomeGetType>;
