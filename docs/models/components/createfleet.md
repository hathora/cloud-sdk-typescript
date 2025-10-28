# CreateFleet

## Example Usage

```typescript
import { CreateFleet } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreateFleet = {
  nodeShape: "cpu-16-32",
  autoscalerConfig: {
    scaleUpThreshold: 513844,
  },
  name: "production",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `nodeShape`                                                                | [components.NodeShape](../../models/components/nodeshape.md)               | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `autoscalerConfig`                                                         | [components.AutoscalerConfig](../../models/components/autoscalerconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Readable name for a fleet. Must be unique within an organization.          | production                                                                 |