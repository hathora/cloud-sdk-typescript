# GetDeploymentsRequest

## Example Usage

```typescript
import { GetDeploymentsRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetDeploymentsRequest = {
  deploymentTag: "alpha",
  buildTag: "0.1.14-14c793",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `appId`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      | app-af469a92-5b45-4565-b3c4-b79878de67d2 |
| `deploymentTag`                          | *string*                                 | :heavy_minus_sign:                       | N/A                                      | alpha                                    |
| `buildTag`                               | *string*                                 | :heavy_minus_sign:                       | N/A                                      | 0.1.14-14c793                            |