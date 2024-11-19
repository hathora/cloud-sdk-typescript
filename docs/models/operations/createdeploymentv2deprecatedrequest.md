# CreateDeploymentV2DeprecatedRequest

## Example Usage

```typescript
import { CreateDeploymentV2DeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateDeploymentV2DeprecatedRequest = {
  buildId: 1,
  deploymentConfigV2: {
    idleTimeoutEnabled: false,
    env: [
      {
        value: "TRUE",
        name: "EULA",
      },
    ],
    roomsPerProcess: 3,
    additionalContainerPorts: [
      {
        transportType: "tls",
        port: 8000,
        name: "default",
      },
    ],
    transportType: "tcp",
    containerPort: 4000,
    requestedMemoryMB: 1024,
    requestedCPU: 0.5,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `appId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `buildId`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 1                                                                              |
| `deploymentConfigV2`                                                           | [components.DeploymentConfigV2](../../models/components/deploymentconfigv2.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |