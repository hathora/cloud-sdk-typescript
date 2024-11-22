# CreateWithMultipartUploadsV2DeprecatedRequest

## Example Usage

```typescript
import { CreateWithMultipartUploadsV2DeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateWithMultipartUploadsV2DeprecatedRequest = {
  createMultipartBuildParams: {
    buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 9608.35,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `appId`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                       |
| `createMultipartBuildParams`                                                                   | [components.CreateMultipartBuildParams](../../models/components/createmultipartbuildparams.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |