import { z } from 'zod';

export const sceneRecallAction = z.enum(['active', 'dynamic_palette', 'static']);

export type SceneRecallAction = z.infer<typeof sceneRecallAction>;
