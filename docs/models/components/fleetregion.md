# FleetRegion

A fleet region is a region in which a fleet can be deployed.
You can update cloudMinVcpus once every five minutes. It must be a multiple of
scaleIncrementVcpus

## Example Usage

```typescript
import { FleetRegion } from "@hathora/cloud-sdk-typescript/models/components";

let value: FleetRegion = {
  cloudMinVcpusUpdatedAt: new Date("2024-04-09T13:04:59.510Z"),
  cloudMinVcpus: 606393,
  scaleIncrementVcpus: 19193,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cloudMinVcpusUpdatedAt`                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cloudMinVcpus`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scaleIncrementVcpus`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |