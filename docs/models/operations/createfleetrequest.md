# CreateFleetRequest

## Example Usage

```typescript
import { CreateFleetRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateFleetRequest = {
  createFleet: {
    nodeShape: "cpu-32-128",
    autoscalerConfig: {
      scaleUpThreshold: 513844,
    },
    name: "production",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `orgId`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                         |
| `createFleet`                                                    | [components.CreateFleet](../../models/components/createfleet.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |