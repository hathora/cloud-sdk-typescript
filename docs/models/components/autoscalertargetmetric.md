# AutoscalerTargetMetric

## Example Usage

```typescript
import { AutoscalerTargetMetric } from "@hathora/cloud-sdk-typescript/models/components";

let value: AutoscalerTargetMetric = {
  metricValue: 3827.85,
  metricName: "concurrent-requests",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `metricValue`                                                                                                                          | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `metricName`                                                                                                                           | [components.MetricName](../../models/components/metricname.md)                                                                         | :heavy_check_mark:                                                                                                                     | The name of the metric.<br/>Allowed values:<br/>`concurrent-requests`: Tracks the number of concurrent requests that a single Process handles. |