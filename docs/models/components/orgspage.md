# OrgsPage

## Example Usage

```typescript
import { OrgsPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: OrgsPage = {
  orgs: [
    {
      maxRequestedMemoryMB: 4362.52,
      scopes: [
        "orgs:read-write",
      ],
      isSingleTenant: false,
      stripeCustomerId: "<id>",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgs`                                                               | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |