# GroupedLightPut

**Properties**

| Name                  | Type                  | Required | Description                                                   |
| :-------------------- | :-------------------- | :------- | :------------------------------------------------------------ |
| type                  | GroupedLightPutType   | ❌       | Type of the supported resources (always `grouped_light` here) |
| on                    | On                    | ❌       |                                                               |
| dimming               | Dimming               | ❌       |                                                               |
| dimmingDelta          | DimmingDelta          | ❌       |                                                               |
| colorTemperature      | ColorTemperature      | ❌       |                                                               |
| colorTemperatureDelta | ColorTemperatureDelta | ❌       |                                                               |
| color                 | Color                 | ❌       |                                                               |
| alert                 | Alert                 | ❌       | Joined alert control                                          |
| signaling             | Signaling             | ❌       | Feature containing basic signaling properties.                |
| dynamics              | Dynamics2             | ❌       |                                                               |

# GroupedLightPutType

Type of the supported resources (always `grouped_light` here)

**Properties**

| Name          | Type   | Required | Description     |
| :------------ | :----- | :------- | :-------------- |
| grouped_light | string | ✅       | "grouped_light" |