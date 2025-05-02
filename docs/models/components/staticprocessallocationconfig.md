# StaticProcessAllocationConfig

## Example Usage

```typescript
import { StaticProcessAllocationConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: StaticProcessAllocationConfig = {
  maxProcesses: 3,
  targetProcesses: 2,
  minProcesses: 1,
  region: "Washington_DC",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `maxProcesses`                                                                                                      | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The maximum number of running processes that can be spun up during upgrades<br/>Invariant: minProcesses <= maxProcesses | 3                                                                                                                   |
| `targetProcesses`                                                                                                   | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The target number of running processes                                                                              | 2                                                                                                                   |
| `minProcesses`                                                                                                      | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The minimum running processes required during upgrades.<br/>Invariant: 0 <= minProcesses < targetProcesses          | 1                                                                                                                   |
| `region`                                                                                                            | [components.Region](../../models/components/region.md)                                                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |