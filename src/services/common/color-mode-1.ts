// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const colorMode1 = z.enum(['color_temperature', 'color', 'previous']);

export type ColorMode1 = z.infer<typeof colorMode1>;
