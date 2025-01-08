# CreateDeploymentRequest

## Example Usage

```typescript
import { CreateDeploymentRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateDeploymentRequest = {
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  deploymentConfigV3: {
    deploymentTag: "alpha",
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
    transportType: "tls",
    containerPort: 4000,
    requestedMemoryMB: 1024,
    requestedCPU: 0.5,
    buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `appId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `deploymentConfigV3`                                                           | [components.DeploymentConfigV3](../../models/components/deploymentconfigv3.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |