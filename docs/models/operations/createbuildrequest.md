# CreateBuildRequest

## Example Usage

```typescript
import { CreateBuildRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateBuildRequest = {
    orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    createMultipartBuildParams: {
        buildTag: "0.1.14-14c793",
        buildSizeInBytes: 2305.33,
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `orgId`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                       |
| `createMultipartBuildParams`                                                                   | [components.CreateMultipartBuildParams](../../models/components/createmultipartbuildparams.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |