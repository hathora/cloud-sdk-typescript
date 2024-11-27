# Deployment

## Example Usage

```typescript
import { Deployment } from "@hathora/cloud-sdk-typescript/models/components";

let value: Deployment = {
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
  createdAt: new Date("2023-03-11T01:57:15.921Z"),
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
        region: "Singapore",
      },
    ],
    imageSize: 183280,
    status: "created",
    deletedAt: new Date("2023-06-19T21:49:56.662Z"),
    finishedAt: new Date("2023-01-25T18:02:14.843Z"),
    startedAt: new Date("2024-10-27T17:07:18.797Z"),
    createdAt: new Date("2024-04-18T19:06:55.714Z"),
    createdBy: "noreply@hathora.dev",
    buildId: 1,
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idleTimeoutEnabled`                                                                                                                                 | *boolean*                                                                                                                                            | :heavy_check_mark:                                                                                                                                   | Option to shut down processes that have had no new connections or rooms<br/>for five minutes.                                                        |                                                                                                                                                      |
| `env`                                                                                                                                                | [components.ApplicationWithLatestDeploymentAndBuildDeprecatedEnv](../../models/components/applicationwithlatestdeploymentandbuilddeprecatedenv.md)[] | :heavy_check_mark:                                                                                                                                   | The environment variable that our process will have access to at runtime.                                                                            |                                                                                                                                                      |
| `roomsPerProcess`                                                                                                                                    | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.                                     | 3                                                                                                                                                    |
| `additionalContainerPorts`                                                                                                                           | [components.ContainerPort](../../models/components/containerport.md)[]                                                                               | :heavy_check_mark:                                                                                                                                   | Additional ports your server listens on.                                                                                                             | {<br/>"transportType": "tcp",<br/>"port": 4000,<br/>"name": "debug"<br/>}                                                                            |
| `defaultContainerPort`                                                                                                                               | [components.ContainerPort](../../models/components/containerport.md)                                                                                 | :heavy_check_mark:                                                                                                                                   | A container port object represents the transport configruations for how your server will listen.                                                     |                                                                                                                                                      |
| `createdAt`                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_check_mark:                                                                                                                                   | When the deployment was created.                                                                                                                     |                                                                                                                                                      |
| `createdBy`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  | noreply@hathora.dev                                                                                                                                  |
| `requestedMemoryMB`                                                                                                                                  | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The amount of memory allocated to your process.                                                                                                      | 1024                                                                                                                                                 |
| `requestedCPU`                                                                                                                                       | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The number of cores allocated to your process.                                                                                                       | 0.5                                                                                                                                                  |
| `deploymentId`                                                                                                                                       | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | System generated id for a deployment. Increments by 1.                                                                                               | 1                                                                                                                                                    |
| `buildId`                                                                                                                                            | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | System generated id for a build. Increments by 1.                                                                                                    | 1                                                                                                                                                    |
| `appId`                                                                                                                                              | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | System generated unique identifier for an application.                                                                                               | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                                             |
| `build`                                                                                                                                              | [components.Build](../../models/components/build.md)                                                                                                 | :heavy_check_mark:                                                                                                                                   | A build represents a game server artifact and its associated metadata.                                                                               |                                                                                                                                                      |