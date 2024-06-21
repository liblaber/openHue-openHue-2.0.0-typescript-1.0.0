import { z } from 'zod';

export const onMode_2 = z.enum(['on', 'toggle', 'previous']);

export type OnMode_2 = z.infer<typeof onMode_2>;
