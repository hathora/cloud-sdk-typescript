# DeploymentConfigV3

## Example Usage

```typescript
import { DeploymentConfigV3 } from "@hathora/cloud-sdk-typescript/models/components";

let value: DeploymentConfigV3 = {
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
      transportType: "udp",
      port: 8000,
      name: "default",
    },
  ],
  transportType: "tls",
  containerPort: 4000,
  requestedMemoryMB: 1024,
  requestedCPU: 0.5,
  buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `deploymentTag`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Arbitrary metadata associated with a deployment.                                                                 | alpha                                                                                                            |
| `idleTimeoutEnabled`                                                                                             | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Option to shut down processes that have had no new connections or rooms<br/>for five minutes.                    |                                                                                                                  |
| `env`                                                                                                            | [components.DeploymentConfigV3Env](../../models/components/deploymentconfigv3env.md)[]                           | :heavy_check_mark:                                                                                               | The environment variable that our process will have access to at runtime.                                        |                                                                                                                  |
| `roomsPerProcess`                                                                                                | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process. | 3                                                                                                                |
| `additionalContainerPorts`                                                                                       | [components.ContainerPort](../../models/components/containerport.md)[]                                           | :heavy_minus_sign:                                                                                               | Additional ports your server listens on.                                                                         |                                                                                                                  |
| `transportType`                                                                                                  | [components.TransportType](../../models/components/transporttype.md)                                             | :heavy_check_mark:                                                                                               | Transport type specifies the underlying communication protocol to the exposed port.                              |                                                                                                                  |
| `containerPort`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Default port the server listens on.                                                                              | 4000                                                                                                             |
| `requestedMemoryMB`                                                                                              | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The amount of memory allocated to your process.                                                                  | 1024                                                                                                             |
| `requestedCPU`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The number of cores allocated to your process.                                                                   | 0.5                                                                                                              |
| `buildId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | System generated id for a build. Can also be user defined when creating a build.                                 | bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5                                                                         |