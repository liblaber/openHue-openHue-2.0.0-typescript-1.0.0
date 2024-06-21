# DevicePowerGet

**Properties**

| Name       | Type               | Required | Description                                                 |
| :--------- | :----------------- | :------- | :---------------------------------------------------------- |
| type       | string             | ❌       | Type of the supported resources                             |
| id         | string             | ❌       | Unique identifier representing a specific resource instance |
| idV1       | string             | ❌       | Clip v1 resource identifier                                 |
| owner      | ResourceIdentifier | ❌       |                                                             |
| powerState | PowerState         | ❌       |                                                             |

# PowerState

**Properties**

| Name         | Type         | Required | Description                                                                                                                                                                                                                                                                                                                 |
| :----------- | :----------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| batteryState | BatteryState | ❌       | Status of the power source of a device, only for battery powered devices.<br/><br/>- `normal` – battery level is sufficient<br/>- `low` – battery level low, some features (e.g. software update) might stop working, please change battery soon<br/>- `critical` – battery level critical, device can fail any moment<br/> |
| batteryLevel | number       | ❌       | The current battery state in percent, only for battery powered devices.                                                                                                                                                                                                                                                     |

# BatteryState

Status of the power source of a device, only for battery powered devices.<br/><br/>- `normal` – battery level is sufficient<br/>- `low` – battery level low, some features (e.g. software update) might stop working, please change battery soon<br/>- `critical` – battery level critical, device can fail any moment<br/>

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| normal   | string | ✅       | "normal"    |
| low      | string | ✅       | "low"       |
| critical | string | ✅       | "critical"  |
