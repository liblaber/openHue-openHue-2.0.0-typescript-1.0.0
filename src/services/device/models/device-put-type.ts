import { z } from 'zod';

export const devicePutType = z.enum(['device']);

export type DevicePutType = z.infer<typeof devicePutType>;
