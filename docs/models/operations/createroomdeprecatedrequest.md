# CreateRoomDeprecatedRequest

## Example Usage

```typescript
import { CreateRoomDeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateRoomDeprecatedRequest = {
    roomId: "2swovpy1fnunu",
    createRoomParams: {
        roomConfig: '{"name":"my-room"}',
        region: "Tokyo",
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `appId`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `roomId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 2swovpy1fnunu                                                              |
| `createRoomParams`                                                         | [components.CreateRoomParams](../../models/components/createroomparams.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |