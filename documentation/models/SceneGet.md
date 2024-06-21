# SceneGet

**Properties**

| Name        | Type               | Required | Description                                                                          |
| :---------- | :----------------- | :------- | :----------------------------------------------------------------------------------- |
| type        | SceneGetType       | ❌       |                                                                                      |
| id          | string             | ❌       | Unique identifier representing a specific resource instance                          |
| idV1        | string             | ❌       | Clip v1 resource identifier                                                          |
| owner       | ResourceIdentifier | ❌       |                                                                                      |
| actions     | ActionGet[]        | ❌       | List of actions to be executed synchronously on recall                               |
| metadata    | SceneMetadata      | ❌       |                                                                                      |
| group       | ResourceIdentifier | ❌       |                                                                                      |
| palette     | ScenePalette       | ❌       | Group of colors that describe the palette of colors to be used when playing dynamics |
| speed       | number             | ❌       | Speed of dynamic palette for this scene                                              |
| autoDynamic | boolean            | ❌       | Indicates whether to automatically start the scene dynamically on active recall      |
| status      | SceneGetStatus     | ❌       |                                                                                      |

# SceneGetType

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| scene | string | ✅       | "scene"     |

# SceneGetStatus

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| active | Active | ❌       |             |

# Active

**Properties**

| Name            | Type   | Required | Description       |
| :-------------- | :----- | :------- | :---------------- |
| inactive        | string | ✅       | "inactive"        |
| static          | string | ✅       | "static"          |
| dynamic_palette | string | ✅       | "dynamic_palette" |
