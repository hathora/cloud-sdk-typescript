# ServiceConfig

## Example Usage

```typescript
import { ServiceConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: ServiceConfig = {
  staticProcessAllocation: [
    {
      maxProcesses: 3,
      targetProcesses: 2,
      minProcesses: 1,
      region: "Los_Angeles",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `staticProcessAllocation`                                                                              | [components.StaticProcessAllocationConfig](../../models/components/staticprocessallocationconfig.md)[] | :heavy_check_mark:                                                                                     | The headroom configuration for each region.<br/>EXPERIMENTAL - this feature is in closed beta.         |