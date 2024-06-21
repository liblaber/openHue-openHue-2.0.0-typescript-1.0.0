# RoomPut

**Properties**

| Name     | Type                 | Required | Description                                          |
| :------- | :------------------- | :------- | :--------------------------------------------------- |
| type     | string               | ❌       | Type of the supported resources (always `room` here) |
| children | ResourceIdentifier[] | ❌       | Child devices/services to group by the derived group |
| metadata | RoomPutMetadata      | ❌       | configuration object for a room                      |

# RoomPutMetadata

configuration object for a room

**Properties**

| Name      | Type          | Required | Description                       |
| :-------- | :------------ | :------- | :-------------------------------- |
| name      | string        | ❌       | Human readable name of a resource |
| archetype | RoomArchetype | ❌       | Possible archetypes of a room     |
