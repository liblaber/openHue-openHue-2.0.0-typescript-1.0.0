# LightLevelGet

**Properties**

| Name    | Type               | Required | Description                                                 |
| :------ | :----------------- | :------- | :---------------------------------------------------------- |
| type    | string             | ❌       | Type of the supported resources                             |
| id      | string             | ❌       | Unique identifier representing a specific resource instance |
| idV1    | string             | ❌       | Clip v1 resource identifier                                 |
| owner   | ResourceIdentifier | ❌       |                                                             |
| enabled | boolean            | ❌       | true when sensor is activated, false when deactivated       |
| light   | Light              | ❌       |                                                             |

# Light

**Properties**

| Name             | Type             | Required | Description                                                                |
| :--------------- | :--------------- | :------- | :------------------------------------------------------------------------- |
| lightLevel       | number           | ❌       | Deprecated. Moved to light_level_report/light_level                        |
| lightLevelValid  | boolean          | ❌       | Deprecated. Indication whether the value presented in light_level is valid |
| lightLevelReport | LightLevelReport | ❌       |                                                                            |

# LightLevelReport

**Properties**

| Name       | Type   | Required | Description                                                                                                                                                                                                                                                                           |
| :--------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| changed    | string | ❌       | last time the value of this property is changed.                                                                                                                                                                                                                                      |
| lightLevel | number | ❌       | Light level in 10000\*log10(lux) +1 measured by sensor.<br/>Logarithmic scale used because the human eye adjusts to light levels and small changes at low<br/>lux levels are more noticeable than at high lux levels.<br/>This allows use of linear scale configuration sliders.<br/> |
