# UpdateFleetV2

## Example Usage

```typescript
import { UpdateFleetV2 } from "@hathora/cloud-sdk-typescript/models/components";

let value: UpdateFleetV2 = {
  autoscalerConfig: {
    scaleUpThreshold: 513844,
  },
  name: "production",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `nodeShapeId`                                                              | [components.NodeShapeId](../../models/components/nodeshapeid.md)           | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `autoscalerConfig`                                                         | [components.AutoscalerConfig](../../models/components/autoscalerconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Readable name for a fleet. Must be unique within an organization.          | production                                                                 |