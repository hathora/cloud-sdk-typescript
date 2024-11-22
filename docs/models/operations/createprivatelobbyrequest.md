# CreatePrivateLobbyRequest

## Example Usage

```typescript
import { CreatePrivateLobbyRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreatePrivateLobbyRequest = {
  roomId: "2swovpy1fnunu",
  requestBody: {
    initialConfig: "<value>",
    region: "Tokyo",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `appId`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `requestBody`                                                                                        | [operations.CreatePrivateLobbyRequestBody](../../models/operations/createprivatelobbyrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |