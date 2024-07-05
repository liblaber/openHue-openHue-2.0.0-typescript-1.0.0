# LightGet

**Properties**

| Name             | Type                     | Required | Description                                                                    |
| :--------------- | :----------------------- | :------- | :----------------------------------------------------------------------------- |
| type\_           | string                   | ❌       | Type of the supported resources                                                |
| id               | string                   | ❌       | Unique identifier representing a specific resource instance                    |
| idV1             | string                   | ❌       | Clip v1 resource identifier                                                    |
| owner            | ResourceIdentifier       | ❌       |                                                                                |
| metadata         | LightGetMetadata         | ❌       | Deprecated, use metadata on device level                                       |
| on               | On                       | ❌       |                                                                                |
| dimming          | LightGetDimming          | ❌       |                                                                                |
| colorTemperature | LightGetColorTemperature | ❌       |                                                                                |
| color            | LightGetColor            | ❌       |                                                                                |
| dynamics         | LightGetDynamics         | ❌       |                                                                                |
| alert            | any                      | ❌       | TODO                                                                           |
| signaling        | LightGetSignaling        | ❌       | Feature containing signaling properties.                                       |
| mode             | LightGetMode             | ❌       |                                                                                |
| gradient         | LightGetGradient         | ❌       |                                                                                |
| effects          | LightGetEffects          | ❌       | Basic feature containing effect properties.                                    |
| timedEffects     | LightGetTimedEffects     | ❌       | Basic feature containing timed effect properties.                              |
| powerup          | LightGetPowerup          | ❌       | Feature containing properties to configure powerup behaviour of a lightsource. |

# LightGetMetadata

Deprecated, use metadata on device level

**Properties**

| Name       | Type           | Required | Description                           |
| :--------- | :------------- | :------- | :------------------------------------ |
| name       | string         | ❌       | Human readable name of a resource     |
| archetype  | LightArchetype | ❌       | Light archetype                       |
| fixedMired | number         | ❌       | A fixed mired value of the white lamp |

# LightGetDimming

**Properties**

| Name        | Type   | Required | Description                                                                                  |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------- |
| brightness  | number | ❌       | Brightness percentage. value cannot be 0, writing 0 changes it to lowest possible brightness |
| minDimLevel | number | ❌       | Percentage of the maximum lumen the device outputs on minimum brightness                     |

# LightGetColorTemperature

**Properties**

| Name        | Type        | Required | Description                                                                       |
| :---------- | :---------- | :------- | :-------------------------------------------------------------------------------- |
| mirek       | number      | ❌       | color temperature in mirek or null when the light color is not in the ct spectrum |
| mirekValid  | boolean     | ❌       | Indication whether the value presented in mirek is valid                          |
| mirekSchema | MirekSchema | ❌       |                                                                                   |

# MirekSchema

**Properties**

| Name         | Type   | Required | Description                                   |
| :----------- | :----- | :------- | :-------------------------------------------- |
| mirekMinimum | number | ❌       | minimum color temperature this light supports |
| mirekMaximum | number | ❌       | maximum color temperature this light supports |

# LightGetColor

**Properties**

| Name      | Type          | Required | Description                                                                                                                                                                                                                                                               |
| :-------- | :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| xy        | GamutPosition | ❌       | CIE XY gamut position                                                                                                                                                                                                                                                     |
| gamut     | Gamut         | ❌       | Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.                                                                                                                                                     |
| gamutType | GamutType     | ❌       | The gammut types supported by hue – A Gamut of early Philips color-only products – B Limited gamut of first Hue color products – C Richer color gamut of Hue white and color ambiance products – other Color gamut of non-hue products with non-hue gamuts resp w/o gamut |

# Gamut

Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.

**Properties**

| Name  | Type          | Required | Description           |
| :---- | :------------ | :------- | :-------------------- |
| red   | GamutPosition | ❌       | CIE XY gamut position |
| green | GamutPosition | ❌       | CIE XY gamut position |
| blue  | GamutPosition | ❌       | CIE XY gamut position |

# GamutType

The gammut types supported by hue – A Gamut of early Philips color-only products – B Limited gamut of first Hue color products – C Richer color gamut of Hue white and color ambiance products – other Color gamut of non-hue products with non-hue gamuts resp w/o gamut

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| A     | string | ✅       | "A"         |
| B     | string | ✅       | "B"         |
| C     | string | ✅       | "C"         |
| other | string | ✅       | "other"     |

# LightGetDynamics

**Properties**

| Name         | Type                     | Required | Description                                                                                                                                                                                                      |
| :----------- | :----------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status       | SupportedDynamicStatus   | ❌       | Current status of the lamp with dynamics.                                                                                                                                                                        |
| statusValues | SupportedDynamicStatus[] | ❌       | Statuses in which a lamp could be when playing dynamics.                                                                                                                                                         |
| speed        | number                   | ❌       | speed of dynamic palette or effect. The speed is valid for the dynamic palette if the status is dynamic_palette or for the corresponding effect listed in status. In case of status none, the speed is not valid |
| speedValid   | boolean                  | ❌       | Indicates whether the value presented in speed is valid                                                                                                                                                          |

# LightGetSignaling

Feature containing signaling properties.

**Properties**

| Name         | Type               | Required | Description                                                                                            |
| :----------- | :----------------- | :------- | :----------------------------------------------------------------------------------------------------- |
| signalValues | SupportedSignals[] | ❌       |                                                                                                        |
| estimatedEnd | number             | ❌       | Timestamp indicating when the active signal is expected to end. Value is not set if there is no_signal |
| colors       | Color[]            | ❌       | Colors that were provided for the active effect.                                                       |

# LightGetMode

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| normal    | string | ✅       | "normal"    |
| streaming | string | ✅       | "streaming" |

# LightGetGradient

**Properties**

| Name          | Type                    | Required | Description                                                                                                                         |
| :------------ | :---------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| points        | Color[]                 | ❌       | Collection of gradients points. For control of the gradient points through a PUT a minimum of 2 points need to be provided.         |
| mode          | SupportedGradientMode   | ❌       | Mode in which the points are currently being deployed. If not provided during PUT/POST it will be defaulted to interpolated_palette |
| pointsCapable | number                  | ❌       | Number of color points that gradient lamp is capable of showing with gradience.                                                     |
| modeValues    | SupportedGradientMode[] | ❌       | Modes a gradient device can deploy the gradient palette of colors                                                                   |
| pixelCount    | number                  | ❌       | Number of pixels in the device                                                                                                      |

# LightGetEffects

Basic feature containing effect properties.

**Properties**

| Name         | Type               | Required | Description                                                              |
| :----------- | :----------------- | :------- | :----------------------------------------------------------------------- |
| status       | SupportedEffects   | ❌       |                                                                          |
| statusValues | SupportedEffects[] | ❌       | Possible status values in which a light could be when playing an effect. |
| effect       | SupportedEffects   | ❌       |                                                                          |
| effectValues | SupportedEffects[] | ❌       | Possible status values in which a light could be when playing an effect. |

# LightGetTimedEffects

Basic feature containing timed effect properties.

**Properties**

| Name         | Type                    | Required | Description                                                                                                                                                                                                                                                                                                                             |
| :----------- | :---------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| effect       | SupportedTimedEffects   | ❌       | Current status values the light is in regarding timed effects                                                                                                                                                                                                                                                                           |
| effectValues | SupportedTimedEffects[] | ❌       | Possible timed effect values you can set in a light                                                                                                                                                                                                                                                                                     |
| status       | SupportedTimedEffects   | ❌       | Current status values the light is in regarding timed effects                                                                                                                                                                                                                                                                           |
| statusValues | SupportedTimedEffects[] | ❌       | Possible status values in which a light could be when playing a timed effect.                                                                                                                                                                                                                                                           |
| duration     | number                  | ❌       | Duration is mandatory when timed effect is set except for no_effect. Resolution decreases for a larger duration. e.g Effects with duration smaller than a minute will be rounded to a resolution of 1s, while effects with duration larger than an hour will be arounded up to a resolution of 300s. Duration has a max of 21600000 ms. |

# LightGetPowerup

Feature containing properties to configure powerup behaviour of a lightsource.

**Properties**

| Name       | Type            | Required | Description                                                                                                                      |
| :--------- | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------- |
| preset     | PowerupPreset1  | ❌       | When setting the custom preset the additional properties can be set. For all other presets, no other properties can be included. |
| configured | boolean         | ❌       | Indicates if the shown values have been configured in the lightsource.                                                           |
| on1        | PowerupOn1      | ❌       |                                                                                                                                  |
| dimming    | PowerupDimming1 | ❌       |                                                                                                                                  |

# PowerupPreset1

When setting the custom preset the additional properties can be set. For all other presets, no other properties can be included.

**Properties**

| Name          | Type   | Required | Description     |
| :------------ | :----- | :------- | :-------------- |
| safety        | string | ✅       | "safety"        |
| powerfail     | string | ✅       | "powerfail"     |
| last_on_state | string | ✅       | "last_on_state" |
| custom        | string | ✅       | "custom"        |

# PowerupOn1

**Properties**

| Name | Type    | Required | Description                                                                                                                                                                                                                                                                                 |
| :--- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mode | OnMode1 | ❌       | State to activate after powerup. On will use the value specified in the “on” property. When setting mode “on”, the on property must be included. Toggle will alternate between on and off on each subsequent power toggle. Previous will return to the state it was in before powering off. |
| on1  | On      | ❌       |                                                                                                                                                                                                                                                                                             |

# OnMode1

State to activate after powerup. On will use the value specified in the “on” property. When setting mode “on”, the on property must be included. Toggle will alternate between on and off on each subsequent power toggle. Previous will return to the state it was in before powering off.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| on       | string | ✅       | "on"        |
| toggle   | string | ✅       | "toggle"    |
| previous | string | ✅       | "previous"  |

# PowerupDimming1

**Properties**

| Name    | Type          | Required | Description                                                                                                                                                                                                         |
| :------ | :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mode    | DimmingMode1  | ❌       | Dimming will set the brightness to the specified value after power up. When setting mode “dimming”, the dimming property must be included. Previous will set brightness to the state it was in before powering off. |
| dimming | Dimming       | ❌       |                                                                                                                                                                                                                     |
| color1  | DimmingColor1 | ❌       |                                                                                                                                                                                                                     |

# DimmingMode1

Dimming will set the brightness to the specified value after power up. When setting mode “dimming”, the dimming property must be included. Previous will set brightness to the state it was in before powering off.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| dimming  | string | ✅       | "dimming"   |
| previous | string | ✅       | "previous"  |

# DimmingColor1

**Properties**

| Name             | Type                   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------------- | :--------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode             | ColorMode1             | ❌       | State to activate after powerup. Availability of “color_temperature” and “color” modes depend on the capabilities of the lamp. Colortemperature will set the colortemperature to the specified value after power up. When setting color_temperature, the color_temperature property must be included Color will set the color tot he specified value after power up. When setting color mode, the color property must be included Previous will set color to the state it was in before powering off. |
| colorTemperature | ColorColorTemperature1 | ❌       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# ColorMode1

State to activate after powerup. Availability of “color_temperature” and “color” modes depend on the capabilities of the lamp. Colortemperature will set the colortemperature to the specified value after power up. When setting color_temperature, the color_temperature property must be included Color will set the color tot he specified value after power up. When setting color mode, the color property must be included Previous will set color to the state it was in before powering off.

**Properties**

| Name              | Type   | Required | Description         |
| :---------------- | :----- | :------- | :------------------ |
| color_temperature | string | ✅       | "color_temperature" |
| color             | string | ✅       | "color"             |
| previous          | string | ✅       | "previous"          |

# ColorColorTemperature1

**Properties**

| Name   | Type   | Required | Description                                                                       |
| :----- | :----- | :------- | :-------------------------------------------------------------------------------- |
| mirek  | number | ❌       | color temperature in mirek or null when the light color is not in the ct spectrum |
| color1 | Color  | ❌       |                                                                                   |

<!-- This file was generated by liblab | https://liblab.com/ -->
