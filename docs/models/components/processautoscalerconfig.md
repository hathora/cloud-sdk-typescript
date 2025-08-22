# ProcessAutoscalerConfig

The configuration for the Process Autoscaler for this application.
Autoscaling must be enabled on a per-region basis.
EXPERIMENTAL - This feature is in closed beta.

## Example Usage

```typescript
import { ProcessAutoscalerConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: ProcessAutoscalerConfig = {
  targetMetric: {
    metricValue: 6969.57,
    metricName: "concurrent-requests",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `targetMetric`                                                                         | [components.AutoscalerTargetMetric](../../models/components/autoscalertargetmetric.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |