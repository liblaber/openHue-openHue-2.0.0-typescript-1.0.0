# LightLevelService

A list of all methods in the `LightLevelService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                                               |
| :------------------------------------ | :-------------------------------------------------------- |
| [getLightLevels](#getlightlevels)     | List all available light levels.                          |
| [getLightLevel](#getlightlevel)       | Get details of a single light from its given `{lightId}`. |
| [updateLightLevel](#updatelightlevel) | Update a single light from its given `{lightId}`.         |

## getLightLevels

List all available light levels.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/light_level`

**Return Type**

`GetLightLevelsOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.lightLevel.getLightLevels();

  console.log(data);
})();
```

## getLightLevel

Get details of a single light from its given `{lightId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/light_level/{lightId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| lightId | string | ✅       | ID of the light |

**Return Type**

`GetLightLevelOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.lightLevel.getLightLevel('lightId');

  console.log(data);
})();
```

## updateLightLevel

Update a single light from its given `{lightId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/light_level/{lightId}`

**Parameters**

| Name    | Type                                        | Required | Description       |
| :------ | :------------------------------------------ | :------- | :---------------- |
| body    | [LightLevelPut](../models/LightLevelPut.md) | ❌       | The request body. |
| lightId | string                                      | ✅       | ID of the light   |

**Return Type**

`UpdateLightLevelOkResponse`

**Example Usage Code Snippet**

```typescript
import { LightLevelPut, OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const input: LightLevelPut = {
    type: 'type',
    enabled: true,
  };

  const { data } = await openHue.lightLevel.updateLightLevel('lightId', input);

  console.log(data);
})();
```
