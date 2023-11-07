# LobbyV2
(*.lobbyV2*)

## Overview

Deprecated. Use [LobbyV3](https://hathora.dev/api#tag/LobbyV3).

### Available Operations

* [createLobbyDeprecated](#createlobbydeprecated) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
* [~~createLocalLobby~~](#createlocallobby) - :warning: **Deprecated**
* [~~createPrivateLobby~~](#createprivatelobby) - :warning: **Deprecated**
* [~~createPublicLobby~~](#createpubliclobby) - :warning: **Deprecated**
* [getLobbyInfo](#getlobbyinfo) - Get details for a lobby.
* [listActivePublicLobbiesDeprecatedV2](#listactivepubliclobbiesdeprecatedv2) - Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.
* [setLobbyState](#setlobbystate) - Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).

## createLobbyDeprecated

Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateLobbyDeprecatedRequest, CreateLobbyDeprecatedSecurity } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { CreateLobbyParams, LobbyInitialConfig, LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.CreateLobbyDeprecatedSecurity](../../models/operations/createlobbydeprecatedsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |                                                                                                      |
| `createLobbyParams`                                                                                  | [shared.CreateLobbyParams](../../models/shared/createlobbyparams.md)                                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `appId`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.CreateLobbyDeprecatedResponse](../../models/operations/createlobbydeprecatedresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~createLocalLobby~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateLocalLobbyRequest, CreateLocalLobbyRequestBody, CreateLocalLobbySecurity } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `security`                                                                                       | [operations.CreateLocalLobbySecurity](../../models/operations/createlocallobbysecurity.md)       | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |                                                                                                  |
| `requestBody`                                                                                    | [operations.CreateLocalLobbyRequestBody](../../models/operations/createlocallobbyrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `appId`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                         |
| `roomId`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 2swovpy1fnunu                                                                                    |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |                                                                                                  |


### Response

**Promise<[operations.CreateLocalLobbyResponse](../../models/operations/createlocallobbyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~createPrivateLobby~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import {
  CreatePrivateLobbyRequest,
  CreatePrivateLobbyRequestBody,
  CreatePrivateLobbySecurity,
} from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.CreatePrivateLobbySecurity](../../models/operations/createprivatelobbysecurity.md)       | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |                                                                                                      |
| `requestBody`                                                                                        | [operations.CreatePrivateLobbyRequestBody](../../models/operations/createprivatelobbyrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `appId`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.CreatePrivateLobbyResponse](../../models/operations/createprivatelobbyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~createPublicLobby~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import {
  CreatePublicLobbyRequest,
  CreatePublicLobbyRequestBody,
  CreatePublicLobbySecurity,
} from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `security`                                                                                         | [operations.CreatePublicLobbySecurity](../../models/operations/createpubliclobbysecurity.md)       | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |                                                                                                    |
| `requestBody`                                                                                      | [operations.CreatePublicLobbyRequestBody](../../models/operations/createpubliclobbyrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `appId`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                           |
| `roomId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 2swovpy1fnunu                                                                                      |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |                                                                                                    |


### Response

**Promise<[operations.CreatePublicLobbyResponse](../../models/operations/createpubliclobbyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getLobbyInfo

Get details for a lobby.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetLobbyInfoRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

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

**Promise<[operations.GetLobbyInfoResponse](../../models/operations/getlobbyinforesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listActivePublicLobbiesDeprecatedV2

Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { ListActivePublicLobbiesDeprecatedV2Request } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

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
| `region`                                                                                | [shared.Region](../../models/shared/region.md)                                          | :heavy_minus_sign:                                                                      | Region to filter by. If omitted, active public lobbies in all regions will be returned. |                                                                                         |
| `config`                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                            | :heavy_minus_sign:                                                                      | Available config options for making requests.                                           |                                                                                         |


### Response

**Promise<[operations.ListActivePublicLobbiesDeprecatedV2Response](../../models/operations/listactivepubliclobbiesdeprecatedv2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## setLobbyState

Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SetLobbyStateRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { SetLobbyStateParams, SetLobbyStateParamsState } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `setLobbyStateParams`                                                    | [shared.SetLobbyStateParams](../../models/shared/setlobbystateparams.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `roomId`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | 2swovpy1fnunu                                                            |
| `appId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | app-af469a92-5b45-4565-b3c4-b79878de67d2                                 |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.SetLobbyStateResponse](../../models/operations/setlobbystateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
