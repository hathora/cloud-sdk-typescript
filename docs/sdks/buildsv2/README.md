# BuildsV2
(*buildsV2*)

## Overview

### Available Operations

* [~~getBuildsV2Deprecated~~](#getbuildsv2deprecated) - GetBuildsV2Deprecated :warning: **Deprecated**
* [~~getBuildInfoV2Deprecated~~](#getbuildinfov2deprecated) - GetBuildInfoV2Deprecated :warning: **Deprecated**
* [~~createBuildV2Deprecated~~](#createbuildv2deprecated) - CreateBuildV2Deprecated :warning: **Deprecated**
* [~~createBuildWithUploadUrlV2Deprecated~~](#createbuildwithuploadurlv2deprecated) - CreateBuildWithUploadUrlV2Deprecated :warning: **Deprecated**
* [~~createWithMultipartUploadsV2Deprecated~~](#createwithmultipartuploadsv2deprecated) - CreateWithMultipartUploadsV2Deprecated :warning: **Deprecated**
* [~~deleteBuildV2Deprecated~~](#deletebuildv2deprecated) - DeleteBuildV2Deprecated :warning: **Deprecated**
* [~~runBuildV2Deprecated~~](#runbuildv2deprecated) - RunBuildV2Deprecated :warning: **Deprecated**

## ~~getBuildsV2Deprecated~~

Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV2.getBuildsV2Deprecated("app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2GetBuildsV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2GetBuildsV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2GetBuildsV2Deprecated(hathoraCloud, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Build[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404, 429    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## ~~getBuildInfoV2Deprecated~~

Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV2.getBuildInfoV2Deprecated(1, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2GetBuildInfoV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2GetBuildInfoV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2GetBuildInfoV2Deprecated(hathoraCloud, 1, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                                                      | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Build](../../models/components/build.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404, 429    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## ~~createBuildV2Deprecated~~

Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV2.createBuildV2Deprecated({
    buildTag: "0.1.14-14c793",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2CreateBuildV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2CreateBuildV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2CreateBuildV2Deprecated(hathoraCloud, {
    buildTag: "0.1.14-14c793",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createBuildParams`                                                                                                                                                            | [components.CreateBuildParams](../../models/components/createbuildparams.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Build](../../models/components/build.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 422, 429, 500 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## ~~createBuildWithUploadUrlV2Deprecated~~

Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with `uploadUrl` that can be used to upload the build to before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV2.createBuildWithUploadUrlV2Deprecated({
    buildTag: "0.1.14-14c793",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2CreateBuildWithUploadUrlV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2CreateBuildWithUploadUrlV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2CreateBuildWithUploadUrlV2Deprecated(hathoraCloud, {
    buildTag: "0.1.14-14c793",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createBuildParams`                                                                                                                                                            | [components.CreateBuildParams](../../models/components/createbuildparams.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.BuildWithUploadUrl](../../models/components/buildwithuploadurl.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 422, 429, 500 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## ~~createWithMultipartUploadsV2Deprecated~~

Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `multipartUploadUrls` that can be used to upload larger builds in parts before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV2.createWithMultipartUploadsV2Deprecated({
    buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 3146.66,
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2CreateWithMultipartUploadsV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2CreateWithMultipartUploadsV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2CreateWithMultipartUploadsV2Deprecated(hathoraCloud, {
    buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 3146.66,
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createMultipartBuildParams`                                                                                                                                                   | [components.CreateMultipartBuildParams](../../models/components/createmultipartbuildparams.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.BuildWithMultipartUrls](../../models/components/buildwithmultiparturls.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ApiError              | 400, 401, 404, 422, 429, 500 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## ~~deleteBuildV2Deprecated~~

Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  await hathoraCloud.buildsV2.deleteBuildV2Deprecated(1, "app-af469a92-5b45-4565-b3c4-b79878de67d2");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2DeleteBuildV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2DeleteBuildV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2DeleteBuildV2Deprecated(hathoraCloud, 1, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                                                      | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 422, 429, 500 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## ~~runBuildV2Deprecated~~

Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV2.runBuildV2Deprecated({}, 1, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV2RunBuildV2Deprecated } from "@hathora/cloud-sdk-typescript/funcs/buildsV2RunBuildV2Deprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV2RunBuildV2Deprecated(hathoraCloud, {}, 1, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                                                      | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.RunBuildV2DeprecatedRequestBody](../../models/operations/runbuildv2deprecatedrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 400, 401, 404, 429, 500 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |