# ApplicationWithLatestDeploymentAndBuildDeprecatedServiceConfig

## Example Usage

```typescript
import { ApplicationWithLatestDeploymentAndBuildDeprecatedServiceConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationWithLatestDeploymentAndBuildDeprecatedServiceConfig = {
  staticProcessAllocation: [
    {
      maxProcesses: 3,
      targetProcesses: 2,
      minProcesses: 1,
      region: "Johannesburg",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `loadBalancer`                                                                                         | [components.LoadBalancerConfig](../../models/components/loadbalancerconfig.md)                         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `staticProcessAllocation`                                                                              | [components.StaticProcessAllocationConfig](../../models/components/staticprocessallocationconfig.md)[] | :heavy_check_mark:                                                                                     | The headroom configuration for each region.<br/>EXPERIMENTAL - this feature is in closed beta.         |