# CreateFleetDeprecatedRequest

## Example Usage

```typescript
import { CreateFleetDeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateFleetDeprecatedRequest = {
  createFleet: {
    nodeShape: "cpu-16-64",
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