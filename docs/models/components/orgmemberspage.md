# OrgMembersPage

## Example Usage

```typescript
import { OrgMembersPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: OrgMembersPage = {
  members: [
    {
      joinedAt: new Date("2023-09-13T23:53:04.745Z"),
      createdAt: new Date("2022-10-18T20:48:18.611Z"),
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