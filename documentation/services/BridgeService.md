# BridgeService

A list of all methods in the `BridgeService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                                 |
| :---------------------------- | :---------------------------------------------------------- |
| [getBridges](#getbridges)     | List all available bridges                                  |
| [getBridge](#getbridge)       | Get details of a single bridge from its given `{bridgeId}`. |
| [updateBridge](#updatebridge) | Update a single bridge from its given `{bridgeId}`.         |

## getBridges

List all available bridges

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/bridge`

**Return Type**

`GetBridgesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.bridge.getBridges();

  console.log(data);
})();
```

## getBridge

Get details of a single bridge from its given `{bridgeId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/bridge/{bridgeId}`

**Parameters**

| Name     | Type   | Required | Description      |
| :------- | :----- | :------- | :--------------- |
| bridgeId | string | ✅       | ID of the bridge |

**Return Type**

`GetBridgeOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.bridge.getBridge('bridgeId');

  console.log(data);
})();
```

## updateBridge

Update a single bridge from its given `{bridgeId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/bridge/{bridgeId}`

**Parameters**

| Name     | Type                                | Required | Description       |
| :------- | :---------------------------------- | :------- | :---------------- |
| body     | [BridgePut](../models/BridgePut.md) | ❌       | The request body. |
| bridgeId | string                              | ✅       | ID of the bridge  |

**Return Type**

`UpdateBridgeOkResponse`

**Example Usage Code Snippet**

```typescript
import { BridgePut, OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const bridgePutType = BridgePutType.bridge;

  const input: BridgePut = {
    type: bridgePutType,
  };

  const { data } = await openHue.bridge.updateBridge('bridgeId', input);

  console.log(data);
})();
```