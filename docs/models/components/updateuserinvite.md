# UpdateUserInvite

## Example Usage

```typescript
import { UpdateUserInvite } from "@hathora/cloud-sdk-typescript/models/components";

let value: UpdateUserInvite = {
  scopes: [
    "applications:read",
  ],
  userEmail: "noreply@hathora.dev",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `scopes`                                                        | *components.UpdateUserInviteScopes*                             | :heavy_check_mark:                                              | Scopes can only be removed or added if a user has those scopes. |                                                                 |
| `userEmail`                                                     | *string*                                                        | :heavy_check_mark:                                              | A user's email.                                                 | noreply@hathora.dev                                             |