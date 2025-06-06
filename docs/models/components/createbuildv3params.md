# CreateBuildV3Params

## Example Usage

```typescript
import { CreateBuildV3Params } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreateBuildV3Params = {
  buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
  buildTag: "0.1.14-14c793",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                        | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | System generated id for a build. Can also be user defined when creating a build.                                                                 | bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5                                                                                                         |
| `buildTag`                                                                                                                                       | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Tag to associate an external version with a build. It is accessible via [`GetBuild()`](https://hathora.dev/api#tag/BuildsV3/operation/GetBuild). | 0.1.14-14c793                                                                                                                                    |