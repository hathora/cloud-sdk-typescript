# RescindInviteRequest

## Example Usage

```typescript
import { RescindInviteRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: RescindInviteRequest = {
    orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    rescindUserInvite: {
        userEmail: "noreply@hathora.dev",
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `orgId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                     |
| `rescindUserInvite`                                                          | [components.RescindUserInvite](../../models/components/rescinduserinvite.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |