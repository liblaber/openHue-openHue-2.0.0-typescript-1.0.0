import { z } from 'zod';

export const deviceGetType = z.enum(['device']);

export type DeviceGetType = z.infer<typeof deviceGetType>;
