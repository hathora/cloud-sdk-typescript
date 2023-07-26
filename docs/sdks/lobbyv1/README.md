# lobbyV1

### Available Operations

* [~~createPrivateLobbyDeprecated~~](#createprivatelobbydeprecated) - :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](#createpubliclobbydeprecated) - :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecated~~](#listactivepubliclobbiesdeprecated) - :warning: **Deprecated**

## ~~createPrivateLobbyDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreatePrivateLobbyDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV1.createPrivateLobbyDeprecated("app-af469a92-5b45-4565-b3c4-b79878de67d2", false, Region.Chicago).then((res: CreatePrivateLobbyDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `local`                                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `region`                                                     | [shared.Region](../../models/shared/region.md)               | :heavy_minus_sign:                                           | Available regions to request a game server.                  |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreatePrivateLobbyDeprecatedResponse](../../models/operations/createprivatelobbydeprecatedresponse.md)>**


## ~~createPublicLobbyDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreatePublicLobbyDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV1.createPublicLobbyDeprecated("app-af469a92-5b45-4565-b3c4-b79878de67d2", false, Region.Sydney).then((res: CreatePublicLobbyDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `local`                                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `region`                                                     | [shared.Region](../../models/shared/region.md)               | :heavy_minus_sign:                                           | Available regions to request a game server.                  |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreatePublicLobbyDeprecatedResponse](../../models/operations/createpubliclobbydeprecatedresponse.md)>**


## ~~listActivePublicLobbiesDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { ListActivePublicLobbiesDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.lobbyV1.listActivePublicLobbiesDeprecated("app-af469a92-5b45-4565-b3c4-b79878de67d2", false, Region.Seattle).then((res: ListActivePublicLobbiesDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `local`                                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `region`                                                     | [shared.Region](../../models/shared/region.md)               | :heavy_minus_sign:                                           | Available regions to request a game server.                  |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListActivePublicLobbiesDeprecatedResponse](../../models/operations/listactivepubliclobbiesdeprecatedresponse.md)>**

