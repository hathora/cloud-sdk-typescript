# BuildsV3Page

## Example Usage

```typescript
import { BuildsV3Page } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildsV3Page = {
  builds: [
    {
      buildTag: "0.1.14-14c793",
      imageSize: 521037,
      status: "created",
      deletedAt: new Date("2022-08-08T04:42:30.927Z"),
      finishedAt: new Date("2022-01-21T07:11:50.213Z"),
      startedAt: new Date("2024-05-19T21:25:27.801Z"),
      createdAt: new Date("2022-09-03T10:06:53.981Z"),
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