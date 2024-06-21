import { z } from 'zod';

export const powerupPreset_1 = z.enum(['safety', 'powerfail', 'last_on_state', 'custom']);

export type PowerupPreset_1 = z.infer<typeof powerupPreset_1>;
