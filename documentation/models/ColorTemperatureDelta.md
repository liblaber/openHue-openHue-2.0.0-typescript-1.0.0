# ColorTemperatureDelta

**Properties**

| Name       | Type                        | Required | Description                                                                            |
| :--------- | :-------------------------- | :------- | :------------------------------------------------------------------------------------- |
| action     | ColorTemperatureDeltaAction | ❌       |                                                                                        |
| mirekDelta | number                      | ❌       | Mirek delta to current mirek. Clip at mirek_minimum and mirek_maximum of mirek_schema. |

# ColorTemperatureDeltaAction

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| up   | string | ✅       | "up"        |
| down | string | ✅       | "down"      |
| stop | string | ✅       | "stop"      |