import { z } from 'zod';
import { colorMode_2 } from './color-mode-2';
import { colorColorTemperature_2 } from './color-color-temperature-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dimmingColor_2 = z.object({
  mode: colorMode_2.optional(),
  colorTemperature: colorColorTemperature_2.optional(),
});

/**
 *
 * @typedef  {DimmingColor_2} dimmingColor_2
 * @property {ColorMode_2} - State to activate after powerup. Availability of “color_temperature” and “color” modes depend on the capabilities of the lamp. Colortemperature will set the colortemperature to the specified value after power up. When setting color_temperature, the color_temperature property must be included Color will set the color tot he specified value after power up. When setting color mode, the color property must be included Previous will set color to the state it was in before powering off.
 * @property {ColorColorTemperature_2}
 */
export type DimmingColor_2 = z.infer<typeof dimmingColor_2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingColor_2Response = z
  .object({
    mode: colorMode_2.optional(),
    color_temperature: colorColorTemperature_2.optional(),
  })
  .transform((data) => ({
    mode: data['mode'],
    colorTemperature: data['color_temperature'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dimmingColor_2Request = dimmingColor_2.transform((data) => ({
  mode: data['mode'],
  color_temperature: data['colorTemperature'],
}));
