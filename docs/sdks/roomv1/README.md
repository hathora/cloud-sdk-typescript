# roomV1

### Available Operations

* [~~createRoomDeprecated~~](#createroomdeprecated) - :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](#destroyroomdeprecated) - :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](#getactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](#getconnectioninfodeprecated) - :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](#getinactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](#getroominfodeprecated) - :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](#suspendroomdeprecated) - :warning: **Deprecated**

## ~~createRoomDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateRoomDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.roomV1.createRoomDeprecated({
  auth0: "",
}, {
  region: Region.Tokyo,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: CreateRoomDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `security`                                                                                         | [operations.CreateRoomDeprecatedSecurity](../../models/operations/createroomdeprecatedsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |                                                                                                    |
| `createRoomRequest`                                                                                | [shared.CreateRoomRequest](../../models/shared/createroomrequest.md)                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `appId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                           |
| `roomId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 2swovpy1fnunu                                                                                      |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |                                                                                                    |


### Response

**Promise<[operations.CreateRoomDeprecatedResponse](../../models/operations/createroomdeprecatedresponse.md)>**


## ~~destroyRoomDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DestroyRoomDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV1.destroyRoomDeprecated({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: DestroyRoomDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.DestroyRoomDeprecatedSecurity](../../models/operations/destroyroomdeprecatedsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |                                                                                                      |
| `appId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.DestroyRoomDeprecatedResponse](../../models/operations/destroyroomdeprecatedresponse.md)>**


## ~~getActiveRoomsForProcessDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetActiveRoomsForProcessDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { RoomStatus } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.roomV1.getActiveRoomsForProcessDeprecated({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "cbfcddd2-0006-43ae-996c-995fff7bed2e").then((res: GetActiveRoomsForProcessDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                     | [operations.GetActiveRoomsForProcessDeprecatedSecurity](../../models/operations/getactiveroomsforprocessdeprecatedsecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |                                                                                                                                |
| `appId`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                       |
| `processId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                                           |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |                                                                                                                                |


### Response

**Promise<[operations.GetActiveRoomsForProcessDeprecatedResponse](../../models/operations/getactiveroomsforprocessdeprecatedresponse.md)>**


## ~~getConnectionInfoDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetConnectionInfoDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV1.getConnectionInfoDeprecated("app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: GetConnectionInfoDeprecatedResponse) => {
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

**Promise<[operations.GetConnectionInfoDeprecatedResponse](../../models/operations/getconnectioninfodeprecatedresponse.md)>**


## ~~getInactiveRoomsForProcessDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetInactiveRoomsForProcessDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { RoomStatus } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.roomV1.getInactiveRoomsForProcessDeprecated({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "cbfcddd2-0006-43ae-996c-995fff7bed2e").then((res: GetInactiveRoomsForProcessDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                         | [operations.GetInactiveRoomsForProcessDeprecatedSecurity](../../models/operations/getinactiveroomsforprocessdeprecatedsecurity.md) | :heavy_check_mark:                                                                                                                 | The security requirements to use for the request.                                                                                  |                                                                                                                                    |
| `appId`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                           |
| `processId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                                               |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |                                                                                                                                    |


### Response

**Promise<[operations.GetInactiveRoomsForProcessDeprecatedResponse](../../models/operations/getinactiveroomsforprocessdeprecatedresponse.md)>**


## ~~getRoomInfoDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetRoomInfoDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { RoomStatus } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.roomV1.getRoomInfoDeprecated({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: GetRoomInfoDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.GetRoomInfoDeprecatedSecurity](../../models/operations/getroominfodeprecatedsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |                                                                                                      |
| `appId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.GetRoomInfoDeprecatedResponse](../../models/operations/getroominfodeprecatedresponse.md)>**


## ~~suspendRoomDeprecated~~

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SuspendRoomDeprecatedResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV1.suspendRoomDeprecated({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: SuspendRoomDeprecatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.SuspendRoomDeprecatedSecurity](../../models/operations/suspendroomdeprecatedsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |                                                                                                      |
| `appId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                             |
| `roomId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2swovpy1fnunu                                                                                        |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.SuspendRoomDeprecatedResponse](../../models/operations/suspendroomdeprecatedresponse.md)>**

