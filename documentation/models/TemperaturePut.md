# TemperaturePut

**Properties**

| Name    | Type               | Required | Description                                                 |
| :------ | :----------------- | :------- | :---------------------------------------------------------- |
| type    | TemperaturePutType | ❌       | Type of the supported resources (always `temperature` here) |
| enabled | boolean            | ❌       | true when sensor is activated, false when deactivated       |

# TemperaturePutType

Type of the supported resources (always `temperature` here)

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| temperature | string | ✅       | "temperature" |
