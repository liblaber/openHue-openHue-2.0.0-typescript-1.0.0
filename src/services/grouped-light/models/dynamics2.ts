import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dynamics2 = z.object({
  duration: z.number().gte(0).optional(),
});

/**
 *
 * @typedef  {Dynamics2} dynamics2
 * @property {number} - Duration of a light transition or timed effects in ms.
 */
export type Dynamics2 = z.infer<typeof dynamics2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dynamics2Response = dynamics2;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dynamics2Request = dynamics2;
