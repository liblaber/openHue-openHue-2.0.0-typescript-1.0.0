# MotionService

A list of all methods in the `MotionService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                                        |
| :---------------------------------------- | :----------------------------------------------------------------- |
| [getMotionSensors](#getmotionsensors)     | List all available motion sensors.                                 |
| [getMotionSensor](#getmotionsensor)       | Get details of a single motion sensor from its given `{motionId}`. |
| [updateMotionSensor](#updatemotionsensor) | Update a single motion sensor from its given `{motionId}`.         |

## getMotionSensors

List all available motion sensors.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/motion`

**Return Type**

`GetMotionSensorsOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.motion.getMotionSensors();

  console.log(data);
})();
```

## getMotionSensor

Get details of a single motion sensor from its given `{motionId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/motion/{motionId}`

**Parameters**

| Name     | Type   | Required | Description             |
| :------- | :----- | :------- | :---------------------- |
| motionId | string | ✅       | ID of the motion sensor |

**Return Type**

`GetMotionSensorOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.motion.getMotionSensor('motionId');

  console.log(data);
})();
```

## updateMotionSensor

Update a single motion sensor from its given `{motionId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/motion/{motionId}`

**Parameters**

| Name     | Type                                | Required | Description             |
| :------- | :---------------------------------- | :------- | :---------------------- |
| body     | [MotionPut](../models/MotionPut.md) | ❌       | The request body.       |
| motionId | string                              | ✅       | Id of the motion sensor |

**Return Type**

`UpdateMotionSensorOkResponse`

**Example Usage Code Snippet**

```typescript
import { MotionPut, OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const motionPutSensitivity: MotionPutSensitivity = {
    sensitivity: 1,
  };

  const input: MotionPut = {
    type: 'type',
    enabled: true,
    sensitivity: motionPutSensitivity,
  };

  const { data } = await openHue.motion.updateMotionSensor('motionId', input);

  console.log(data);
})();
```