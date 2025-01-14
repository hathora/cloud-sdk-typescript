# Organization

## Example Usage

```typescript
import { Organization } from "@hathora/cloud-sdk-typescript/models/components";

let value: Organization = {
  isSingleTenant: false,
  stripeCustomerId: "<id>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `enabledFeatureFlags`                                                                             | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | The features enabled for this org and user.                                                       |                                                                                                   |
| `maxRequestedMemoryMB`                                                                            | *number*                                                                                          | :heavy_minus_sign:                                                                                | The maximum memory in MB that can be used by any process in this org.                             |                                                                                                   |
| `scopes`                                                                                          | [components.Scope](../../models/components/scope.md)[]                                            | :heavy_minus_sign:                                                                                | The scopes the user who loaded this has on this org.                                              |                                                                                                   |
| `isSingleTenant`                                                                                  | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `stripeCustomerId`                                                                                | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | The name of an organization.                                                                      |                                                                                                   |
| `orgId`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | System generated unique identifier for an organization. Not guaranteed to have a specific format. | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                          |