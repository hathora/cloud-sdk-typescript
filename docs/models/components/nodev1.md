# NodeV1

## Example Usage

```typescript
import { NodeV1 } from "@hathora/cloud-sdk-typescript/models/components";

let value: NodeV1 = {
  stoppedAt: null,
  startedAt: new Date("2024-12-24T00:27:26.087Z"),
  gpu: 6846.36,
  memoryMb: 6568.87,
  cpu: 2213.36,
  region: "Johannesburg",
  status: "stopped",
  hosting: "metal",
  host: "bright-airmail.net",
  nodeId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `stoppedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `gpu`                                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `memoryMb`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cpu`                                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `region`                                                                                      | [components.Region](../../models/components/region.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.NodeV1Status](../../models/components/nodev1status.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hosting`                                                                                     | [components.Hosting](../../models/components/hosting.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `host`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nodeId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |