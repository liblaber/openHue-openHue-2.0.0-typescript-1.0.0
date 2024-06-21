import { z } from 'zod';

export const supportedSignals = z.enum(['no_signal', 'on_off', 'on_off_color', 'alternating']);

export type SupportedSignals = z.infer<typeof supportedSignals>;
