# ScenePut

**Properties**

| Name        | Type          | Required | Description                                                                          |
| :---------- | :------------ | :------- | :----------------------------------------------------------------------------------- |
| type        | ScenePutType  | ❌       |                                                                                      |
| actions     | ActionPost[]  | ❌       | List of actions to be executed synchronously on recall                               |
| recall      | SceneRecall   | ❌       |                                                                                      |
| metadata    | SceneMetadata | ❌       |                                                                                      |
| palette     | ScenePalette  | ❌       | Group of colors that describe the palette of colors to be used when playing dynamics |
| speed       | number        | ❌       | Speed of dynamic palette for this scene                                              |
| autoDynamic | boolean       | ❌       | Indicates whether to automatically start the scene dynamically on active recall      |

# ScenePutType

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| scene | string | ✅       | "scene"     |
