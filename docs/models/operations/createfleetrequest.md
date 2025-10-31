# CreateFleetRequest

## Example Usage

```typescript
import { CreateFleetRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateFleetRequest = {
  createFleetV2: {
    nodeShapeId: "shape-l4-1-4",
    autoscalerConfig: {
      scaleUpThreshold: 513844,
    },
    name: "production",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                             |
| `createFleetV2`                                                      | [components.CreateFleetV2](../../models/components/createfleetv2.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |