# DeviceService

A list of all methods in the `DeviceService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                                                                |
| :---------------------------- | :----------------------------------------------------------------------------------------- |
| [getDevices](#getdevices)     | List all available devices                                                                 |
| [getDevice](#getdevice)       | Get details of a single device from its given `{deviceId}`.                                |
| [updateDevice](#updatedevice) | Update a single device from its given `{deviceId}`.                                        |
| [deleteDevice](#deletedevice) | Delete a single Device from its given `{deviceId}`. The `bridge` device cannot be deleted. |

## getDevices

List all available devices

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/device`

**Return Type**

`GetDevicesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.device.getDevices();

  console.log(data);
})();
```

## getDevice

Get details of a single device from its given `{deviceId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/device/{deviceId}`

**Parameters**

| Name     | Type   | Required | Description      |
| :------- | :----- | :------- | :--------------- |
| deviceId | string | ✅       | ID of the device |

**Return Type**

`GetDeviceOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.device.getDevice('deviceId');

  console.log(data);
})();
```

## updateDevice

Update a single device from its given `{deviceId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/device/{deviceId}`

**Parameters**

| Name     | Type                                | Required | Description       |
| :------- | :---------------------------------- | :------- | :---------------- |
| body     | [DevicePut](../models/DevicePut.md) | ❌       | The request body. |
| deviceId | string                              | ✅       | ID of the device  |

**Return Type**

`UpdateDeviceOkResponse`

**Example Usage Code Snippet**

```typescript
import { DevicePut, OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const devicePutType = DevicePutType.device;

  const productArchetype = ProductArchetype.bridge_v2;

  const devicePutMetadata: DevicePutMetadata = {
    name: 'non sit ip',
    archetype: productArchetype,
  };

  const identifyAction = IdentifyAction.identify;

  const identify: Identify = {
    action: identifyAction,
  };

  const devicePutUsertest: DevicePutUsertest = {
    usertest: true,
  };

  const input: DevicePut = {
    type: devicePutType,
    metadata: devicePutMetadata,
    identify: identify,
    usertest: devicePutUsertest,
  };

  const { data } = await openHue.device.updateDevice('deviceId', input);

  console.log(data);
})();
```

## deleteDevice

Delete a single Device from its given `{deviceId}`. The `bridge` device cannot be deleted.

- HTTP Method: `DELETE`
- Endpoint: `/clip/v2/resource/device/{deviceId}`

**Parameters**

| Name     | Type   | Required | Description      |
| :------- | :----- | :------- | :--------------- |
| deviceId | string | ✅       | ID of the Device |

**Return Type**

`DeleteDeviceOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.device.deleteDevice('deviceId');

  console.log(data);
})();
```