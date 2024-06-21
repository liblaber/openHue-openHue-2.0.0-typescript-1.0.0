import { z } from 'zod';
import { colorTemperatureDeltaAction } from './color-temperature-delta-action';

/**
 * The shape of the model inside the application code - what the users use
 */
export const colorTemperatureDelta = z.object({
  action: colorTemperatureDeltaAction.optional(),
  mirekDelta: z.number().gte(0).lte(347).optional(),
});

/**
 *
 * @typedef  {ColorTemperatureDelta} colorTemperatureDelta
 * @property {ColorTemperatureDeltaAction}
 * @property {number} - Mirek delta to current mirek. Clip at mirek_minimum and mirek_maximum of mirek_schema.
 */
export type ColorTemperatureDelta = z.infer<typeof colorTemperatureDelta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const colorTemperatureDeltaResponse = z
  .object({
    action: colorTemperatureDeltaAction.optional(),
    mirek_delta: z.number().gte(0).lte(347).optional(),
  })
  .transform((data) => ({
    action: data['action'],
    mirekDelta: data['mirek_delta'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const colorTemperatureDeltaRequest = colorTemperatureDelta.transform((data) => ({
  action: data['action'],
  mirek_delta: data['mirekDelta'],
}));
