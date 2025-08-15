# Fleet

A fleet is a collection of vCPUs across your regions that can scale up and down based on demand.

## Example Usage

```typescript
import { Fleet } from "@hathora/cloud-sdk-typescript/models/components";

let value: Fleet = {
  nodeShape: "gpu-l4-2-24-96",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  fleetId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `nodeShape`                                                                                       | [components.NodeShape](../../models/components/nodeshape.md)                                      | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `autoscalerConfig`                                                                                | [components.AutoscalerConfig](../../models/components/autoscalerconfig.md)                        | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `orgId`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | System generated unique identifier for an organization. Not guaranteed to have a specific format. | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                          |
| `fleetId`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | the id of the fleet                                                                               |                                                                                                   |