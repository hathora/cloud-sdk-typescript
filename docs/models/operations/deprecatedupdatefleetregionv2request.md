# DeprecatedUpdateFleetRegionV2Request

## Example Usage

```typescript
import { DeprecatedUpdateFleetRegionV2Request } from "@hathora/cloud-sdk-typescript/models/operations";

let value: DeprecatedUpdateFleetRegionV2Request = {
  fleetId: "<id>",
  region: "Mumbai",
  fleetRegionConfig: {
    cloudMinVcpus: 758709,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fleetId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `region`                                                                     | [components.Region](../../models/components/region.md)                       | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `orgId`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                     |
| `fleetRegionConfig`                                                          | [components.FleetRegionConfig](../../models/components/fleetregionconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |