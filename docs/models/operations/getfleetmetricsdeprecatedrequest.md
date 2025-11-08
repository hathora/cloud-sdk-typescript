# GetFleetMetricsDeprecatedRequest

## Example Usage

```typescript
import { GetFleetMetricsDeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetFleetMetricsDeprecatedRequest = {
  fleetId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `fleetId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `metrics`                                                                  | [components.FleetMetricName](../../models/components/fleetmetricname.md)[] | :heavy_minus_sign:                                                         | Available metrics to query over time.                                      |                                                                            |
| `end`                                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `start`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Unix timestamp. Default is -1 hour from `end`.                             |                                                                            |
| `step`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `orgId`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                   |