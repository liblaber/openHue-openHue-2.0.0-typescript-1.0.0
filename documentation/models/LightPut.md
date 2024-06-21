# LightPut

**Properties**

| Name                  | Type                  | Required | Description                                                                    |
| :-------------------- | :-------------------- | :------- | :----------------------------------------------------------------------------- |
| type                  | string                | ❌       | Type of the supported resources (always `light` here)                          |
| on                    | On                    | ❌       |                                                                                |
| dimming               | Dimming               | ❌       |                                                                                |
| dimmingDelta          | DimmingDelta          | ❌       |                                                                                |
| colorTemperature      | ColorTemperature      | ❌       |                                                                                |
| colorTemperatureDelta | ColorTemperatureDelta | ❌       |                                                                                |
| color                 | Color                 | ❌       |                                                                                |
| dynamics              | Dynamics              | ❌       |                                                                                |
| alert                 | Alert                 | ❌       | Joined alert control                                                           |
| signaling             | Signaling             | ❌       | Feature containing basic signaling properties.                                 |
| mode                  | LightPutMode          | ❌       |                                                                                |
| gradient              | Gradient              | ❌       | Basic feature containing gradient properties.                                  |
| effects               | Effects               | ❌       | Basic feature containing effect properties.                                    |
| timedEffects          | LightPutTimedEffects  | ❌       | Basic feature containing timed effect properties.                              |
| powerup               | Powerup               | ❌       | Feature containing properties to configure powerup behaviour of a lightsource. |

# LightPutMode

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| normal    | string | ✅       | "normal"    |
| streaming | string | ✅       | "streaming" |

# LightPutTimedEffects

Basic feature containing timed effect properties.

**Properties**

| Name     | Type                  | Required | Description                                                                                                                                                                                                                                                                                                                             |
| :------- | :-------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| effect   | SupportedTimedEffects | ❌       | Current status values the light is in regarding timed effects                                                                                                                                                                                                                                                                           |
| duration | number                | ❌       | Duration is mandatory when timed effect is set except for no_effect. Resolution decreases for a larger duration. e.g Effects with duration smaller than a minute will be rounded to a resolution of 1s, while effects with duration larger than an hour will be arounded up to a resolution of 300s. Duration has a max of 21600000 ms. |