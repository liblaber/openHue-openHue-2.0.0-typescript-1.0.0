import { z } from 'zod';

export const signal = z.enum(['no_signal', 'on_off', 'on_off_color', 'alternating']);

export type Signal = z.infer<typeof signal>;
