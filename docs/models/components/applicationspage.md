# ApplicationsPage

## Example Usage

```typescript
import { ApplicationsPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationsPage = {
  applications: [
    {
      deletedBy: "noreply@hathora.dev",
      deletedAt: new Date("2023-05-17T16:51:26.821Z"),
      createdAt: new Date("2024-06-27T17:30:14.439Z"),
      createdBy: "noreply@hathora.dev",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      serviceConfig: {
        staticProcessAllocation: [
          {
            maxProcesses: 3,
            targetProcesses: 2,
            minProcesses: 1,
            region: "Sao_Paulo",
          },
        ],
      },
      authConfiguration: {},
      appSecret: "secret-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
      appName: "minecraft",
      deployment: {
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
          transportType: "udp",
          port: 8000,
          name: "default",
        },
        createdAt: new Date("2025-02-19T14:53:54.512Z"),
        createdBy: "noreply@hathora.dev",
        experimentalRequestedGPU: 1,
        requestedMemoryMB: 1024,
        requestedCPU: 0.5,
        deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        buildTag: "0.1.14-14c793",
        buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
        build: {
          buildTag: "0.1.14-14c793",
          imageSize: 185269,
          status: "created",
          deletedAt: new Date("2024-01-19T18:09:03.101Z"),
          finishedAt: new Date("2025-01-29T06:43:08.095Z"),
          startedAt: new Date("2023-01-19T11:41:37.414Z"),
          createdAt: new Date("2025-10-06T07:56:59.620Z"),
          createdBy: "noreply@hathora.dev",
          buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
          orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `applications`                                                                                                             | [components.ApplicationWithLatestDeploymentAndBuild](../../models/components/applicationwithlatestdeploymentandbuild.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |