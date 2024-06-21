# DeviceGet

**Properties**

| Name        | Type                 | Required | Description                                                        |
| :---------- | :------------------- | :------- | :----------------------------------------------------------------- |
| type        | DeviceGetType        | ❌       |                                                                    |
| id          | string               | ❌       | Unique identifier representing a specific resource instance        |
| idV1        | string               | ❌       | Clip v1 resource identifier                                        |
| owner       | ResourceIdentifier   | ❌       |                                                                    |
| productData | ProductData          | ❌       |                                                                    |
| metadata    | DeviceGetMetadata    | ❌       |                                                                    |
| usertest    | DeviceGetUsertest    | ❌       |                                                                    |
| services    | ResourceIdentifier[] | ❌       | References all services providing control and state of the device. |

# DeviceGetType

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| device | string | ✅       | "device"    |

# DeviceGetMetadata

**Properties**

| Name      | Type             | Required | Description                                                          |
| :-------- | :--------------- | :------- | :------------------------------------------------------------------- |
| name      | string           | ❌       | Human readable name of a resource                                    |
| archetype | ProductArchetype | ❌       | The default archetype given by manufacturer. Can be changed by user. |

# DeviceGetUsertest

**Properties**

| Name     | Type           | Required | Description                                                                                                                                                                                                                          |
| :------- | :------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status   | UsertestStatus | ❌       |                                                                                                                                                                                                                                      |
| usertest | boolean        | ❌       | Activates or extends user usertest mode of device for 120 seconds.<br/>`false` deactivates usertest mode.<br/>In usertest mode, devices report changes in state faster and indicate state changes on device LED (if applicable)<br/> |

# UsertestStatus

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| set      | string | ✅       | "set"       |
| changing | string | ✅       | "changing"  |