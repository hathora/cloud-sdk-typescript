# ApplicationsPage

## Example Usage

```typescript
import { ApplicationsPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationsPage = {
  applications: [
    {
      deletedBy: "noreply@hathora.dev",
      deletedAt: new Date("2022-07-20T20:59:34.122Z"),
      createdAt: new Date("2022-06-08T18:04:31.662Z"),
      createdBy: "noreply@hathora.dev",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
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
        createdAt: new Date("2023-01-25T18:02:14.843Z"),
        createdBy: "noreply@hathora.dev",
        requestedMemoryMB: 1024,
        requestedCPU: 0.5,
        deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        buildTag: "0.1.14-14c793",
        buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
        build: {
          buildTag: "0.1.14-14c793",
          imageSize: 940432,
          status: "failed",
          deletedAt: new Date("2024-03-31T12:50:52.284Z"),
          finishedAt: new Date("2024-09-17T11:26:38.524Z"),
          startedAt: new Date("2022-04-02T10:20:37.470Z"),
          createdAt: new Date("2023-08-29T04:52:14.624Z"),
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