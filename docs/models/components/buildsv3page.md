# BuildsV3Page

## Example Usage

```typescript
import { BuildsV3Page } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildsV3Page = {
  builds: [
    {
      buildTag: "0.1.14-14c793",
      imageSize: 863042,
      status: "running",
      deletedAt: new Date("2023-12-07T06:50:35.732Z"),
      finishedAt: new Date("2024-03-19T00:49:38.139Z"),
      startedAt: new Date("2024-02-08T08:04:12.259Z"),
      createdAt: new Date("2025-04-14T15:03:13.290Z"),
      createdBy: "noreply@hathora.dev",
      buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `builds`                                                   | [components.BuildV3](../../models/components/buildv3.md)[] | :heavy_check_mark:                                         | N/A                                                        |