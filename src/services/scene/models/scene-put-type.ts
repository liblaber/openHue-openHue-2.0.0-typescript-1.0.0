import { z } from 'zod';

export const scenePutType = z.enum(['scene']);

export type ScenePutType = z.infer<typeof scenePutType>;
