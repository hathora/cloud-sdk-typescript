# BuildV1
(*buildV1*)

## Overview

Operations that allow you create and manage your [build](https://hathora.dev/docs/concepts/hathora-entities#build).

### Available Operations

* [createBuild](#createbuild) - Generate a new `buildId` for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. You need `buildId` to run a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [deleteBuild](#deletebuild) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `buildId`.
* [getBuildInfo](#getbuildinfo) - Get details for an existing [build](https://hathora.dev/docs/concepts/hathora-entities#build) using `appId` and `buildId`.
* [getBuilds](#getbuilds) - Returns an array of [build](https://hathora.dev/docs/concepts/hathora-entities#build) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [runBuild](#runbuild) - Provide a tarball that will generate a container image for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Pass in `buildId` generated from Create Build.

## createBuild

Generate a new `buildId` for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. You need `buildId` to run a [build](https://hathora.dev/docs/concepts/hathora-entities#build).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateBuildRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.buildV1.createBuild(appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateBuildResponse](../../models/operations/createbuildresponse.md)>**


## deleteBuild

Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `buildId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DeleteBuildRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const buildId: number = 1;

  const res = await sdk.buildV1.deleteBuild(appId, buildId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `buildId`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteBuildResponse](../../models/operations/deletebuildresponse.md)>**


## getBuildInfo

Get details for an existing [build](https://hathora.dev/docs/concepts/hathora-entities#build) using `appId` and `buildId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetBuildInfoRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const buildId: number = 1;

  const res = await sdk.buildV1.getBuildInfo(appId, buildId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `buildId`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetBuildInfoResponse](../../models/operations/getbuildinforesponse.md)>**


## getBuilds

Returns an array of [build](https://hathora.dev/docs/concepts/hathora-entities#build) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetBuildsRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.buildV1.getBuilds(appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetBuildsResponse](../../models/operations/getbuildsresponse.md)>**


## runBuild

Provide a tarball that will generate a container image for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Pass in `buildId` generated from Create Build.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { RunBuildRequest, RunBuildRequestBody, RunBuildRequestBodyFile } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const requestBody: RunBuildRequestBody = {
  file: {
    content: "Ukkktj?kA=" as bytes <<<>>>,
    file: "string",
  },
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const buildId: number = 1;

  const res = await sdk.buildV1.runBuild(requestBody, appId, buildId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestBody`                                                                    | [operations.RunBuildRequestBody](../../models/operations/runbuildrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `buildId`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.RunBuildResponse](../../models/operations/runbuildresponse.md)>**

