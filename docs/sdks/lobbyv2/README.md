# lobbyV2

## Overview

Operations to create and manage [lobbies](https://hathora.dev/docs/concepts/hathora-entities#lobby).

### Available Operations

* [createLobby](#createlobby) - Create a new [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [~~createLocalLobby~~](#createlocallobby) - :warning: **Deprecated**
* [~~createPrivateLobby~~](#createprivatelobby) - :warning: **Deprecated**
* [~~createPublicLobby~~](#createpubliclobby) - :warning: **Deprecated**
* [getLobbyInfo](#getlobbyinfo) - Get details for an existing [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) using `appId` and `roomId`.
* [listActivePublicLobbies](#listactivepubliclobbies) - Get all active [lobbies](https://hathora.dev/docs/concepts/hathora-entities#lobby) for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a `region`.
* [setLobbyState](#setlobbystate) - Set the state of a [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) using `appId` and `roomId`. State is intended to be set by the server and must be smaller than 1MB.

## createLobby

Create a new [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateLobbyResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.createLobby({
  initialConfig: {},
  region: Region.SaoPaulo,
  visibility: LobbyVisibility.Private,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: CreateLobbyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `createLobbyRequest`                                                   | [shared.CreateLobbyRequest](../../models/shared/createlobbyrequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `appId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                               |
| `roomId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 2swovpy1fnunu                                                          |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.CreateLobbyResponse](../../models/operations/createlobbyresponse.md)>**


## ~~createLocalLobby~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateLocalLobbyResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.createLocalLobby({
  initialConfig: {},
  region: Region.Chicago,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: CreateLocalLobbyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                    | [operations.CreateLocalLobbyRequestBody](../../models/operations/createlocallobbyrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `appId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                         |
| `roomId`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 2swovpy1fnunu                                                                                    |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |                                                                                                  |


### Response

**Promise<[operations.CreateLocalLobbyResponse](../../models/operations/createlocallobbyresponse.md)>**


## ~~createPrivateLobby~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreatePrivateLobbyResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.createPrivateLobby({
  initialConfig: {},
  region: Region.London,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: CreatePrivateLobbyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                        | [operations.CreatePrivateLobbyRequestBody](../../models/operations/createprivatelobbyrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `appId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.CreatePrivateLobbyResponse](../../models/operations/createprivatelobbyresponse.md)>**


## ~~createPublicLobby~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreatePublicLobbyResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.createPublicLobby({
  initialConfig: {},
  region: Region.Frankfurt,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: CreatePublicLobbyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                      | [operations.CreatePublicLobbyRequestBody](../../models/operations/createpubliclobbyrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `appId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                           |
| `roomId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 2swovpy1fnunu                                                                                      |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |                                                                                                    |


### Response

**Promise<[operations.CreatePublicLobbyResponse](../../models/operations/createpubliclobbyresponse.md)>**


## getLobbyInfo

Get details for an existing [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) using `appId` and `roomId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetLobbyInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.getLobbyInfo("app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: GetLobbyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `roomId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | 2swovpy1fnunu                                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLobbyInfoResponse](../../models/operations/getlobbyinforesponse.md)>**


## listActivePublicLobbies

Get all active [lobbies](https://hathora.dev/docs/concepts/hathora-entities#lobby) for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a `region`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { ListActivePublicLobbiesResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.listActivePublicLobbies("app-af469a92-5b45-4565-b3c4-b79878de67d2", Region.Tokyo).then((res: ListActivePublicLobbiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                               | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appId`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                |
| `region`                                                                                | [shared.Region](../../models/shared/region.md)                                          | :heavy_minus_sign:                                                                      | Region to filter by. If omitted, active public lobbies in all regions will be returned. |                                                                                         |
| `config`                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                            | :heavy_minus_sign:                                                                      | Available config options for making requests.                                           |                                                                                         |


### Response

**Promise<[operations.ListActivePublicLobbiesResponse](../../models/operations/listactivepubliclobbiesresponse.md)>**


## setLobbyState

Set the state of a [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) using `appId` and `roomId`. State is intended to be set by the server and must be smaller than 1MB.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SetLobbyStateResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV2.setLobbyState({
  auth0: "",
}, {
  state: {},
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: SetLobbyStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `security`                                                                           | [operations.SetLobbyStateSecurity](../../models/operations/setlobbystatesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |                                                                                      |
| `setLobbyStateRequest`                                                               | [shared.SetLobbyStateRequest](../../models/shared/setlobbystaterequest.md)           | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `appId`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                             |
| `roomId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | 2swovpy1fnunu                                                                        |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |                                                                                      |


### Response

**Promise<[operations.SetLobbyStateResponse](../../models/operations/setlobbystateresponse.md)>**

