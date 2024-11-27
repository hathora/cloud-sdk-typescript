# CreateUserInvite

## Example Usage

```typescript
import { CreateUserInvite } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreateUserInvite = {
  userEmail: "noreply@hathora.dev",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `scopes`                                   | *components.CreateUserInviteScopes*        | :heavy_minus_sign:                         | If not defined, the user has Admin access. |                                            |
| `userEmail`                                | *string*                                   | :heavy_check_mark:                         | A user's email.                            | noreply@hathora.dev                        |