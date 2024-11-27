# UpdateUserInviteRequest

## Example Usage

```typescript
import { UpdateUserInviteRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: UpdateUserInviteRequest = {
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  updateUserInvite: {
    scopes: [
      "orgs:read",
    ],
    userEmail: "noreply@hathora.dev",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `orgId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                   |
| `updateUserInvite`                                                         | [components.UpdateUserInvite](../../models/components/updateuserinvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |