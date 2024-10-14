# CreateRoomRequest

## Example Usage

```typescript
import { CreateRoomRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateRoomRequest = {
  roomId: "2swovpy1fnunu",
  createRoomParams: {
    clientIPs: [
      "123.123.123.123",
    ],
    roomConfig: "{\"name\":\"my-room\"}",
    region: "Johannesburg",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `appId`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `roomId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 2swovpy1fnunu                                                              |
| `createRoomParams`                                                         | [components.CreateRoomParams](../../models/components/createroomparams.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |