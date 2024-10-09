# FleetRegion

A fleet region is a region in which a fleet can be deployed.
You can update cloudMinVcpus once every five minutes. It must be a multiple of
scaleIncrementVcpus

## Example Usage

```typescript
import { FleetRegion } from "@hathora/cloud-sdk-typescript/models/components";

let value: FleetRegion = {
  cloudMinVcpusUpdatedAt: new Date("2022-11-14T04:32:16.328Z"),
  cloudMinVcpus: 183191,
  scaleIncrementVcpus: 586513,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cloudMinVcpusUpdatedAt`                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cloudMinVcpus`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scaleIncrementVcpus`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |