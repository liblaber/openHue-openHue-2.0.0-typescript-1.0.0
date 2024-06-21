import { z } from 'zod';

export const temperaturePutType = z.enum(['temperature']);

export type TemperaturePutType = z.infer<typeof temperaturePutType>;
