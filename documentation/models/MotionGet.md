# MotionGet

**Properties**

| Name        | Type                 | Required | Description                                                 |
| :---------- | :------------------- | :------- | :---------------------------------------------------------- |
| type        | string               | ❌       | Type of the supported resources                             |
| id          | string               | ❌       | Unique identifier representing a specific resource instance |
| idV1        | string               | ❌       | Clip v1 resource identifier                                 |
| owner       | ResourceIdentifier   | ❌       |                                                             |
| enabled     | boolean              | ❌       | ture when the sensor is activated, false when deactivated   |
| motion      | Motion               | ❌       |                                                             |
| sensitivity | MotionGetSensitivity | ❌       |                                                             |

# Motion

**Properties**

| Name         | Type         | Required | Description                                                                              |
| :----------- | :----------- | :------- | :--------------------------------------------------------------------------------------- |
| motion       | boolean      | ❌       | Deprecated. Moved to motion_report/motion.                                               |
| motionValid  | boolean      | ❌       | Deprecated. Motion is valid when motion_report property is present, invalid when absent. |
| motionReport | MotionReport | ❌       |                                                                                          |

# MotionReport

**Properties**

| Name    | Type    | Required | Description                                     |
| :------ | :------ | :------- | :---------------------------------------------- |
| changed | string  | ❌       | last time the value of this property is changed |
| motion  | boolean | ❌       | true if motion is detected                      |

# MotionGetSensitivity

**Properties**

| Name           | Type              | Required | Description                                                        |
| :------------- | :---------------- | :------- | :----------------------------------------------------------------- |
| status         | SensitivityStatus | ❌       |                                                                    |
| sensitivity    | number            | ❌       | Sensitivity of the sensor. Value in the range 0 to sensitivity_max |
| sensitivityMax | number            | ❌       | Maximum value of the sensitivity configuration attribute.          |

# SensitivityStatus

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| set      | string | ✅       | "set"       |
| changing | string | ✅       | "changing"  |
