# SceneService

A list of all methods in the `SceneService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description                                              |
| :-------------------------- | :------------------------------------------------------- |
| [getScenes](#getscenes)     | List all available scenes                                |
| [createScene](#createscene) | Creates a new scene                                      |
| [getScene](#getscene)       | Get details of a single scene from its given `{sceneId}` |
| [updateScene](#updatescene) | Update a single scene from its given `{sceneId}`         |
| [deleteScene](#deletescene) | Delete a single scene from its given `{sceneId}`         |

## getScenes

List all available scenes

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/scene`

**Return Type**

`GetScenesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.scene.getScenes();

  console.log(data);
})();
```

## createScene

Creates a new scene

- HTTP Method: `POST`
- Endpoint: `/clip/v2/resource/scene`

**Parameters**

| Name | Type                                | Required | Description       |
| :--- | :---------------------------------- | :------- | :---------------- |
| body | [ScenePost](../models/ScenePost.md) | ❌       | The request body. |

**Return Type**

`CreateSceneOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  ActionPost,
  OpenHue,
  ResourceIdentifier,
  SceneMetadata,
  ScenePalette,
  ScenePost,
} from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const scenePostType = ScenePostType.scene;

  const rtype = Rtype.device;

  const resourceIdentifier: ResourceIdentifier = {
    rid: '42edd1f5-9538-4180-9ced-2d9e07f26d0f',
    rtype: rtype,
  };

  const on: On = {
    on: true,
  };

  const dimming: Dimming = {
    brightness: 56.41,
  };

  const gamutPosition: GamutPosition = {
    x: 0.44,
    y: 0.83,
  };

  const color: Color = {
    xy: gamutPosition,
  };

  const actionColorTemperature: ActionColorTemperature = {
    mirek: 300,
  };

  const supportedGradientMode = SupportedGradientMode.interpolated_palette;

  const gradient: Gradient = {
    points: [color],
    mode: supportedGradientMode,
  };

  const supportedEffects = SupportedEffects.prism;

  const actionEffects_2: ActionEffects2 = {
    effect: supportedEffects,
  };

  const dynamics2: Dynamics2 = {
    duration: 2,
  };

  const actionPostAction: ActionPostAction = {
    on: on,
    dimming: dimming,
    color: color,
    colorTemperature: actionColorTemperature,
    gradient: gradient,
    effects: actionEffects_2,
    dynamics: dynamics2,
  };

  const actionPost: ActionPost = {
    target: resourceIdentifier,
    action: actionPostAction,
  };

  const sceneMetadata: SceneMetadata = {
    name: 'pariatur sunt',
    image: resourceIdentifier,
    appdata: 'Ut',
  };

  const resourceIdentifier: ResourceIdentifier = {
    rid: '42edd1f5-9538-4180-9ced-2d9e07f26d0f',
    rtype: rtype,
  };

  const colorPaletteGet: ColorPaletteGet = {
    color: color,
    dimming: dimming,
  };

  const colorTemperaturePalettePostColorTemperature: ColorTemperaturePalettePostColorTemperature = {
    mirek: 176,
  };

  const colorTemperaturePalettePost: ColorTemperaturePalettePost = {
    colorTemperature: colorTemperaturePalettePostColorTemperature,
    dimming: dimming,
  };

  const scenePaletteEffects: ScenePaletteEffects = {
    effect: supportedEffects,
  };

  const scenePalette: ScenePalette = {
    color: [colorPaletteGet],
    dimming: [dimming],
    colorTemperature: [colorTemperaturePalettePost],
    effects: [scenePaletteEffects],
  };

  const input: ScenePost = {
    type: scenePostType,
    actions: [actionPost],
    metadata: sceneMetadata,
    group: resourceIdentifier,
    palette: scenePalette,
    speed: 0.72,
    autoDynamic: true,
  };

  const { data } = await openHue.scene.createScene(input);

  console.log(data);
})();
```

## getScene

Get details of a single scene from its given `{sceneId}`

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/scene/{sceneId}`

**Parameters**

| Name    | Type   | Required | Description      |
| :------ | :----- | :------- | :--------------- |
| sceneId | string | ✅       | ID of the scene. |

**Return Type**

`GetSceneOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.scene.getScene('sceneId');

  console.log(data);
})();
```

## updateScene

Update a single scene from its given `{sceneId}`

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/scene/{sceneId}`

**Parameters**

| Name    | Type                              | Required | Description       |
| :------ | :-------------------------------- | :------- | :---------------- |
| body    | [ScenePut](../models/ScenePut.md) | ❌       | The request body. |
| sceneId | string                            | ✅       | ID of the scene.  |

**Return Type**

`UpdateSceneOkResponse`

**Example Usage Code Snippet**

```typescript
import { ActionPost, OpenHue, SceneMetadata, ScenePalette, ScenePut, SceneRecall } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const scenePutType = ScenePutType.scene;

  const rtype = Rtype.device;

  const resourceIdentifier: ResourceIdentifier = {
    rid: '42edd1f5-9538-4180-9ced-2d9e07f26d0f',
    rtype: rtype,
  };

  const on: On = {
    on: true,
  };

  const dimming: Dimming = {
    brightness: 56.41,
  };

  const gamutPosition: GamutPosition = {
    x: 0.44,
    y: 0.83,
  };

  const color: Color = {
    xy: gamutPosition,
  };

  const actionColorTemperature: ActionColorTemperature = {
    mirek: 300,
  };

  const supportedGradientMode = SupportedGradientMode.interpolated_palette;

  const gradient: Gradient = {
    points: [color],
    mode: supportedGradientMode,
  };

  const supportedEffects = SupportedEffects.prism;

  const actionEffects_2: ActionEffects2 = {
    effect: supportedEffects,
  };

  const dynamics2: Dynamics2 = {
    duration: 2,
  };

  const actionPostAction: ActionPostAction = {
    on: on,
    dimming: dimming,
    color: color,
    colorTemperature: actionColorTemperature,
    gradient: gradient,
    effects: actionEffects_2,
    dynamics: dynamics2,
  };

  const actionPost: ActionPost = {
    target: resourceIdentifier,
    action: actionPostAction,
  };

  const sceneRecallAction = SceneRecallAction.active;

  const sceneRecall: SceneRecall = {
    action: sceneRecallAction,
    duration: 2,
    dimming: dimming,
  };

  const sceneMetadata: SceneMetadata = {
    name: 'pariatur sunt',
    image: resourceIdentifier,
    appdata: 'Ut',
  };

  const colorPaletteGet: ColorPaletteGet = {
    color: color,
    dimming: dimming,
  };

  const colorTemperaturePalettePostColorTemperature: ColorTemperaturePalettePostColorTemperature = {
    mirek: 176,
  };

  const colorTemperaturePalettePost: ColorTemperaturePalettePost = {
    colorTemperature: colorTemperaturePalettePostColorTemperature,
    dimming: dimming,
  };

  const scenePaletteEffects: ScenePaletteEffects = {
    effect: supportedEffects,
  };

  const scenePalette: ScenePalette = {
    color: [colorPaletteGet],
    dimming: [dimming],
    colorTemperature: [colorTemperaturePalettePost],
    effects: [scenePaletteEffects],
  };

  const input: ScenePut = {
    type: scenePutType,
    actions: [actionPost],
    recall: sceneRecall,
    metadata: sceneMetadata,
    palette: scenePalette,
    speed: 0.56,
    autoDynamic: true,
  };

  const { data } = await openHue.scene.updateScene('sceneId', input);

  console.log(data);
})();
```

## deleteScene

Delete a single scene from its given `{sceneId}`

- HTTP Method: `DELETE`
- Endpoint: `/clip/v2/resource/scene/{sceneId}`

**Parameters**

| Name    | Type   | Required | Description      |
| :------ | :----- | :------- | :--------------- |
| sceneId | string | ✅       | ID of the scene. |

**Return Type**

`DeleteSceneOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.scene.deleteScene('sceneId');

  console.log(data);
})();
```
