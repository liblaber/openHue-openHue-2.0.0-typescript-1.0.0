import { z } from 'zod';

export const supportedGradientMode = z.enum([
  'interpolated_palette',
  'interpolated_palette_mirrored',
  'random_pixelated',
]);

export type SupportedGradientMode = z.infer<typeof supportedGradientMode>;
