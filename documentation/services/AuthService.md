# AuthService

A list of all methods in the `AuthService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                                                                         |
| :---------------------------- | :-------------------------------------------------------------------------------------------------- |
| [authenticate](#authenticate) | Authenticate to retrieve the HUE application key. Requires to go and press the button on the bridge |

## authenticate

Authenticate to retrieve the HUE application key. Requires to go and press the button on the bridge

- HTTP Method: `POST`
- Endpoint: `/api`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [AuthenticateRequest](../models/AuthenticateRequest.md) | ❌       | The request body. |

**Return Type**

`Response[]`

**Example Usage Code Snippet**

```typescript
import { AuthenticateRequest, OpenHue } from 'openhue';

(async () => {
  const openHue = new OpenHue({
    apiKey: 'YOUR_API_KEY',
  });

  const input: AuthenticateRequest = {
    devicetype: 'app_name#instance_name',
    generateclientkey: true,
  };

  const { data } = await openHue.auth.authenticate(input);

  console.log(data);
})();
```