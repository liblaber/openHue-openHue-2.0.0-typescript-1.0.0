# TemperatureService

A list of all methods in the `TemperatureService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                                                                  |
| :-------------------------------------- | :--------------------------------------------------------------------------- |
| [getTemperatures](#gettemperatures)     | List all temperatures                                                        |
| [getTemperature](#gettemperature)       | Get details of a single temperature sensor from its given `{temperatureId}`. |
| [updateTemperature](#updatetemperature) | Update a temperature sensor from its given `{temperatureId}`.                |

## getTemperatures

List all temperatures

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/temperature`

**Return Type**

`GetTemperaturesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.temperature.getTemperatures();

  console.log(data);
})();
```

## getTemperature

Get details of a single temperature sensor from its given `{temperatureId}`.

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/temperature/{temperatureId}`

**Parameters**

| Name          | Type   | Required | Description                  |
| :------------ | :----- | :------- | :--------------------------- |
| temperatureId | string | ✅       | ID of the temperature sensor |

**Return Type**

`GetTemperatureOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.temperature.getTemperature('temperatureId');

  console.log(data);
})();
```

## updateTemperature

Update a temperature sensor from its given `{temperatureId}`.

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/temperature/{temperatureId}`

**Parameters**

| Name          | Type                                          | Required | Description                  |
| :------------ | :-------------------------------------------- | :------- | :--------------------------- |
| body          | [TemperaturePut](../models/TemperaturePut.md) | ❌       | The request body.            |
| temperatureId | string                                        | ✅       | ID of the temperature sensor |

**Return Type**

`UpdateTemperatureOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue, TemperaturePut } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const temperaturePutType = TemperaturePutType.temperature;

  const input: TemperaturePut = {
    type: temperaturePutType,
    enabled: true,
  };

  const { data } = await openHue.temperature.updateTemperature('temperatureId', input);

  console.log(data);
})();
```
