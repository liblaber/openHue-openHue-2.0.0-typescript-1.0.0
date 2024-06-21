import { z } from 'zod';

export const sceneGetType = z.enum(['scene']);

export type SceneGetType = z.infer<typeof sceneGetType>;
