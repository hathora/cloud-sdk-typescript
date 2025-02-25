# OrgMembersPage

## Example Usage

```typescript
import { OrgMembersPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: OrgMembersPage = {
  members: [
    {
      scopes: "viewer",
      joinedAt: new Date("2023-10-23T22:17:23.016Z"),
      createdAt: new Date("2025-03-16T18:32:36.809Z"),
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