import { z } from 'zod';

export const groupedLightPutType = z.enum(['grouped_light']);

export type GroupedLightPutType = z.infer<typeof groupedLightPutType>;
