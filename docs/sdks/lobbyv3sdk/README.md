# LobbyV3SDK
(*lobbyV3*)

## Overview

Operations to create and manage lobbies using our [Lobby Service](https://hathora.dev/docs/lobbies-and-matchmaking/lobby-service).

### Available Operations

* [createLobby](#createlobby) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
* [getLobbyInfoByRoomId](#getlobbyinfobyroomid) - Get details for a lobby.
* [getLobbyInfoByShortCode](#getlobbyinfobyshortcode) - Get details for a lobby. If 2 or more lobbies have the same `shortCode`, then the most recently created lobby will be returned.
* [listActivePublicLobbies](#listactivepubliclobbies) - Get all active lobbies for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.

## createLobby

Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.

### Example Usage

```typescript
import { CreateLobbySecurity, HathoraCloud, LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const operationSecurity: CreateLobbySecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV3.createLobby({
    createLobbyV3Params: {
      region: Region.Seattle,
      roomConfig: "{\"name\":\"my-room\"}",
      visibility: LobbyVisibility.Private,
    },
    roomId: "2swovpy1fnunu",
    shortCode: "LFG4",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `request`                                                       | [models.CreateLobbyRequest](../../models/createlobbyrequest.md) | :heavy_check_mark:                                              | The request object to use for the request.                      |
| `security`                                                      | [models.CreateLobbySecurity](../../createlobbysecurity.md)      | :heavy_check_mark:                                              | The security requirements to use for the request.               |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |


### Response

**Promise<[models.CreateLobbyResponse](../../models/createlobbyresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ApiErrorError    | 400,401,404,422,429,500 | application/json        |
| models.SDKError         | 400-600                 | */*                     |

## getLobbyInfoByRoomId

Get details for a lobby.

### Example Usage

```typescript
import { GetLobbyInfoByRoomIdRequest, HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const roomId: string = "2swovpy1fnunu";
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.lobbyV3.getLobbyInfoByRoomId(roomId, appId);

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

**Promise<[models.GetLobbyInfoByRoomIdResponse](../../models/getlobbyinfobyroomidresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ApiErrorError | 404                  | application/json     |
| models.SDKError      | 400-600              | */*                  |

## getLobbyInfoByShortCode

Get details for a lobby. If 2 or more lobbies have the same `shortCode`, then the most recently created lobby will be returned.

### Example Usage

```typescript
import { GetLobbyInfoByShortCodeRequest, HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const shortCode: string = "LFG4";
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.lobbyV3.getLobbyInfoByShortCode(shortCode, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `shortCode`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | LFG4                                                         |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[models.GetLobbyInfoByShortCodeResponse](../../models/getlobbyinfobyshortcoderesponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ApiErrorError | 404                  | application/json     |
| models.SDKError      | 400-600              | */*                  |

## listActivePublicLobbies

Get all active lobbies for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.

### Example Usage

```typescript
import { HathoraCloud, ListActivePublicLobbiesRequest, Region } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const region: Region = Region.Seattle;

  const res = await sdk.lobbyV3.listActivePublicLobbies(appId, region);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `appId`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                           |
| `region`                                                           | [models.Region](../models/region.md)                               | :heavy_minus_sign:                                                 | If omitted, active public lobbies in all regions will be returned. |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[models.ListActivePublicLobbiesResponse](../../models/listactivepubliclobbiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |
