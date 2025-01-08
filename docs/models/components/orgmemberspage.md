# OrgMembersPage

## Example Usage

```typescript
import { OrgMembersPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: OrgMembersPage = {
  members: [
    {
      scopes: "admin",
      joinedAt: new Date("2024-10-04T19:38:10.454Z"),
      createdAt: new Date("2023-01-23T00:54:32.021Z"),
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