# BuildWithUploadUrl

A build represents a game server artifact and its associated metadata.

## Example Usage

```typescript
import { BuildWithUploadUrl } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildWithUploadUrl = {
  buildTag: "0.1.14-14c793",
  regionalContainerTags: [
    {
      containerTag: "<value>",
      region: "Singapore",
    },
  ],
  imageSize: 407183,
  status: "created",
  deletedAt: new Date("2025-02-03T09:09:59.216Z"),
  finishedAt: new Date("2024-05-12T01:59:12.211Z"),
  startedAt: new Date("2025-03-02T08:57:01.759Z"),
  createdAt: new Date("2025-08-07T13:19:14.525Z"),
  createdBy: "noreply@hathora.dev",
  buildId: 1,
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  uploadBodyParams: [
    {
      value: "<value>",
      key: "<key>",
    },
  ],
  uploadUrl: "https://tight-address.info",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `buildTag`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | 0.1.14-14c793                                                                                                              |
| ~~`regionalContainerTags`~~                                                                                                | [components.BuildWithUploadUrlRegionalContainerTags](../../models/components/buildwithuploadurlregionalcontainertags.md)[] | :heavy_check_mark:                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.    |                                                                                                                            |
| `imageSize`                                                                                                                | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The size (in bytes) of the Docker image built by Hathora.                                                                  |                                                                                                                            |
| `status`                                                                                                                   | [components.BuildStatus](../../models/components/buildstatus.md)                                                           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `deletedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | When the build was deleted.                                                                                                |                                                                                                                            |
| `finishedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | When [`RunBuild()`](https://hathora.dev/api#tag/BuildV2/operation/RunBuild) finished executing.                            |                                                                                                                            |
| `startedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | When [`RunBuild()`](https://hathora.dev/api#tag/BuildV2/operation/RunBuild) is called.                                     |                                                                                                                            |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | When [`CreateBuild()`](https://hathora.dev/api#tag/BuildV2/operation/CreateBuild) is called.                               |                                                                                                                            |
| `createdBy`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | noreply@hathora.dev                                                                                                        |
| `buildId`                                                                                                                  | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | System generated id for a build. Increments by 1.                                                                          | 1                                                                                                                          |
| `appId`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | System generated unique identifier for an application.                                                                     | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                   |
| `uploadBodyParams`                                                                                                         | [components.UploadBodyParams](../../models/components/uploadbodyparams.md)[]                                               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `uploadUrl`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |