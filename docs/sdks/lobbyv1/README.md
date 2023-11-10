# LobbyV1
(*lobbyV1*)

## Overview

Deprecated. Use [LobbyV3](https://hathora.dev/api#tag/LobbyV3).

### Available Operations

* [~~createPrivateLobbyDeprecated~~](#createprivatelobbydeprecated) - :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](#createpubliclobbydeprecated) - :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV1~~](#listactivepubliclobbiesdeprecatedv1) - :warning: **Deprecated**

## ~~createPrivateLobbyDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreatePrivateLobbyDeprecatedRequest, CreatePrivateLobbyDeprecatedSecurity } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const local: boolean = false;
const region: Region = Region.London;
const operationSecurity: CreatePrivateLobbyDeprecatedSecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV1.createPrivateLobbyDeprecated(operationSecurity, appId, local, region);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                             | [operations.CreatePrivateLobbyDeprecatedSecurity](../../sdk/models/operations/createprivatelobbydeprecatedsecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |                                                                                                                        |
| `appId`                                                                                                                | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                               |
| `local`                                                                                                                | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `region`                                                                                                               | [shared.Region](../../../sdk/models/shared/region.md)                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |                                                                                                                        |


### Response

**Promise<[operations.CreatePrivateLobbyDeprecatedResponse](../../sdk/models/operations/createprivatelobbydeprecatedresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~createPublicLobbyDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreatePublicLobbyDeprecatedRequest, CreatePublicLobbyDeprecatedSecurity } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const local: boolean = false;
const region: Region = Region.London;
const operationSecurity: CreatePublicLobbyDeprecatedSecurity = {
  playerAuth: "",
};

  const res = await sdk.lobbyV1.createPublicLobbyDeprecated(operationSecurity, appId, local, region);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                           | [operations.CreatePublicLobbyDeprecatedSecurity](../../sdk/models/operations/createpubliclobbydeprecatedsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |                                                                                                                      |
| `appId`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                             |
| `local`                                                                                                              | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `region`                                                                                                             | [shared.Region](../../../sdk/models/shared/region.md)                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |                                                                                                                      |


### Response

**Promise<[operations.CreatePublicLobbyDeprecatedResponse](../../sdk/models/operations/createpubliclobbydeprecatedresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~listActivePublicLobbiesDeprecatedV1~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { ListActivePublicLobbiesDeprecatedV1Request } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const local: boolean = false;
const region: Region = Region.Tokyo;

  const res = await sdk.lobbyV1.listActivePublicLobbiesDeprecatedV1(appId, local, region);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `local`                                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `region`                                                     | [shared.Region](../../../sdk/models/shared/region.md)        | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListActivePublicLobbiesDeprecatedV1Response](../../sdk/models/operations/listactivepubliclobbiesdeprecatedv1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
