// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const identifyAction = z.enum(['identify']);

export type IdentifyAction = z.infer<typeof identifyAction>;
