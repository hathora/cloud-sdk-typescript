# OrgToken

## Example Usage

```typescript
import { OrgToken } from "@hathora/cloud-sdk-typescript/models/components";

let value: OrgToken = {
  createdAt: new Date("2023-07-23T18:53:48.907Z"),
  createdBy: "noreply@hathora.dev",
  lastFourCharsOfKey: "<value>",
  status: "revoked",
  name: "ci-token",
  orgId: "<id>",
  orgTokenId: "org-token-af469a92-5b45-4565-b3c4-b79878de67d2",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scopes`                                                                                      | *components.Scopes*                                                                           | :heavy_minus_sign:                                                                            | If not defined, the token has Admin access.                                                   |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | noreply@hathora.dev                                                                           |
| `lastFourCharsOfKey`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.OrgTokenStatus](../../models/components/orgtokenstatus.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Readable name for a token. Must be unique within an organization.                             | ci-token                                                                                      |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `orgTokenId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | System generated unique identifier for an organization token.                                 | org-token-af469a92-5b45-4565-b3c4-b79878de67d2                                                |