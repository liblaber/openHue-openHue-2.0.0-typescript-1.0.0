// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const dimmingMode2 = z.enum(['dimming', 'previous']);

export type DimmingMode2 = z.infer<typeof dimmingMode2>;
