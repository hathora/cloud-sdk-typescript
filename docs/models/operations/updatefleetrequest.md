# UpdateFleetRequest

## Example Usage

```typescript
import { UpdateFleetRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: UpdateFleetRequest = {
  fleetId: "<id>",
  updateFleet: {
    autoscalerConfig: {
      scaleUpThreshold: 679459,
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `fleetId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `orgId`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                         |
| `updateFleet`                                                    | [components.UpdateFleet](../../models/components/updatefleet.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |