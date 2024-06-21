# ActionGet

**Properties**

| Name   | Type               | Required | Description                                                 |
| :----- | :----------------- | :------- | :---------------------------------------------------------- |
| type   | string             | ❌       | Type of the supported resources                             |
| id     | string             | ❌       | Unique identifier representing a specific resource instance |
| idV1   | string             | ❌       | Clip v1 resource identifier                                 |
| owner  | ResourceIdentifier | ❌       |                                                             |
| target | ResourceIdentifier | ❌       |                                                             |
| action | ActionGetAction    | ❌       | The action to be executed on recall                         |

# ActionGetAction

The action to be executed on recall

**Properties**

| Name             | Type             | Required | Description                                   |
| :--------------- | :--------------- | :------- | :-------------------------------------------- |
| on               | On               | ❌       |                                               |
| dimming          | Dimming          | ❌       |                                               |
| color            | Color            | ❌       |                                               |
| colorTemperature | ColorTemperature | ❌       |                                               |
| gradient         | Gradient         | ❌       | Basic feature containing gradient properties. |
| effects          | ActionEffects_1  | ❌       | Basic feature containing effect properties.   |

# ActionEffects_1

Basic feature containing effect properties.

**Properties**

| Name   | Type             | Required | Description |
| :----- | :--------------- | :------- | :---------- |
| effect | SupportedEffects | ❌       |             |
