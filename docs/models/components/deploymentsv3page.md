# DeploymentsV3Page

## Example Usage

```typescript
import { DeploymentsV3Page } from "@hathora/cloud-sdk-typescript/models/components";

let value: DeploymentsV3Page = {
  deployments: [
    {
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
          transportType: "tcp",
          port: 4000,
          name: "debug",
        },
      ],
      defaultContainerPort: {
        transportType: "tls",
        port: 8000,
        name: "default",
      },
      createdAt: new Date("2024-03-05T21:05:18.875Z"),
      createdBy: "noreply@hathora.dev",
      requestedMemoryMB: 1024,
      requestedCPU: 0.5,
      deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
      buildTag: "0.1.14-14c793",
      buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `deployments`                                                        | [components.DeploymentV3](../../models/components/deploymentv3.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |