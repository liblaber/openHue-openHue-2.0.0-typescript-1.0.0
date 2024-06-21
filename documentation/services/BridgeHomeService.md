# BridgeHomeService

A list of all methods in the `BridgeHomeService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                                                          |
| :-------------------------------- | :------------------------------------------------------------------- |
| [getBridgeHomes](#getbridgehomes) | List all available bridge homes.                                     |
| [getBridgeHome](#getbridgehome)   | Get details of a single bridge home from its given `{bridgeHomeId}`. |

## getBridgeHomes

List all available bridge homes.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/bridge_home`

**Return Type**

`GetBridgeHomesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.bridgeHome.getBridgeHomes();

  console.log(data);
})();
```

## getBridgeHome

Get details of a single bridge home from its given `{bridgeHomeId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/bridge_home/{bridgeHomeId}`

**Parameters**

| Name         | Type   | Required | Description            |
| :----------- | :----- | :------- | :--------------------- |
| bridgeHomeId | string | ✅       | ID of the bridge home. |

**Return Type**

`GetBridgeHomeOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.bridgeHome.getBridgeHome('bridgeHomeId');

  console.log(data);
})();
```