import { z } from 'zod';

export const powerupPreset_2 = z.enum(['safety', 'powerfail', 'last_on_state', 'custom']);

export type PowerupPreset_2 = z.infer<typeof powerupPreset_2>;
