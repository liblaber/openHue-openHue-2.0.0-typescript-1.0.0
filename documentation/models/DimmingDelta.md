# DimmingDelta

**Properties**

| Name            | Type               | Required | Description                                                                                                  |
| :-------------- | :----------------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| action          | DimmingDeltaAction | ❌       |                                                                                                              |
| brightnessDelta | number             | ❌       | Brightness percentage of full-scale increase delta to current dimlevel. Clip at Max-level or Min-level.<br/> |

# DimmingDeltaAction

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| up   | string | ✅       | "up"        |
| down | string | ✅       | "down"      |
| stop | string | ✅       | "stop"      |
