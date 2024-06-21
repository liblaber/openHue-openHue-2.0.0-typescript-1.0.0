import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dynamics = z.object({
  duration: z.number().optional(),
  speed: z.number().gte(0).lte(0).optional(),
});

/**
 * 
 * @typedef  {Dynamics} dynamics   
 * @property {number} - Duration of a light transition or timed effects in ms.
 * @property {number} - Speed of dynamic palette or effect.
The speed is valid for the dynamic palette if the status is `dynamic_palette` or for the corresponding effect listed in status.
In case of status `none`, the speed is not valid.

 */
export type Dynamics = z.infer<typeof dynamics>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dynamicsResponse = dynamics;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dynamicsRequest = dynamics;