# UpdateRoomConfigRequest

## Example Usage

```typescript
import { UpdateRoomConfigRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: UpdateRoomConfigRequest = {
  roomId: "2swovpy1fnunu",
  updateRoomConfigParams: {
    roomConfig: "{\"name\":\"my-room\"}",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `appId`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                                               |
| `roomId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 2swovpy1fnunu                                                                          |
| `updateRoomConfigParams`                                                               | [components.UpdateRoomConfigParams](../../models/components/updateroomconfigparams.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |