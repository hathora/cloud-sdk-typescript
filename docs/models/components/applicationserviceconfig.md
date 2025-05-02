# ApplicationServiceConfig

## Example Usage

```typescript
import { ApplicationServiceConfig } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationServiceConfig = {
  staticProcessAllocation: [
    {
      maxProcesses: 3,
      targetProcesses: 2,
      minProcesses: 1,
      region: "Tokyo",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `staticProcessAllocation`                                                                              | [components.StaticProcessAllocationConfig](../../models/components/staticprocessallocationconfig.md)[] | :heavy_check_mark:                                                                                     | The headroom configuration for each region.<br/>EXPERIMENTAL - this feature is in closed beta.         |