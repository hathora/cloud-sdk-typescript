# CreateOrgTokenRequest

## Example Usage

```typescript
import { CreateOrgTokenRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateOrgTokenRequest = {
    orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    createOrgToken: {
        name: "ci-token",
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `orgId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                               |
| `createOrgToken`                                                       | [components.CreateOrgToken](../../models/components/createorgtoken.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |