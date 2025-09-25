# ServiceConfig

## Example Usage

```typescript
import { ServiceConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: ServiceConfig = {
  staticProcessAllocation: [],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `processAutoscalerConfig`                                                                                                                                            | [components.ProcessAutoscalerConfig](../../models/components/processautoscalerconfig.md)                                                                             | :heavy_minus_sign:                                                                                                                                                   | The configuration for the Process Autoscaler for this application.<br/>Autoscaling must be enabled on a per-region basis.<br/>EXPERIMENTAL - This feature is in closed beta. |
| `loadBalancer`                                                                                                                                                       | [components.LoadBalancerConfig](../../models/components/loadbalancerconfig.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `staticProcessAllocation`                                                                                                                                            | [components.StaticProcessAllocationConfig](../../models/components/staticprocessallocationconfig.md)[]                                                               | :heavy_check_mark:                                                                                                                                                   | The headroom configuration for each region.                                                                                                                          |