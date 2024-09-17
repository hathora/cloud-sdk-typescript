# CreateWithMultipartUploadsV2DeprecatedRequest

## Example Usage

```typescript
import { CreateWithMultipartUploadsV2DeprecatedRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateWithMultipartUploadsV2DeprecatedRequest = {
  createMultipartBuildParams: {
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 2305.33,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `appId`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                       |
| `createMultipartBuildParams`                                                                   | [components.CreateMultipartBuildParams](../../models/components/createmultipartbuildparams.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |