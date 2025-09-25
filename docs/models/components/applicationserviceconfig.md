# ApplicationServiceConfig

## Example Usage

```typescript
import { ApplicationServiceConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationServiceConfig = {
  staticProcessAllocation: [
    {
      maxProcesses: 3,
      targetProcesses: 2,
      minProcesses: 1,
      region: "Dubai",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `processAutoscalerConfig`                                                                                                                                            | [components.ProcessAutoscalerConfig](../../models/components/processautoscalerconfig.md)                                                                             | :heavy_minus_sign:                                                                                                                                                   | The configuration for the Process Autoscaler for this application.<br/>Autoscaling must be enabled on a per-region basis.<br/>EXPERIMENTAL - This feature is in closed beta. |
| `loadBalancer`                                                                                                                                                       | [components.LoadBalancerConfig](../../models/components/loadbalancerconfig.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `staticProcessAllocation`                                                                                                                                            | [components.StaticProcessAllocationConfig](../../models/components/staticprocessallocationconfig.md)[]                                                               | :heavy_check_mark:                                                                                                                                                   | The headroom configuration for each region.                                                                                                                          |