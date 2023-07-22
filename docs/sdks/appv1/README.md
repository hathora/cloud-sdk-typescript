# appV1

## Overview

Operations that allow you manage your [applications](https://hathora.dev/docs/concepts/hathora-entities#application).

### Available Operations

* [createApp](#createapp) - Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [deleteApp](#deleteapp) - Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.
* [getAppInfo](#getappinfo) - Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [getApps](#getapps) - Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
* [updateApp](#updateapp) - Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

## createApp

Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateAppResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.createApp({
  appName: "minecraft",
  authConfiguration: {
    anonymous: {},
    google: {
      clientId: "provident",
    },
    nickname: {},
  },
}, {
  auth0: "",
}).then((res: CreateAppResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.AppConfig](../../models/shared/appconfig.md)                         | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.CreateAppSecurity](../../models/operations/createappsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateAppResponse](../../models/operations/createappresponse.md)>**


## deleteApp

Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DeleteAppResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.deleteApp({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: DeleteAppResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `security`                                                                   | [operations.DeleteAppSecurity](../../models/operations/deleteappsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |                                                                              |
| `appId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                                     |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.DeleteAppResponse](../../models/operations/deleteappresponse.md)>**


## getAppInfo

Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetAppInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.getAppInfo({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: GetAppInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.GetAppInfoSecurity](../../models/operations/getappinfosecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |                                                                                |
| `appId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[operations.GetAppInfoResponse](../../models/operations/getappinforesponse.md)>**


## getApps

Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetAppsResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.getApps({
  auth0: "",
}).then((res: GetAppsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `security`                                                               | [operations.GetAppsSecurity](../../models/operations/getappssecurity.md) | :heavy_check_mark:                                                       | The security requirements to use for the request.                        |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetAppsResponse](../../models/operations/getappsresponse.md)>**


## updateApp

Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { UpdateAppResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.updateApp({
  auth0: "",
}, {
  appName: "minecraft",
  authConfiguration: {
    anonymous: {},
    google: {
      clientId: "distinctio",
    },
    nickname: {},
  },
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: UpdateAppResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `security`                                                                   | [operations.UpdateAppSecurity](../../models/operations/updateappsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |                                                                              |
| `appConfig`                                                                  | [shared.AppConfig](../../models/shared/appconfig.md)                         | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `appId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                                     |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |                                                                              |


### Response

**Promise<[operations.UpdateAppResponse](../../models/operations/updateappresponse.md)>**

