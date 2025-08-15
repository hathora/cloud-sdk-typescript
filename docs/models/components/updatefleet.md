# UpdateFleet

## Example Usage

```typescript
import { UpdateFleet } from "@hathora/cloud-sdk-typescript/models/components";

let value: UpdateFleet = {
  autoscalerConfig: {
    scaleUpThreshold: 679459,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `nodeShape`                                                                | [components.NodeShape](../../models/components/nodeshape.md)               | :heavy_minus_sign:                                                         | N/A                                                                        |
| `autoscalerConfig`                                                         | [components.AutoscalerConfig](../../models/components/autoscalerconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |