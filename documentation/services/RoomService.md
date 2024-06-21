# RoomService

A list of all methods in the `RoomService` service. Click on the method name to view detailed information about that method.

| Methods                   | Description                                            |
| :------------------------ | :----------------------------------------------------- |
| [getRooms](#getrooms)     | List all available rooms                               |
| [createRoom](#createroom) | Create a new room                                      |
| [getRoom](#getroom)       | Get details of a single room from its given `{roomId}` |
| [updateRoom](#updateroom) | Update a single room from its given `{roomId}`         |
| [deleteRoom](#deleteroom) | Delete a single room from its given `{roomId}`         |

## getRooms

List all available rooms

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/room`

**Return Type**

`GetRoomsOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.room.getRooms();

  console.log(data);
})();
```

## createRoom

Create a new room

- HTTP Method: `POST`
- Endpoint: `/clip/v2/resource/room`

**Parameters**

| Name | Type                            | Required | Description       |
| :--- | :------------------------------ | :------- | :---------------- |
| body | [RoomPut](../models/RoomPut.md) | ❌       | The request body. |

**Return Type**

`CreateRoomOkResponse`

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

  const { data } = await openHue.room.createRoom(input);

  console.log(data);
})();
```

## getRoom

Get details of a single room from its given `{roomId}`

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource/room/{roomId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| roomId | string | ✅       | ID of the room |

**Return Type**

`GetRoomOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.room.getRoom('roomId');

  console.log(data);
})();
```

## updateRoom

Update a single room from its given `{roomId}`

- HTTP Method: `PUT`
- Endpoint: `/clip/v2/resource/room/{roomId}`

**Parameters**

| Name   | Type                            | Required | Description       |
| :----- | :------------------------------ | :------- | :---------------- |
| body   | [RoomPut](../models/RoomPut.md) | ❌       | The request body. |
| roomId | string                          | ✅       | ID of the room    |

**Return Type**

`UpdateRoomOkResponse`

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

  const { data } = await openHue.room.updateRoom('roomId', input);

  console.log(data);
})();
```

## deleteRoom

Delete a single room from its given `{roomId}`

- HTTP Method: `DELETE`
- Endpoint: `/clip/v2/resource/room/{roomId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| roomId | string | ✅       | ID of the room |

**Return Type**

`DeleteRoomOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.room.deleteRoom('roomId');

  console.log(data);
})();
```
