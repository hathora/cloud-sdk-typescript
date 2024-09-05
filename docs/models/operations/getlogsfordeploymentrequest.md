# GetLogsForDeploymentRequest

## Example Usage

```typescript
import { GetLogsForDeploymentRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetLogsForDeploymentRequest = {
    deploymentId: 1,
    tailLines: 100,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `appId`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      | app-af469a92-5b45-4565-b3c4-b79878de67d2 |
| `deploymentId`                           | *number*                                 | :heavy_check_mark:                       | N/A                                      | 1                                        |
| `follow`                                 | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |                                          |
| `tailLines`                              | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 100                                      |