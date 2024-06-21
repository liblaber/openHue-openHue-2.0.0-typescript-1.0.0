# DevicePowerService

A list of all methods in the `DevicePowerService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                                       |
| :---------------------------------- | :---------------------------------------------------------------- |
| [getDevicePowers](#getdevicepowers) | List all available device powers                                  |
| [getDevicePower](#getdevicepower)   | Get power details of a single device from its given `{deviceId}`. |

## getDevicePowers

List all available device powers

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/device_power`

**Return Type**

`GetDevicePowersOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.devicePower.getDevicePowers();

  console.log(data);
})();
```

## getDevicePower

Get power details of a single device from its given `{deviceId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/device_power/{deviceId}`

**Parameters**

| Name     | Type   | Required | Description      |
| :------- | :----- | :------- | :--------------- |
| deviceId | string | ✅       | ID of the device |

**Return Type**

`GetDevicePowerOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.devicePower.getDevicePower('deviceId');

  console.log(data);
})();
```