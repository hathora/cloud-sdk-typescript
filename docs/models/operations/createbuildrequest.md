# CreateBuildRequest

## Example Usage

```typescript
import { CreateBuildRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateBuildRequest = {
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  createMultipartBuildParams: {
    buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 2243.17,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `orgId`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                       |
| `createMultipartBuildParams`                                                                   | [components.CreateMultipartBuildParams](../../models/components/createmultipartbuildparams.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |