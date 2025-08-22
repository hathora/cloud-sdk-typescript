# UpdateAppRequest

## Example Usage

```typescript
import { UpdateAppRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: UpdateAppRequest = {
  appConfigWithServiceConfig: {
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
    authConfiguration: {},
    appName: "minecraft",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `appId`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                       |
| `appConfigWithServiceConfig`                                                                   | [components.AppConfigWithServiceConfig](../../models/components/appconfigwithserviceconfig.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |