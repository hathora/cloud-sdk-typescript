# Fleet

A fleet is a collection of vCPUs accross your regions that can scale up and down based on demand.

## Example Usage

```typescript
import { Fleet } from "@hathora/cloud-sdk-typescript/models/components";

let value: Fleet = {
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  fleetId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `orgId`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | System generated unique identifier for an organization. Not guaranteed to have a specific format. | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                          |
| `fleetId`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | the id of the fleet                                                                               |                                                                                                   |