# GetProcessMetricsRequest

## Example Usage

```typescript
import { GetProcessMetricsRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetProcessMetricsRequest = {
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `appId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `processId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | cbfcddd2-0006-43ae-996c-995fff7bed2e                                           |
| `metrics`                                                                      | [components.ProcessMetricName](../../models/components/processmetricname.md)[] | :heavy_minus_sign:                                                             | Available metrics to query over time.                                          |                                                                                |
| `end`                                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | Unix timestamp. Default is current time.                                       |                                                                                |
| `start`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Unix timestamp. Default is -1 hour from `end`.                                 |                                                                                |
| `step`                                                                         | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |