# buildV1

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
import { CreateBuildResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { BuildStatus, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.buildV1.createBuild({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: CreateBuildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.CreateBuildSecurity](../../models/operations/createbuildsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.CreateBuildResponse](../../models/operations/createbuildresponse.md)>**


## deleteBuild

Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `buildId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DeleteBuildResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.buildV1.deleteBuild({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", 1).then((res: DeleteBuildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.DeleteBuildSecurity](../../models/operations/deletebuildsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `buildId`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.DeleteBuildResponse](../../models/operations/deletebuildresponse.md)>**


## getBuildInfo

Get details for an existing [build](https://hathora.dev/docs/concepts/hathora-entities#build) using `appId` and `buildId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetBuildInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { BuildStatus, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.buildV1.getBuildInfo({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", 1).then((res: GetBuildInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [operations.GetBuildInfoSecurity](../../models/operations/getbuildinfosecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |                                                                                    |
| `appId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                                           |
| `buildId`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | 1                                                                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |                                                                                    |


### Response

**Promise<[operations.GetBuildInfoResponse](../../models/operations/getbuildinforesponse.md)>**


## getBuilds

Returns an array of [build](https://hathora.dev/docs/concepts/hathora-entities#build) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetBuildsResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { BuildStatus, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.buildV1.getBuilds({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: GetBuildsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `security`                                                                   | [operations.GetBuildsSecurity](../../models/operations/getbuildssecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |                                                                              |
| `appId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                                     |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.GetBuildsResponse](../../models/operations/getbuildsresponse.md)>**


## runBuild

Provide a tarball that will generate a container image for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Pass in `buildId` generated from Create Build.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { RunBuildResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.buildV1.runBuild({
  auth0: "",
}, {
  file: {
    content: "corrupti".encode(),
    file: "illum",
  },
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", 1).then((res: RunBuildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.RunBuildSecurity](../../models/operations/runbuildsecurity.md)       | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `requestBody`                                                                    | [operations.RunBuildRequestBody](../../models/operations/runbuildrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `buildId`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 1                                                                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.RunBuildResponse](../../models/operations/runbuildresponse.md)>**

