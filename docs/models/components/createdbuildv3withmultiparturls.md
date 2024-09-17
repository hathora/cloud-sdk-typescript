# CreatedBuildV3WithMultipartUrls

A build represents a game server artifact and its associated metadata.

## Example Usage

```typescript
import { CreatedBuildV3WithMultipartUrls } from "@hathora/cloud-sdk-typescript/models/components";

let value: CreatedBuildV3WithMultipartUrls = {
  buildTag: "0.1.14-14c793",
  imageSize: 880476,
  status: "running",
  deletedAt: new Date("2024-10-03T09:15:57.162Z"),
  finishedAt: new Date("2022-03-12T07:20:09.120Z"),
  startedAt: new Date("2022-08-26T15:17:21.807Z"),
  createdAt: new Date("2024-01-29T22:47:11.859Z"),
  createdBy: "noreply@hathora.dev",
  buildId: "<value>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  completeUploadPostRequestUrl: "<value>",
  maxChunkSize: 5651.89,
  uploadParts: [
    {
      putRequestUrl: "<value>",
      partNumber: 5666.02,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentHash`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `buildTag`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Tag to associate an external version with a build. It is accessible via [`GetBuildInfo()`](https://hathora.dev/api#tag/BuildV2/operation/GetBuildInfo). | 0.1.14-14c793                                                                                                                                           |
| `imageSize`                                                                                                                                             | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The size (in bytes) of the Docker image built by Hathora.                                                                                               |                                                                                                                                                         |
| `status`                                                                                                                                                | [components.BuildStatus](../../models/components/buildstatus.md)                                                                                        | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `deletedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | When the build was deleted.                                                                                                                             |                                                                                                                                                         |
| `finishedAt`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | When [`RunBuild()`](https://hathora.dev/api#tag/BuildV2/operation/RunBuild) finished executing.                                                         |                                                                                                                                                         |
| `startedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | When [`RunBuild()`](https://hathora.dev/api#tag/BuildV2/operation/RunBuild) is called.                                                                  |                                                                                                                                                         |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | When [`CreateBuild()`](https://hathora.dev/api#tag/BuildV2/operation/CreateBuild) is called.                                                            |                                                                                                                                                         |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     | noreply@hathora.dev                                                                                                                                     |
| `buildId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | System generated id for a build. Can also be user defined when creating a build.                                                                        |                                                                                                                                                         |
| `orgId`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | System generated unique identifier for an organization. Not guaranteed to have a specific format.                                                       | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                                                                                                                |
| `completeUploadPostRequestUrl`                                                                                                                          | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `maxChunkSize`                                                                                                                                          | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `uploadParts`                                                                                                                                           | [components.BuildPart](../../models/components/buildpart.md)[]                                                                                          | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |