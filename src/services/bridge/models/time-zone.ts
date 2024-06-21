import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const timeZone = z.object({
  timeZone: z.string().optional(),
});

/**
 *
 * @typedef  {TimeZone} timeZone
 * @property {string} - Time zone where the user's home is located (as Olson ID).
 */
export type TimeZone = z.infer<typeof timeZone>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const timeZoneResponse = z
  .object({
    time_zone: z.string().optional(),
  })
  .transform((data) => ({
    timeZone: data['time_zone'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const timeZoneRequest = timeZone.transform((data) => ({
  time_zone: data['timeZone'],
}));
