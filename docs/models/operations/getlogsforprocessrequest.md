# GetLogsForProcessRequest

## Example Usage

```typescript
import { GetLogsForProcessRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetLogsForProcessRequest = {
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `appId`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      | app-af469a92-5b45-4565-b3c4-b79878de67d2 |
| `processId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      | cbfcddd2-0006-43ae-996c-995fff7bed2e     |
| `follow`                                 | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |                                          |
| `tailLines`                              | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 100                                      |