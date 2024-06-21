# DevicePut

**Properties**

| Name     | Type              | Required | Description |
| :------- | :---------------- | :------- | :---------- |
| type     | DevicePutType     | ❌       |             |
| metadata | DevicePutMetadata | ❌       |             |
| identify | Identify          | ❌       |             |
| usertest | DevicePutUsertest | ❌       |             |

# DevicePutType

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| device | string | ✅       | "device"    |

# DevicePutMetadata

**Properties**

| Name      | Type             | Required | Description                                                          |
| :-------- | :--------------- | :------- | :------------------------------------------------------------------- |
| name      | string           | ❌       | Human readable name of a resource                                    |
| archetype | ProductArchetype | ❌       | The default archetype given by manufacturer. Can be changed by user. |

# Identify

**Properties**

| Name   | Type           | Required | Description                                                                                                                                                                                                                                                               |
| :----- | :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| action | IdentifyAction | ❌       | Triggers a visual identification sequence, current implemented as (which can change in the future):<br/>Bridge performs Zigbee LED identification cycles for 5 seconds Lights perform one breathe cycle Sensors<br/>perform LED identification cycles for 15 seconds<br/> |

# IdentifyAction

Triggers a visual identification sequence, current implemented as (which can change in the future):<br/>Bridge performs Zigbee LED identification cycles for 5 seconds Lights perform one breathe cycle Sensors<br/>perform LED identification cycles for 15 seconds<br/>

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| identify | string | ✅       | "identify"  |

# DevicePutUsertest

**Properties**

| Name     | Type    | Required | Description                                                                                                                                                                                                                          |
| :------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| usertest | boolean | ❌       | Activates or extends user usertest mode of device for 120 seconds.<br/>`false` deactivates usertest mode. In usertest mode, devices report changes in state faster and indicate<br/>state changes on device LED (if applicable)<br/> |
