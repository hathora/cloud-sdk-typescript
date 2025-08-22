# PatchAppRequest

## Example Usage

```typescript
import { PatchAppRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: PatchAppRequest = {
  partialAppConfigWithServiceConfig: {
    serviceConfig: {
      staticProcessAllocation: [
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Sydney",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                     |
| `partialAppConfigWithServiceConfig`                                                                          | [components.PartialAppConfigWithServiceConfig](../../models/components/partialappconfigwithserviceconfig.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |