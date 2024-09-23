# BuildsV3Page

## Example Usage

```typescript
import { BuildsV3Page } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildsV3Page = {
  builds: [
    {
      buildTag: "0.1.14-14c793",
      imageSize: 868126,
      status: "created",
      deletedAt: new Date("2023-11-06T15:40:43.604Z"),
      finishedAt: new Date("2022-05-16T16:57:38.984Z"),
      startedAt: new Date("2024-07-18T10:00:30.471Z"),
      createdAt: new Date("2024-06-03T19:43:04.405Z"),
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