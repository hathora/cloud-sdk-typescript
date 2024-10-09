# CreatedOrgToken

## Example Usage

```typescript
import { CreatedOrgToken } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreatedOrgToken = {
  plainTextToken: "<value>",
  orgToken: {
    createdAt: new Date("2023-12-09T21:35:55.501Z"),
    createdBy: "noreply@hathora.dev",
    lastFourCharsOfKey: "<value>",
    status: "active",
    name: "ci-token",
    orgId: "<id>",
    orgTokenId: "org-token-af469a92-5b45-4565-b3c4-b79878de67d2",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `plainTextToken`                                           | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `orgToken`                                                 | [components.OrgToken](../../models/components/orgtoken.md) | :heavy_check_mark:                                         | N/A                                                        |