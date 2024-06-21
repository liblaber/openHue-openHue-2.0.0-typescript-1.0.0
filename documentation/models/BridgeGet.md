# BridgeGet

**Properties**

| Name     | Type               | Required | Description                                                                                        |
| :------- | :----------------- | :------- | :------------------------------------------------------------------------------------------------- |
| type     | BridgeGetType      | ❌       |                                                                                                    |
| id       | string             | ❌       | Unique identifier representing a specific resource instance                                        |
| idV1     | string             | ❌       | Clip v1 resource identifier                                                                        |
| owner    | ResourceIdentifier | ❌       |                                                                                                    |
| bridgeId | string             | ❌       | Unique identifier of the bridge as printed on the device. Lower case (shouldn't it be upper case?) |
| timeZone | TimeZone           | ❌       |                                                                                                    |

# BridgeGetType

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| bridge | string | ✅       | "bridge"    |

# TimeZone

**Properties**

| Name     | Type   | Required | Description                                               |
| :------- | :----- | :------- | :-------------------------------------------------------- |
| timeZone | string | ❌       | Time zone where the user's home is located (as Olson ID). |
