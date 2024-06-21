# TemperatureGet

**Properties**

| Name        | Type               | Required | Description                                                    |
| :---------- | :----------------- | :------- | :------------------------------------------------------------- |
| type        | string             | ❌       | Type of the supported resources                                |
| id          | string             | ❌       | Unique identifier representing a specific resource instance    |
| idV1        | string             | ❌       | Clip v1 resource identifier                                    |
| owner       | ResourceIdentifier | ❌       |                                                                |
| enabled     | boolean            | ❌       | `true` when sensor is activated, `false` when deactivated<br/> |
| temperature | Temperature        | ❌       |                                                                |

# Temperature

**Properties**

| Name              | Type              | Required | Description                                                                |
| :---------------- | :---------------- | :------- | :------------------------------------------------------------------------- |
| temperature       | number            | ❌       | Deprecated. Moved to Temperature_report/temperature                        |
| temperatureValid  | boolean           | ❌       | Deprecated. Indication whether the value presented in temperature is valid |
| temperatureReport | TemperatureReport | ❌       |                                                                            |

# TemperatureReport

**Properties**

| Name        | Type   | Required | Description                                      |
| :---------- | :----- | :------- | :----------------------------------------------- |
| changed     | string | ❌       | last time the value of this property is changed. |
| temperature | number | ❌       | Temperature in 1.00 degrees Celsius              |
