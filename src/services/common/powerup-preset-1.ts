// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const powerupPreset1 = z.enum(['safety', 'powerfail', 'last_on_state', 'custom']);

export type PowerupPreset1 = z.infer<typeof powerupPreset1>;
