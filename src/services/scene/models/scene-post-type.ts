import { z } from 'zod';

export const scenePostType = z.enum(['scene']);

export type ScenePostType = z.infer<typeof scenePostType>;
