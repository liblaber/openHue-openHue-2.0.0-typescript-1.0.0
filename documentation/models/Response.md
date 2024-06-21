# Response

**Properties**

| Name    | Type          | Required | Description |
| :------ | :------------ | :------- | :---------- |
| success | Success       | ❌       |             |
| error   | ResponseError | ❌       |             |

# Success

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| username  | string | ❌       |             |
| clientkey | string | ❌       |             |

# ResponseError

**Properties**

| Name        | Type   | Required | Description |
| :---------- | :----- | :------- | :---------- |
| type        | number | ❌       |             |
| address     | string | ❌       |             |
| description | string | ❌       |             |