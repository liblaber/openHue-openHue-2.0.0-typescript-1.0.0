import { z } from 'zod';
import { colorMode_1 } from './color-mode-1';
import { colorColorTemperature_1 } from './color-color-temperature-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dimmingColor_1 = z.object({
  mode: colorMode_1.optional(),
  colorTemperature: colorColorTemperature_1.optional(),
});

/**
 *
 * @typedef  {DimmingColor_1} dimmingColor_1
 * @property {ColorMode_1} - State to activate after powerup. Availability of “color_temperature” and “color” modes depend on the capabilities of the lamp. Colortemperature will set the colortemperature to the specified value after power up. When setting color_temperature, the color_temperature property must be included Color will set the color tot he specified value after power up. When setting color mode, the color property must be included Previous will set color to the state it was in before powering off.
 * @property {ColorColorTemperature_1}
 */
export type DimmingColor_1 = z.infer<typeof dimmingColor_1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingColor_1Response = z
  .object({
    mode: colorMode_1.optional(),
    color_temperature: colorColorTemperature_1.optional(),
  })
  .transform((data) => ({
    mode: data['mode'],
    colorTemperature: data['color_temperature'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingColor_1Request = dimmingColor_1.transform((data) => ({
  mode: data['mode'],
  color_temperature: data['colorTemperature'],
}));
