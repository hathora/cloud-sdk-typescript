# RoomConnectionData

Connection information for the default and additional ports.

## Example Usage

```typescript
import { RoomConnectionData } from "@hathora/cloud-sdk-typescript/models/components";

let value: RoomConnectionData = {
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
  status: "starting",
  roomId: "2swovpy1fnunu",
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `additionalExposedPorts`                                                                                                                                                          | [components.ExposedPort](../../models/components/exposedport.md)[]                                                                                                                | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               | [<br/>{<br/>"host": "1.proxy.hathora.dev",<br/>"name": "debug",<br/>"port": 72941,<br/>"transportType": "tcp"<br/>}<br/>]                                                         |
| `exposedPort`                                                                                                                                                                     | [components.ExposedPort](../../models/components/exposedport.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                | Connection details for an active process.                                                                                                                                         | {<br/>"host": "1.proxy.hathora.dev",<br/>"name": "default",<br/>"port": 34567,<br/>"transportType": "tcp"<br/>}                                                                   |
| `status`                                                                                                                                                                          | [components.RoomReadyStatus](../../models/components/roomreadystatus.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |
| `roomId`                                                                                                                                                                          | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.<br/>Note: error will be returned if `roomId` is not globally unique. | 2swovpy1fnunu                                                                                                                                                                     |
| `processId`                                                                                                                                                                       | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | System generated unique identifier to a runtime instance of your game server.                                                                                                     | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                                                                                              |