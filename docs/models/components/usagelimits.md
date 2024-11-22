# UsageLimits

## Example Usage

```typescript
import { UsageLimits } from "@hathora/cloud-sdk-typescript/models/components";

let value: UsageLimits = {
  monthlyProcessVcpuHoursConsumed: 6674.10,
  concurrentProcessVcpus7DayMax: 1317.98,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `monthlyProcessVcpuHoursConsumed` | *number*                          | :heavy_check_mark:                | N/A                               |
| `monthlyProcessVcpuHoursLimit`    | *number*                          | :heavy_minus_sign:                | N/A                               |
| `concurrentProcessVcpus7DayMax`   | *number*                          | :heavy_check_mark:                | N/A                               |
| `concurrentProcessVcpusLimit`     | *number*                          | :heavy_minus_sign:                | N/A                               |