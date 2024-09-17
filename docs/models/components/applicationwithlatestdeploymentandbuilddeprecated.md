# ApplicationWithLatestDeploymentAndBuildDeprecated

An application object is the top level namespace for the game server.

## Example Usage

```typescript
import { ApplicationWithLatestDeploymentAndBuildDeprecated } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationWithLatestDeploymentAndBuildDeprecated = {
  deletedBy: "noreply@hathora.dev",
  deletedAt: new Date("2022-01-23T00:54:32.434Z"),
  createdAt: new Date("2022-06-30T18:35:37.950Z"),
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
      transportType: "tls",
      port: 8000,
      name: "default",
    },
    createdAt: new Date("2023-02-10T07:25:55.741Z"),
    createdBy: "noreply@hathora.dev",
    requestedMemoryMB: 1024,
    requestedCPU: 0.5,
    deploymentId: 1,
    buildId: 1,
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    build: {
      buildTag: "0.1.14-14c793",
      regionalContainerTags: [
        {
          containerTag: "<value>",
          region: "Seattle",
        },
      ],
      imageSize: 146441,
      status: "succeeded",
      deletedAt: new Date("2023-09-17T07:14:33.032Z"),
      finishedAt: new Date("2022-10-23T22:17:22.586Z"),
      startedAt: new Date("2024-02-11T07:06:19.563Z"),
      createdAt: new Date("2024-03-16T18:32:36.649Z"),
      createdBy: "noreply@hathora.dev",
      buildId: 1,
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deletedBy`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                        | The email address or token id for the user that deleted the application.                                                                                                                                                                                                                  | noreply@hathora.dev                                                                                                                                                                                                                                                                       |
| `deletedAt`                                                                                                                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                        | When the application was deleted.                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                           |
| `createdAt`                                                                                                                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                        | When the application was created.                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                           |
| `createdBy`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                                       | noreply@hathora.dev                                                                                                                                                                                                                                                                       |
| `orgId`                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                        | System generated unique identifier for an organization. Not guaranteed to have a specific format.                                                                                                                                                                                         | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                                                                                                                                                                                                                  |
| `authConfiguration`                                                                                                                                                                                                                                                                       | [components.AuthConfiguration](../../models/components/authconfiguration.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                        | Configure [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider). |                                                                                                                                                                                                                                                                                           |
| `appSecret`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                        | Secret that is used for identity and access management.                                                                                                                                                                                                                                   | secret-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                                                                                                                                                                                                               |
| `appId`                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                        | System generated unique identifier for an application.                                                                                                                                                                                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                                                                                                                                                                                  |
| `appName`                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                        | Readable name for an application. Must be unique within an organization.                                                                                                                                                                                                                  | minecraft                                                                                                                                                                                                                                                                                 |
| `deployment`                                                                                                                                                                                                                                                                              | [components.Deployment](../../models/components/deployment.md)                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                           |