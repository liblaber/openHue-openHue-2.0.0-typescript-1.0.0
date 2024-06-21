# SceneRecall

**Properties**

| Name     | Type              | Required | Description                                                                                                                                       |
| :------- | :---------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| action   | SceneRecallAction | ❌       | When writing active, the actions in the scene are executed on the target. dynamic_palette starts dynamic scene with colors in the Palette object. |
| duration | number            | ❌       | Transition to the scene within the timeframe given by duration                                                                                    |
| dimming  | Dimming           | ❌       |                                                                                                                                                   |

# SceneRecallAction

When writing active, the actions in the scene are executed on the target. dynamic_palette starts dynamic scene with colors in the Palette object.

**Properties**

| Name            | Type   | Required | Description       |
| :-------------- | :----- | :------- | :---------------- |
| active          | string | ✅       | "active"          |
| dynamic_palette | string | ✅       | "dynamic_palette" |
| static          | string | ✅       | "static"          |
