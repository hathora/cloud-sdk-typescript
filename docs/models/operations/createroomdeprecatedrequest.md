# CreateRoomDeprecatedRequest

## Example Usage

```typescript
import { CreateRoomDeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateRoomDeprecatedRequest = {
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  roomId: "2swovpy1fnunu",
  createRoomParams: {
    deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
    clientIPs: [
      "123.123.123.123",
    ],
    roomConfig: "{\"name\":\"my-room\"}",
    region: "Sao_Paulo",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `appId`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `roomId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 2swovpy1fnunu                                                              |
| `createRoomParams`                                                         | [components.CreateRoomParams](../../models/components/createroomparams.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |