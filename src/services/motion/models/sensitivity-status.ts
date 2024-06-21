import { z } from 'zod';

export const sensitivityStatus = z.enum(['set', 'changing']);

export type SensitivityStatus = z.infer<typeof sensitivityStatus>;
