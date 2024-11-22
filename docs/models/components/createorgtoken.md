# CreateOrgToken

## Example Usage

```typescript
import { CreateOrgToken } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreateOrgToken = {
  name: "ci-token",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `scopes`                                                          | *components.CreateOrgTokenScopes*                                 | :heavy_minus_sign:                                                | If not defined, the token has Admin access.                       |                                                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | Readable name for a token. Must be unique within an organization. | ci-token                                                          |