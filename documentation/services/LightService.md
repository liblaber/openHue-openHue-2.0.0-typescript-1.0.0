# LightService

A list of all methods in the `LightService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description                                               |
| :-------------------------- | :-------------------------------------------------------- |
| [getLights](#getlights)     | List all available lights.                                |
| [getLight](#getlight)       | Get details of a single light from its given `{lightId}`. |
| [updateLight](#updatelight) | Update a single light from its given `{lightId}`.         |

## getLights

List all available lights.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/light`

**Return Type**

`GetLightsOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'open-hue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.light.getLights();

  console.log(data);
})();
```

## getLight

Get details of a single light from its given `{lightId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/light/{lightId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| lightId | string | ✅       | ID of the light |

**Return Type**

`GetLightOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'open-hue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.light.getLight('lightId');

  console.log(data);
})();
```

## updateLight

Update a single light from its given `{lightId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/light/{lightId}`

**Parameters**

| Name    | Type                              | Required | Description       |
| :------ | :-------------------------------- | :------- | :---------------- |
| body    | [LightPut](../models/LightPut.md) | ❌       | The request body. |
| lightId | string                            | ✅       | ID of the light   |

**Return Type**

`UpdateLightOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  Alert,
  Color,
  ColorTemperature,
  ColorTemperatureDelta,
  Dimming,
  DimmingDelta,
  Dynamics,
  Effects,
  Gradient,
  LightPut,
  On,
  OpenHue,
  Powerup,
  Signaling,
} from 'open-hue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const on: On = {
    on1: true,
  };

  const dimming: Dimming = {
    brightness: 11.42,
  };

  const dimmingDeltaAction = DimmingDeltaAction.up;

  const dimmingDelta: DimmingDelta = {
    action: dimmingDeltaAction,
    brightnessDelta: 56.69,
  };

  const colorTemperature: ColorTemperature = {
    mirek: 360,
  };

  const colorTemperatureDeltaAction = ColorTemperatureDeltaAction.up;

  const colorTemperatureDelta: ColorTemperatureDelta = {
    action: colorTemperatureDeltaAction,
    mirekDelta: 121,
  };

  const gamutPosition: GamutPosition = {
    x: 123,
    y: 0.47,
  };

  const color: Color = {
    xy: gamutPosition,
  };

  const dynamics: Dynamics = {
    duration: 8,
    speed: 123,
  };

  const alert: Alert = {
    action: 'breathe',
  };

  const signal = Signal.no_signal;

  const signaling: Signaling = {
    signal: signal,
    duration: 53090288,
    color: [color],
  };

  const lightPutMode = LightPutMode.normal;

  const supportedGradientMode = SupportedGradientMode.interpolated_palette;

  const gradient: Gradient = {
    points: [color],
    mode: supportedGradientMode,
  };

  const supportedEffects = SupportedEffects.prism;

  const effects: Effects = {
    effect: supportedEffects,
  };

  const supportedTimedEffects = SupportedTimedEffects.sunrise;

  const lightPutTimedEffects: LightPutTimedEffects = {
    effect: supportedTimedEffects,
    duration: 10,
  };

  const powerupPreset2 = PowerupPreset2.safety;

  const onMode2 = OnMode2.on;

  const powerupOn2: PowerupOn2 = {
    mode: onMode2,
    on: on,
  };

  const dimmingMode2 = DimmingMode2.dimming;

  const colorMode2 = ColorMode2.color_temperature;

  const colorColorTemperature2: ColorColorTemperature2 = {
    mirek: 267,
    color: color,
  };

  const dimmingColor2: DimmingColor2 = {
    mode: colorMode2,
    colorTemperature1: colorColorTemperature2,
  };

  const powerupDimming2: PowerupDimming2 = {
    mode: dimmingMode2,
    dimming: 98.85,
    color: dimmingColor2,
  };

  const powerup: Powerup = {
    preset: powerupPreset2,
    configured: true,
    on: powerupOn2,
    dimming: powerupDimming2,
  };

  const input: LightPut = {
    type_: 'type',
    on: on,
    dimming: dimming,
    dimmingDelta: dimmingDelta,
    colorTemperature: colorTemperature,
    colorTemperatureDelta: colorTemperatureDelta,
    color: color,
    dynamics: dynamics,
    alert: alert,
    signaling: signaling,
    mode: lightPutMode,
    gradient: gradient,
    effects: effects,
    timedEffects: lightPutTimedEffects,
    powerup: powerup,
  };

  const { data } = await openHue.light.updateLight('lightId', input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
