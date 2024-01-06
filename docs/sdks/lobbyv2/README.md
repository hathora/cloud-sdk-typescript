# LobbyV2
(*lobbyV2*)

## Overview

Deprecated. Use [LobbyV3](https://hathora.dev/api#tag/LobbyV3).

### Available Operations

* [~~createLobbyDeprecated~~](#createlobbydeprecated) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players. :warning: **Deprecated**
* [~~createLocalLobby~~](#createlocallobby) - :warning: **Deprecated**
* [~~createPrivateLobby~~](#createprivatelobby) - :warning: **Deprecated**
* [~~createPublicLobby~~](#createpubliclobby) - :warning: **Deprecated**
* [~~getLobbyInfo~~](#getlobbyinfo) - Get details for a lobby. :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV2~~](#listactivepubliclobbiesdeprecatedv2) - Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client. :warning: **Deprecated**
* [~~setLobbyState~~](#setlobbystate) - Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores). :warning: **Deprecated**

## ~~createLobbyDeprecated~~

Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import {
  CreateLobbyDeprecatedRequest,
  CreateLobbyDeprecatedSecurity,
  CreateLobbyParams,
  HathoraCloud,
  LobbyInitialConfig,
  LobbyVisibility,
  Region,
} from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const createLobbyParams: CreateLobbyParams = {
  initialConfig: {},
  region: Region.Tokyo,
  visibility: LobbyVisibility.Private,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";
const operationSecurity: CreateLobbyDeprecatedSecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV2.createLobbyDeprecated(operationSecurity, createLobbyParams, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [models.CreateLobbyDeprecatedSecurity](../../createlobbydeprecatedsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |                                                                                |
| `createLobbyParams`                                                            | [models.CreateLobbyParams](../models/createlobbyparams.md)                     | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `appId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `roomId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2swovpy1fnunu                                                                  |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[models.CreateLobbyDeprecatedResponse](../../models/createlobbydeprecatedresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ApiErrorError    | 400,401,404,422,429,500 | application/json        |
| models.SDKError         | 400-600                 | */*                     |

## ~~createLocalLobby~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import {
  CreateLocalLobbyRequest,
  CreateLocalLobbyRequestBody,
  CreateLocalLobbySecurity,
  HathoraCloud,
  LobbyInitialConfig,
  Region,
} from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const requestBody: CreateLocalLobbyRequestBody = {
  initialConfig: {},
  region: Region.Sydney,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";
const operationSecurity: CreateLocalLobbySecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV2.createLocalLobby(operationSecurity, requestBody, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [models.CreateLocalLobbySecurity](../../createlocallobbysecurity.md)           | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |                                                                                |
| `requestBody`                                                                  | [models.CreateLocalLobbyRequestBody](../models/createlocallobbyrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `appId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `roomId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2swovpy1fnunu                                                                  |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[models.CreateLocalLobbyResponse](../../models/createlocallobbyresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ApiErrorError    | 400,401,404,422,429,500 | application/json        |
| models.SDKError         | 400-600                 | */*                     |

## ~~createPrivateLobby~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import {
  CreatePrivateLobbyRequest,
  CreatePrivateLobbyRequestBody,
  CreatePrivateLobbySecurity,
  HathoraCloud,
  LobbyInitialConfig,
  Region,
} from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const requestBody: CreatePrivateLobbyRequestBody = {
  initialConfig: {},
  region: Region.Chicago,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";
const operationSecurity: CreatePrivateLobbySecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV2.createPrivateLobby(operationSecurity, requestBody, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [models.CreatePrivateLobbySecurity](../../createprivatelobbysecurity.md)           | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |                                                                                    |
| `requestBody`                                                                      | [models.CreatePrivateLobbyRequestBody](../models/createprivatelobbyrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `appId`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                                           |
| `roomId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | 2swovpy1fnunu                                                                      |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |                                                                                    |


### Response

**Promise<[models.CreatePrivateLobbyResponse](../../models/createprivatelobbyresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ApiErrorError    | 400,401,404,422,429,500 | application/json        |
| models.SDKError         | 400-600                 | */*                     |

## ~~createPublicLobby~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import {
  CreatePublicLobbyRequest,
  CreatePublicLobbyRequestBody,
  CreatePublicLobbySecurity,
  HathoraCloud,
  LobbyInitialConfig,
  Region,
} from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const requestBody: CreatePublicLobbyRequestBody = {
  initialConfig: {},
  region: Region.Sydney,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";
const operationSecurity: CreatePublicLobbySecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV2.createPublicLobby(operationSecurity, requestBody, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [models.CreatePublicLobbySecurity](../../createpubliclobbysecurity.md)           | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `requestBody`                                                                    | [models.CreatePublicLobbyRequestBody](../models/createpubliclobbyrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `roomId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 2swovpy1fnunu                                                                    |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[models.CreatePublicLobbyResponse](../../models/createpubliclobbyresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ApiErrorError    | 400,401,404,422,429,500 | application/json        |
| models.SDKError         | 400-600                 | */*                     |

## ~~getLobbyInfo~~

Get details for a lobby.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { GetLobbyInfoRequest, HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const roomId: string = "2swovpy1fnunu";
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.lobbyV2.getLobbyInfo(roomId, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `roomId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | 2swovpy1fnunu                                                |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[models.GetLobbyInfoResponse](../../models/getlobbyinforesponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ApiErrorError | 404                  | application/json     |
| models.SDKError      | 400-600              | */*                  |

## ~~listActivePublicLobbiesDeprecatedV2~~

Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud, ListActivePublicLobbiesDeprecatedV2Request, Region } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const region: Region = Region.Frankfurt;

  const res = await sdk.lobbyV2.listActivePublicLobbiesDeprecatedV2(appId, region);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                               | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appId`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                |
| `region`                                                                                | [models.Region](../models/region.md)                                                    | :heavy_minus_sign:                                                                      | Region to filter by. If omitted, active public lobbies in all regions will be returned. |                                                                                         |
| `config`                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                            | :heavy_minus_sign:                                                                      | Available config options for making requests.                                           |                                                                                         |


### Response

**Promise<[models.ListActivePublicLobbiesDeprecatedV2Response](../../models/listactivepubliclobbiesdeprecatedv2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## ~~setLobbyState~~

Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import {
  HathoraCloud,
  SetLobbyStateParams,
  SetLobbyStateParamsState,
  SetLobbyStateRequest,
} from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const setLobbyStateParams: SetLobbyStateParams = {
  state: {},
};
const roomId: string = "2swovpy1fnunu";
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.lobbyV2.setLobbyState(setLobbyStateParams, roomId, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `setLobbyStateParams`                                          | [models.SetLobbyStateParams](../models/setlobbystateparams.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `roomId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 2swovpy1fnunu                                                  |
| `appId`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                       |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[models.SetLobbyStateResponse](../../models/setlobbystateresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ApiErrorError | 404,422              | application/json     |
| models.SDKError      | 400-600              | */*                  |
