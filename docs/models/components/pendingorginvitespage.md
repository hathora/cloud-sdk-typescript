# PendingOrgInvitesPage

## Example Usage

```typescript
import { PendingOrgInvitesPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: PendingOrgInvitesPage = {
  invites: [
    {
      createdAt: new Date("2023-01-30T00:29:45.081Z"),
      invitedBy: "noreply@hathora.dev",
      userEmail: "noreply@hathora.dev",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `invites`                                                                    | [components.PendingOrgInvite](../../models/components/pendingorginvite.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |