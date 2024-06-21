# MotionPut

**Properties**

| Name        | Type                 | Required | Description                                               |
| :---------- | :------------------- | :------- | :-------------------------------------------------------- |
| type        | string               | ❌       | Type of the supported resources (always `motion` here)    |
| enabled     | boolean              | ❌       | true when the sensor is activated, false when deactivated |
| sensitivity | MotionPutSensitivity | ❌       |                                                           |

# MotionPutSensitivity

**Properties**

| Name        | Type   | Required | Description                                                         |
| :---------- | :----- | :------- | :------------------------------------------------------------------ |
| sensitivity | number | ❌       | Sensitivity of the sensor. Value in the range 0 to sensitivity_max. |
