import { z } from 'zod';

export const onMode_1 = z.enum(['on', 'toggle', 'previous']);

export type OnMode_1 = z.infer<typeof onMode_1>;
