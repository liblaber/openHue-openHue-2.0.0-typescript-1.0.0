# GroupedLightGet

**Properties**

| Name      | Type                     | Required | Description                                                 |
| :-------- | :----------------------- | :------- | :---------------------------------------------------------- |
| type      | string                   | ❌       | Type of the supported resources                             |
| id        | string                   | ❌       | Unique identifier representing a specific resource instance |
| idV1      | string                   | ❌       | Clip v1 resource identifier                                 |
| owner     | ResourceIdentifier       | ❌       |                                                             |
| on        | On                       | ❌       |                                                             |
| dimming   | Dimming                  | ❌       |                                                             |
| alert     | GroupedLightGetAlert     | ❌       | Joined alert control                                        |
| signaling | GroupedLightGetSignaling | ❌       | Feature containing basic signaling properties.              |

# GroupedLightGetAlert

Joined alert control

**Properties**

| Name         | Type     | Required | Description |
| :----------- | :------- | :------- | :---------- |
| actionValues | string[] | ❌       |             |

# GroupedLightGetSignaling

Feature containing basic signaling properties.

**Properties**

| Name         | Type               | Required | Description                      |
| :----------- | :----------------- | :------- | :------------------------------- |
| signalValues | SupportedSignals[] | ❌       | Signals that the light supports. |