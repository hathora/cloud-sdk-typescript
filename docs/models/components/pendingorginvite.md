# PendingOrgInvite

## Example Usage

```typescript
import { PendingOrgInvite } from "@hathora/cloud-sdk-typescript/models/components";

let value: PendingOrgInvite = {
  scopes: [
    "builds:read",
  ],
  createdAt: new Date("2025-02-24T02:16:14.798Z"),
  invitedBy: "noreply@hathora.dev",
  userEmail: "noreply@hathora.dev",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `scopes`                                                                                          | *components.PendingOrgInviteScopes*                                                               | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `createdAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `invitedBy`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | noreply@hathora.dev                                                                               |
| `userEmail`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | A user's email.                                                                                   | noreply@hathora.dev                                                                               |
| `orgId`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | System generated unique identifier for an organization. Not guaranteed to have a specific format. | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                          |