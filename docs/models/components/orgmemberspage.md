# OrgMembersPage

## Example Usage

```typescript
import { OrgMembersPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: OrgMembersPage = {
  members: [
    {
      scopes: "admin",
      joinedAt: new Date("2025-02-26T05:29:29.873Z"),
      createdAt: new Date("2024-05-08T03:40:47.048Z"),
      invitedBy: "noreply@hathora.dev",
      userEmail: "noreply@hathora.dev",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `members`                                                      | [components.OrgMember](../../models/components/orgmember.md)[] | :heavy_check_mark:                                             | N/A                                                            |