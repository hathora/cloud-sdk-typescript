# Organization

## Example Usage

```typescript
import { Organization } from "@hathora/cloud-sdk-typescript/models/components";

let value: Organization = {
  isSingleTenant: false,
  stripeCustomerId: "<value>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `isSingleTenant`                                                                                  | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `stripeCustomerId`                                                                                | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `orgId`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | System generated unique identifier for an organization. Not guaranteed to have a specific format. | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                          |