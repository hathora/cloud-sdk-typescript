# CreateDeploymentV1DeprecatedRequest

## Example Usage

```typescript
import { CreateDeploymentV1DeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateDeploymentV1DeprecatedRequest = {
  buildId: 1,
  deploymentConfig: {
    env: [
      {
        value: "TRUE",
        name: "EULA",
      },
    ],
    roomsPerProcess: 3,
    planName: "tiny",
    additionalContainerPorts: [
      {
        transportType: "udp",
        port: 8000,
        name: "default",
      },
    ],
    transportType: "tls",
    containerPort: 4000,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `appId`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `buildId`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 1                                                                          |
| `deploymentConfig`                                                         | [components.DeploymentConfig](../../models/components/deploymentconfig.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |