# ApplicationsPage

## Example Usage

```typescript
import { ApplicationsPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationsPage = {
  applications: [
    {
      deletedBy: "noreply@hathora.dev",
      deletedAt: new Date("2024-02-25T16:16:37.395Z"),
      createdAt: new Date("2023-03-11T01:57:15.921Z"),
      createdBy: "noreply@hathora.dev",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      authConfiguration: {},
      appSecret: "secret-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
      appName: "minecraft",
      deployment: {
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
        createdAt: new Date("2022-07-20T20:59:34.122Z"),
        createdBy: "noreply@hathora.dev",
        requestedMemoryMB: 1024,
        requestedCPU: 0.5,
        deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        buildTag: "0.1.14-14c793",
        buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
        build: {
          buildTag: "0.1.14-14c793",
          imageSize: 144847,
          status: "running",
          deletedAt: new Date("2023-01-25T18:02:14.843Z"),
          finishedAt: new Date("2024-10-27T17:07:18.797Z"),
          startedAt: new Date("2024-04-18T19:06:55.714Z"),
          createdAt: new Date("2024-03-31T12:50:52.284Z"),
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