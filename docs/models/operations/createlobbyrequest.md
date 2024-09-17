# CreateLobbyRequest

## Example Usage

```typescript
import { CreateLobbyRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateLobbyRequest = {
  shortCode: "LFG4",
  roomId: "2swovpy1fnunu",
  createLobbyV3Params: {
    visibility: "private",
    roomConfig: "{\"name\":\"my-room\"}",
    region: "Tokyo",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `appId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `shortCode`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | LFG4                                                                             |
| `roomId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2swovpy1fnunu                                                                    |
| `createLobbyV3Params`                                                            | [components.CreateLobbyV3Params](../../models/components/createlobbyv3params.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |