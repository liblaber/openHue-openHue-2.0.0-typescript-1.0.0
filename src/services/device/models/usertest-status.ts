import { z } from 'zod';

export const usertestStatus = z.enum(['set', 'changing']);

export type UsertestStatus = z.infer<typeof usertestStatus>;
