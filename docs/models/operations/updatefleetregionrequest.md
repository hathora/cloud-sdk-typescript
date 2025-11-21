# UpdateFleetRegionRequest

## Example Usage

```typescript
import { UpdateFleetRegionRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: UpdateFleetRegionRequest = {
  fleetId: "<id>",
  region: "Tokyo",
  fleetRegionConfigV2: {
    nodeBaseline: 385222,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `fleetId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `region`                                                                         | [components.Region](../../models/components/region.md)                           | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `orgId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                         |
| `fleetRegionConfigV2`                                                            | [components.FleetRegionConfigV2](../../models/components/fleetregionconfigv2.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |