# UsageLimits

## Example Usage

```typescript
import { UsageLimits } from "@hathora/cloud-sdk-typescript/models/components";

let value: UsageLimits = {
  monthlyProcessVcpuHoursConsumed: 7592.85,
  concurrentProcessVcpus7DayMax: 8126.04,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `monthlyProcessVcpuHoursConsumed`                                                                                                 | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | The number of vCPU hours used up by the organization in the current month.                                                        |
| `monthlyProcessVcpuHoursLimit`                                                                                                    | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The maximum number of monthly process vcpu hours that can be run by the organization<br/>If undefined, the organization has no limit. |
| `concurrentProcessVcpus7DayMax`                                                                                                   | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | The maximum number of concurrent processes that have been run by the organization in the last 7 days.                             |
| `concurrentProcessVcpusLimit`                                                                                                     | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The maximum number of concurrent processes that can be run by the organization<br/>If undefined, the organization has no limit.   |