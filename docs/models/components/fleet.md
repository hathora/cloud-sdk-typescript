# Fleet

A fleet is a collection of nodes across your regions that can scale up and down based on demand.

## Example Usage

```typescript
import { Fleet } from "@hathora/cloud-sdk-typescript/models/components";

let value: Fleet = {
  nodeShape: "gpu-h100-8-192-960",
  name: "production",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  fleetId: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `errorState`                                                                                                   | [components.PartialRecordRegionFleetErrorState](../../models/components/partialrecordregionfleeterrorstate.md) | :heavy_minus_sign:                                                                                             | Make all properties in T optional                                                                              |                                                                                                                |
| `nodeShape`                                                                                                    | [components.NodeShape](../../models/components/nodeshape.md)                                                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `autoscalerConfig`                                                                                             | [components.AutoscalerConfig](../../models/components/autoscalerconfig.md)                                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Readable name for a fleet. Must be unique within an organization.                                              | production                                                                                                     |
| `orgId`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | System generated unique identifier for an organization. Not guaranteed to have a specific format.              | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                                       |
| `fleetId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The id of the fleet.                                                                                           |                                                                                                                |