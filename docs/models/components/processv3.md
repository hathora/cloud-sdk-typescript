# ProcessV3

## Example Usage

```typescript
import { ProcessV3 } from "@hathora/cloud-sdk-typescript/models/components";

let value: ProcessV3 = {
  status: "stopping",
  roomsAllocated: 1,
  terminatedAt: new Date("2024-03-21T05:35:21.093Z"),
  stoppingAt: new Date("2022-02-12T22:47:44.474Z"),
  startedAt: new Date("2022-11-06T22:57:15.637Z"),
  createdAt: new Date("2022-05-12T17:39:01.246Z"),
  roomsPerProcess: 3,
  additionalExposedPorts: [
    {
      transportType: "tcp",
      port: 72941,
      host: "1.proxy.hathora.dev",
      name: "debug",
    },
  ],
  exposedPort: {
    transportType: "tcp",
    port: 34567,
    host: "1.proxy.hathora.dev",
    name: "default",
  },
  region: "London",
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                         | [components.ProcessStatus](../../models/components/processstatus.md)                                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `roomsAllocated`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Tracks the number of rooms that have been allocated to the process.                                              | 1                                                                                                                |
| `terminatedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the process has been terminated.                                                                            |                                                                                                                  |
| `stoppingAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the process is issued to stop. We use this to determine when we should stop billing.                        |                                                                                                                  |
| `startedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the process bound to the specified port. We use this to determine when we should start billing.             |                                                                                                                  |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the process started being provisioned.                                                                      |                                                                                                                  |
| `roomsPerProcess`                                                                                                | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process. | 3                                                                                                                |
| `additionalExposedPorts`                                                                                         | [components.ExposedPort](../../models/components/exposedport.md)[]                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              | [<br/>{<br/>"host": "1.proxy.hathora.dev",<br/>"name": "debug",<br/>"port": 72941,<br/>"transportType": "tcp"<br/>}<br/>] |
| `exposedPort`                                                                                                    | [components.ProcessV3ExposedPort](../../models/components/processv3exposedport.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              | {<br/>"host": "1.proxy.hathora.dev",<br/>"name": "default",<br/>"port": 34567,<br/>"transportType": "tcp"<br/>}  |
| `region`                                                                                                         | [components.Region](../../models/components/region.md)                                                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `processId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | System generated unique identifier to a runtime instance of your game server.                                    | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                             |
| `deploymentId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | System generated id for a deployment.                                                                            | dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5                                                                         |
| `appId`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | System generated unique identifier for an application.                                                           | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                         |