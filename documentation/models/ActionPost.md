# ActionPost

**Properties**

| Name   | Type               | Required | Description                         |
| :----- | :----------------- | :------- | :---------------------------------- |
| target | ResourceIdentifier | ✅       |                                     |
| action | ActionPostAction   | ✅       | The action to be executed on recall |

# ActionPostAction

The action to be executed on recall

**Properties**

| Name             | Type                   | Required | Description                                   |
| :--------------- | :--------------------- | :------- | :-------------------------------------------- |
| on               | On                     | ❌       |                                               |
| dimming          | Dimming                | ❌       |                                               |
| color            | Color                  | ❌       |                                               |
| colorTemperature | ActionColorTemperature | ❌       |                                               |
| gradient         | Gradient               | ❌       | Basic feature containing gradient properties. |
| effects          | ActionEffects_2        | ❌       | Basic feature containing effect properties.   |
| dynamics         | Dynamics2              | ❌       |                                               |

# ActionColorTemperature

**Properties**

| Name  | Type   | Required | Description                                                                       |
| :---- | :----- | :------- | :-------------------------------------------------------------------------------- |
| mirek | number | ❌       | color temperature in mirek or null when the light color is not in the ct spectrum |

# ActionEffects_2

Basic feature containing effect properties.

**Properties**

| Name   | Type             | Required | Description |
| :----- | :--------------- | :------- | :---------- |
| effect | SupportedEffects | ❌       |             |