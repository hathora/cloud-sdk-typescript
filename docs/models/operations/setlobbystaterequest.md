# SetLobbyStateRequest

## Example Usage

```typescript
import { SetLobbyStateRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: SetLobbyStateRequest = {
  roomId: "2swovpy1fnunu",
  setLobbyStateParams: {
    state: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `appId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `roomId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 2swovpy1fnunu                                                                    |
| `setLobbyStateParams`                                                            | [components.SetLobbyStateParams](../../models/components/setlobbystateparams.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |