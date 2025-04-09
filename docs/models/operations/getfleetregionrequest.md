# GetFleetRegionRequest

## Example Usage

```typescript
import { GetFleetRegionRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetFleetRegionRequest = {
  fleetId: "<id>",
  region: "Dubai",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `fleetId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |                                                        |
| `region`                                               | [components.Region](../../models/components/region.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |
| `orgId`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39               |