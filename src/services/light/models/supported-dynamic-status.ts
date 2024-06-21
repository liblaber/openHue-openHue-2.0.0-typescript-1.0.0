import { z } from 'zod';

export const supportedDynamicStatus = z.enum(['dynamic_palette', 'none']);

export type SupportedDynamicStatus = z.infer<typeof supportedDynamicStatus>;
