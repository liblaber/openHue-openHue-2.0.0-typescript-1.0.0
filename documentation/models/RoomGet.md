# RoomGet

**Properties**

| Name     | Type                 | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------- | :------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type     | string               | ❌       | Type of the supported resources                                                                                                                                                                                                                                                                                                                                                                                                                         |
| id       | string               | ❌       | Unique identifier representing a specific resource instance                                                                                                                                                                                                                                                                                                                                                                                             |
| idV1     | string               | ❌       | Clip v1 resource identifier                                                                                                                                                                                                                                                                                                                                                                                                                             |
| children | ResourceIdentifier[] | ❌       | Child devices/services to group by the derived group                                                                                                                                                                                                                                                                                                                                                                                                    |
| services | ResourceIdentifier[] | ❌       | References all services aggregating control and state of children in the group.<br/>This includes all services grouped in the group hierarchy given by child relation.<br/>This includes all services of a device grouped in the group hierarchy given by child relation.<br/>Aggregation is per service type, ie every service type which can be grouped has a corresponding definition of<br/>grouped type.<br/>Supported types: – grouped_light<br/> |
| metadata | RoomGetMetadata      | ❌       | configuration object for a room                                                                                                                                                                                                                                                                                                                                                                                                                         |

# RoomGetMetadata

configuration object for a room

**Properties**

| Name      | Type          | Required | Description                       |
| :-------- | :------------ | :------- | :-------------------------------- |
| name      | string        | ❌       | Human readable name of a resource |
| archetype | RoomArchetype | ❌       | Possible archetypes of a room     |
