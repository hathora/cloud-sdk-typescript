# ListOrgTokens

## Example Usage

```typescript
import { ListOrgTokens } from "@hathora/cloud-sdk-typescript/models/components";

let value: ListOrgTokens = {
  tokens: [
    {
      createdAt: new Date("2024-08-24T11:59:25.466Z"),
      createdBy: "noreply@hathora.dev",
      lastFourCharsOfKey: "<value>",
      status: "revoked",
      name: "ci-token",
      orgId: "<id>",
      orgTokenId: "org-token-af469a92-5b45-4565-b3c4-b79878de67d2",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tokens`                                                     | [components.OrgToken](../../models/components/orgtoken.md)[] | :heavy_check_mark:                                           | N/A                                                          |