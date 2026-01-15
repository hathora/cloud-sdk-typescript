# BuildsV3Page

## Example Usage

```typescript
import { BuildsV3Page } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildsV3Page = {
  builds: [
    {
      buildTag: "0.1.14-14c793",
      imageSize: 472053,
      status: "running",
      deletedAt: new Date("2025-02-07T08:04:12.259Z"),
      finishedAt: new Date("2025-12-21T00:33:55.650Z"),
      startedAt: new Date("2024-05-02T14:11:36.998Z"),
      createdAt: new Date("2026-01-13T12:09:48.297Z"),
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