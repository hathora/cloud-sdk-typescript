# ProcessV2

## Example Usage

```typescript
import { ProcessV2 } from "@hathora/cloud-sdk-typescript/models/components";

let value: ProcessV2 = {
  status: "failed",
  roomsAllocated: 1,
  terminatedAt: new Date("2024-05-28T15:24:04.349Z"),
  stoppingAt: new Date("2025-12-06T12:43:25.190Z"),
  startedAt: new Date("2024-10-24T21:51:23.585Z"),
  createdAt: new Date("2025-03-21T05:35:21.093Z"),
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
  region: "Seattle",
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  deploymentId: 1,
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
| `exposedPort`                                                                                                    | [components.ProcessV2ExposedPort](../../models/components/processv2exposedport.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              | {<br/>"host": "1.proxy.hathora.dev",<br/>"name": "default",<br/>"port": 34567,<br/>"transportType": "tcp"<br/>}  |
| `region`                                                                                                         | [components.Region](../../models/components/region.md)                                                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `processId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | System generated unique identifier to a runtime instance of your game server.                                    | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                             |
| `deploymentId`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | System generated id for a deployment. Increments by 1.                                                           | 1                                                                                                                |
| `appId`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | System generated unique identifier for an application.                                                           | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                         |