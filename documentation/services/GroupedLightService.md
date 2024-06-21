# GroupedLightService

A list of all methods in the `GroupedLightService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                                              |
| :---------------------------------------- | :----------------------------------------------------------------------- |
| [getGroupedLights](#getgroupedlights)     | List all grouped lights                                                  |
| [getGroupedLight](#getgroupedlight)       | Get details of a single grouped light from its given `{groupedLightId}`. |
| [updateGroupedLight](#updategroupedlight) | Update a single grouped light from its given `{groupedLightId}`.         |

## getGroupedLights

List all grouped lights

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/grouped_light`

**Return Type**

`GetGroupedLightsOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.groupedLight.getGroupedLights();

  console.log(data);
})();
```

## getGroupedLight

Get details of a single grouped light from its given `{groupedLightId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/grouped_light/{groupedLightId}`

**Parameters**

| Name           | Type   | Required | Description             |
| :------------- | :----- | :------- | :---------------------- |
| groupedLightId | string | ✅       | ID of the grouped light |

**Return Type**

`GetGroupedLightOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.groupedLight.getGroupedLight('groupedLightId');

  console.log(data);
})();
```

## updateGroupedLight

Update a single grouped light from its given `{groupedLightId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/grouped_light/{groupedLightId}`

**Parameters**

| Name           | Type                                            | Required | Description       |
| :------------- | :---------------------------------------------- | :------- | :---------------- |
| body           | [GroupedLightPut](../models/GroupedLightPut.md) | ❌       | The request body. |
| groupedLightId | string                                          | ✅       | ID of the light   |

**Return Type**

`UpdateGroupedLightOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  Alert,
  Color,
  ColorTemperature,
  ColorTemperatureDelta,
  Dimming,
  DimmingDelta,
  Dynamics2,
  GroupedLightPut,
  On,
  OpenHue,
  Signaling,
} from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const groupedLightPutType = GroupedLightPutType.grouped_light;

  const on: On = {
    on: true,
  };

  const dimming: Dimming = {
    brightness: 56.41,
  };

  const dimmingDeltaAction = DimmingDeltaAction.up;

  const dimmingDelta: DimmingDelta = {
    action: dimmingDeltaAction,
    brightnessDelta: 84.48,
  };

  const colorTemperature: ColorTemperature = {
    mirek: 266,
  };

  const colorTemperatureDeltaAction = ColorTemperatureDeltaAction.up;

  const colorTemperatureDelta: ColorTemperatureDelta = {
    action: colorTemperatureDeltaAction,
    mirekDelta: 144,
  };

  const gamutPosition: GamutPosition = {
    x: 0.44,
    y: 0.83,
  };

  const color: Color = {
    xy: gamutPosition,
  };

  const alert: Alert = {
    action: 'breathe',
  };

  const signal = Signal.no_signal;

  const signaling: Signaling = {
    signal: signal,
    duration: 64044703,
    color: [color],
  };

  const dynamics2: Dynamics2 = {
    duration: 2,
  };

  const input: GroupedLightPut = {
    type: groupedLightPutType,
    on: on,
    dimming: dimming,
    dimmingDelta: dimmingDelta,
    colorTemperature: colorTemperature,
    colorTemperatureDelta: colorTemperatureDelta,
    color: color,
    alert: alert,
    signaling: signaling,
    dynamics: dynamics2,
  };

  const { data } = await openHue.groupedLight.updateGroupedLight('groupedLightId', input);

  console.log(data);
})();
```
