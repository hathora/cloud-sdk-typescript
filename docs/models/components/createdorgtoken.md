# CreatedOrgToken

## Example Usage

```typescript
import { CreatedOrgToken } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreatedOrgToken = {
  plainTextToken: "<value>",
  orgToken: {
    createdAt: new Date("2026-02-11T19:38:40.891Z"),
    createdBy: "noreply@hathora.dev",
    lastFourCharsOfKey: "<value>",
    status: "revoked",
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