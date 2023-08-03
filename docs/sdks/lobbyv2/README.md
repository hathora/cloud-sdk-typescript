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
import { CreateLobbyRequest, CreateLobbyResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { CreateLobbyRequest, LobbyInitialConfig, LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();
const createLobbyRequest: CreateLobbyRequest = {
  initialConfig: {},
  region: Region.SaoPaulo,
  visibility: LobbyVisibility.Private,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.lobbyV2.createLobby(createLobbyRequest, appId, roomId).then((res: CreateLobbyResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateLocalLobbyRequest, CreateLocalLobbyRequestBody, CreateLocalLobbyResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();
const requestBody: CreateLocalLobbyRequestBody = {
  initialConfig: {},
  region: Region.Chicago,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.lobbyV2.createLocalLobby(requestBody, appId, roomId).then((res: CreateLocalLobbyResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import {
  CreatePrivateLobbyRequest,
  CreatePrivateLobbyRequestBody,
  CreatePrivateLobbyResponse,
} from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();
const requestBody: CreatePrivateLobbyRequestBody = {
  initialConfig: {},
  region: Region.London,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.lobbyV2.createPrivateLobby(requestBody, appId, roomId).then((res: CreatePrivateLobbyResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import {
  CreatePublicLobbyRequest,
  CreatePublicLobbyRequestBody,
  CreatePublicLobbyResponse,
} from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();
const requestBody: CreatePublicLobbyRequestBody = {
  initialConfig: {},
  region: Region.Frankfurt,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.lobbyV2.createPublicLobby(requestBody, appId, roomId).then((res: CreatePublicLobbyResponse) => {
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
import { GetLobbyInfoRequest, GetLobbyInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.lobbyV2.getLobbyInfo(appId, roomId).then((res: GetLobbyInfoResponse) => {
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
import { ListActivePublicLobbiesRequest, ListActivePublicLobbiesResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const region: Region = Region.Tokyo;

sdk.lobbyV2.listActivePublicLobbies(appId, region).then((res: ListActivePublicLobbiesResponse) => {
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
import { SetLobbyStateRequest, SetLobbyStateResponse, SetLobbyStateSecurity } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { SetLobbyStateRequest, SetLobbyStateRequestState } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();
const setLobbyStateRequest: SetLobbyStateRequest = {
  state: {},
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";
const operationSecurity: SetLobbyStateSecurity = {
  auth0: "",
};

sdk.lobbyV2.setLobbyState(operationSecurity, setLobbyStateRequest, appId, roomId).then((res: SetLobbyStateResponse) => {
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

