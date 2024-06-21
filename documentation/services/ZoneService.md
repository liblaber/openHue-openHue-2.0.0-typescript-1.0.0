# ZoneService

A list of all methods in the `ZoneService` service. Click on the method name to view detailed information about that method.

| Methods                   | Description                                            |
| :------------------------ | :----------------------------------------------------- |
| [getZones](#getzones)     | List all available zones                               |
| [createZone](#createzone) | Create a new zone                                      |
| [getZone](#getzone)       | Get details of a single Zone from its given `{zoneId}` |
| [updateZone](#updatezone) | Update a single Zone from its given `{zoneId}`         |
| [deleteZone](#deletezone) | Delete a single Zone from its given `{zoneId}`         |

## getZones

List all available zones

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/zone`

**Return Type**

`GetZonesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.zone.getZones();

  console.log(data);
})();
```

## createZone

Create a new zone

- HTTP Method: `POST`
- Endpoint: `/clip/v2/resource/zone`

**Parameters**

| Name | Type                            | Required | Description       |
| :--- | :------------------------------ | :------- | :---------------- |
| body | [RoomPut](../models/RoomPut.md) | ❌       | The request body. |

**Return Type**

`CreateZoneOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue, ResourceIdentifier, RoomPut } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const rtype = Rtype.device;

  const resourceIdentifier: ResourceIdentifier = {
    rid: '42edd1f5-9538-4180-9ced-2d9e07f26d0f',
    rtype: rtype,
  };

  const roomArchetype = RoomArchetype.living_room;

  const roomPutMetadata: RoomPutMetadata = {
    name: 'name',
    archetype: roomArchetype,
  };

  const input: RoomPut = {
    type: 'type',
    children: [resourceIdentifier],
    metadata: roomPutMetadata,
  };

  const { data } = await openHue.zone.createZone(input);

  console.log(data);
})();
```

## getZone

Get details of a single Zone from its given `{zoneId}`

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/zone/{zoneId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| zoneId | string | ✅       | ID of the Zone |

**Return Type**

`GetZoneOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.zone.getZone('zoneId');

  console.log(data);
})();
```

## updateZone

Update a single Zone from its given `{zoneId}`

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/zone/{zoneId}`

**Parameters**

| Name   | Type                            | Required | Description       |
| :----- | :------------------------------ | :------- | :---------------- |
| body   | [RoomPut](../models/RoomPut.md) | ❌       | The request body. |
| zoneId | string                          | ✅       | ID of the Zone    |

**Return Type**

`UpdateZoneOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue, ResourceIdentifier, RoomPut } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const rtype = Rtype.device;

  const resourceIdentifier: ResourceIdentifier = {
    rid: '42edd1f5-9538-4180-9ced-2d9e07f26d0f',
    rtype: rtype,
  };

  const roomArchetype = RoomArchetype.living_room;

  const roomPutMetadata: RoomPutMetadata = {
    name: 'name',
    archetype: roomArchetype,
  };

  const input: RoomPut = {
    type: 'type',
    children: [resourceIdentifier],
    metadata: roomPutMetadata,
  };

  const { data } = await openHue.zone.updateZone('zoneId', input);

  console.log(data);
})();
```

## deleteZone

Delete a single Zone from its given `{zoneId}`

- HTTP Method: `DELETE`
- Endpoint: `/clip/v2/resource/zone/{zoneId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| zoneId | string | ✅       | ID of the Zone |

**Return Type**

`DeleteZoneOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.zone.deleteZone('zoneId');

  console.log(data);
})();
```