import { z } from 'zod';

export const supportedEffects = z.enum([
  'prism',
  'opal',
  'glisten',
  'sparkle',
  'fire',
  'candle',
  'no_effect',
]);

export type SupportedEffects = z.infer<typeof supportedEffects>;
