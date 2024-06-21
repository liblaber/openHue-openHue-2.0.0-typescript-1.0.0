import { z } from 'zod';

export const colorMode_2 = z.enum(['color_temperature', 'color', 'previous']);

export type ColorMode_2 = z.infer<typeof colorMode_2>;
