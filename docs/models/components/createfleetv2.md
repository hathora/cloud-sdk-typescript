# CreateFleetV2

## Example Usage

```typescript
import { CreateFleetV2 } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreateFleetV2 = {
  nodeShapeId: "shape-amd64-32-128",
  autoscalerConfig: {
    scaleUpThreshold: 513844,
  },
  name: "production",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `nodeShapeId`                                                              | [components.NodeShapeId](../../models/components/nodeshapeid.md)           | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `autoscalerConfig`                                                         | [components.AutoscalerConfig](../../models/components/autoscalerconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Readable name for a fleet. Must be unique within an organization.          | production                                                                 |