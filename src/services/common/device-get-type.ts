// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const deviceGetType = z.enum(['device']);

export type DeviceGetType = z.infer<typeof deviceGetType>;