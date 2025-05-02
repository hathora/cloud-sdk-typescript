# CreateBuildRegistryRequest

## Example Usage

```typescript
import { CreateBuildRegistryRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreateBuildRegistryRequest = {
  createBuildV3Params: {
    buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
    buildTag: "0.1.14-14c793",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `orgId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                         |
| `createBuildV3Params`                                                            | [components.CreateBuildV3Params](../../models/components/createbuildv3params.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |