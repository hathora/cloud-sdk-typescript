# BuildsV3Page

## Example Usage

```typescript
import { BuildsV3Page } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildsV3Page = {
  builds: [
    {
      buildTag: "0.1.14-14c793",
      imageSize: 19987,
      status: "created",
      deletedAt: new Date("2023-04-30T02:45:50.682Z"),
      finishedAt: new Date("2022-11-06T22:57:15.343Z"),
      startedAt: new Date("2024-12-09T15:02:57.691Z"),
      createdAt: new Date("2022-05-12T17:39:01.565Z"),
      createdBy: "noreply@hathora.dev",
      buildId: "<value>",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `builds`                                                   | [components.BuildV3](../../models/components/buildv3.md)[] | :heavy_check_mark:                                         | N/A                                                        |