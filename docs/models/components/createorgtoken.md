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
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | Readable name for a token. Must be unique within an organization. | ci-token                                                          |