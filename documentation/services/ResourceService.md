# ResourceService

A list of all methods in the `ResourceService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                       |
| :---------------------------- | :-------------------------------- |
| [getResources](#getresources) | API to retrieve all API resources |

## getResources

API to retrieve all API resources

- HTTP Method: `GET`
- Endpoint: `/clip/v2/resource`

**Return Type**

`GetResourcesOkResponse`

**Example Usage Code Snippet**

```typescript
import { OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await openHue.resource.getResources();

  console.log(data);
})();
```
