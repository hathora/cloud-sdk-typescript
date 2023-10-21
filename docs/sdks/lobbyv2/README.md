# LobbyV2
(*lobbyV2*)

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
import { CreateLobbyRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { CreateLobbyRequest, LobbyInitialConfig, LobbyVisibility, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const createLobbyRequest: CreateLobbyRequest = {
  initialConfig: {},
  region: Region.Seattle,
  visibility: LobbyVisibility.Private,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.lobbyV2.createLobby(createLobbyRequest, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { CreateLocalLobbyRequest, CreateLocalLobbyRequestBody } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const requestBody: CreateLocalLobbyRequestBody = {
  initialConfig: {},
  region: Region.Sydney,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.lobbyV2.createLocalLobby(requestBody, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { CreatePrivateLobbyRequest, CreatePrivateLobbyRequestBody } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const requestBody: CreatePrivateLobbyRequestBody = {
  initialConfig: {},
  region: Region.Chicago,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.lobbyV2.createPrivateLobby(requestBody, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { CreatePublicLobbyRequest, CreatePublicLobbyRequestBody } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LobbyInitialConfig, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const requestBody: CreatePublicLobbyRequestBody = {
  initialConfig: {},
  region: Region.Sydney,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.lobbyV2.createPublicLobby(requestBody, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetLobbyInfoRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.lobbyV2.getLobbyInfo(appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { ListActivePublicLobbiesRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const region: Region = Region.Seattle;

  const res = await sdk.lobbyV2.listActivePublicLobbies(appId, region);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { SetLobbyStateRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { SetLobbyStateRequest, SetLobbyStateRequestState } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const setLobbyStateRequest: SetLobbyStateRequest = {
  state: {},
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.lobbyV2.setLobbyState(setLobbyStateRequest, appId, roomId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `setLobbyStateRequest`                                                     | [shared.SetLobbyStateRequest](../../models/shared/setlobbystaterequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `appId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `roomId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 2swovpy1fnunu                                                              |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.SetLobbyStateResponse](../../models/operations/setlobbystateresponse.md)>**

