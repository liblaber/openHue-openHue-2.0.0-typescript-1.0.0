import { z } from 'zod';

export const colorMode_1 = z.enum(['color_temperature', 'color', 'previous']);

export type ColorMode_1 = z.infer<typeof colorMode_1>;
