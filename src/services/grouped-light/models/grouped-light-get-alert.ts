import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const groupedLightGetAlert = z.object({
  actionValues: z.array(z.string()).optional(),
});

/**
 * Joined alert control
 * @typedef  {GroupedLightGetAlert} groupedLightGetAlert - Joined alert control - Joined alert control
 * @property {string[]}
 */
export type GroupedLightGetAlert = z.infer<typeof groupedLightGetAlert>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightGetAlertResponse = z
  .object({
    action_values: z.array(z.string()).optional(),
  })
  .transform((data) => ({
    actionValues: data['action_values'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightGetAlertRequest = groupedLightGetAlert.transform((data) => ({
  action_values: data['actionValues'],
}));
