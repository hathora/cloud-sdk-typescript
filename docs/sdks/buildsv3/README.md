# BuildsV3
(*buildsV3*)

## Overview

Operations that allow you create and manage your [builds](https://hathora.dev/docs/concepts/hathora-entities#build).

### Available Operations

* [getBuilds](#getbuilds) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [createBuild](#createbuild) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `multipartUploadUrls` that can be used to upload larger builds in parts before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
* [getBuild](#getbuild) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [deleteBuild](#deletebuild) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
Be careful which builds you delete. This endpoint does not prevent you from deleting actively used builds.
Deleting a build that is actively build used by an app's deployment will cause failures when creating rooms.
* [runBuild](#runbuild) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).

## getBuilds

Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV3.getBuilds("org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV3GetBuilds } from "@hathora/cloud-sdk-typescript/funcs/buildsV3GetBuilds.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV3GetBuilds(hathoraCloud, "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.BuildsV3Page](../../models/components/buildsv3page.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## createBuild

Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `multipartUploadUrls` that can be used to upload larger builds in parts before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV3.createBuild({
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 5387.85,
  }, "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV3CreateBuild } from "@hathora/cloud-sdk-typescript/funcs/buildsV3CreateBuild.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV3CreateBuild(hathoraCloud, {
    buildTag: "0.1.14-14c793",
    buildSizeInBytes: 5387.85,
  }, "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createMultipartBuildParams`                                                                                                                                                   | [components.CreateMultipartBuildParams](../../models/components/createmultipartbuildparams.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.CreatedBuildV3WithMultipartUrls](../../models/components/createdbuildv3withmultiparturls.md)\>**

### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 400,401,404,422,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |


## getBuild

Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV3.getBuild("<value>", "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV3GetBuild } from "@hathora/cloud-sdk-typescript/funcs/buildsV3GetBuild.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV3GetBuild(hathoraCloud, "<value>", "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.BuildV3](../../models/components/buildv3.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## deleteBuild

Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
Be careful which builds you delete. This endpoint does not prevent you from deleting actively used builds.
Deleting a build that is actively build used by an app's deployment will cause failures when creating rooms.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV3.deleteBuild("<value>", "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV3DeleteBuild } from "@hathora/cloud-sdk-typescript/funcs/buildsV3DeleteBuild.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV3DeleteBuild(hathoraCloud, "<value>", "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DeletedBuild](../../models/components/deletedbuild.md)\>**

### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ApiError     | 401,404,422,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |


## runBuild

Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV3.runBuild("<value>", "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { buildsV3RunBuild } from "@hathora/cloud-sdk-typescript/funcs/buildsV3RunBuild.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await buildsV3RunBuild(hathoraCloud, "<value>", "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buildId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ApiError     | 400,401,404,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |