# RoomV1
(*.roomV1*)

### Available Operations

* [~~createRoomDeprecated~~](#createroomdeprecated) - :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](#destroyroomdeprecated) - :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](#getactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](#getconnectioninfodeprecated) - :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](#getinactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](#getroominfodeprecated) - :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](#suspendroomdeprecated) - :warning: **Deprecated**

## ~~createRoomDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateRoomDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { CreateRoomRequest, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const createRoomRequest: CreateRoomRequest = {
  region: Region.Chicago,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.roomV1.createRoomDeprecated(createRoomRequest, appId, roomId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `createRoomRequest`                                                  | [shared.CreateRoomRequest](../../models/shared/createroomrequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `appId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                             |
| `roomId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 2swovpy1fnunu                                                        |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.CreateRoomDeprecatedResponse](../../models/operations/createroomdeprecatedresponse.md)>**


## ~~destroyRoomDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DestroyRoomDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.roomV1.destroyRoomDeprecated(appId, roomId);


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

**Promise<[operations.DestroyRoomDeprecatedResponse](../../models/operations/destroyroomdeprecatedresponse.md)>**


## ~~getActiveRoomsForProcessDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetActiveRoomsForProcessDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const processId: string = "cbfcddd2-0006-43ae-996c-995fff7bed2e";

  const res = await sdk.roomV1.getActiveRoomsForProcessDeprecated(appId, processId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `processId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | cbfcddd2-0006-43ae-996c-995fff7bed2e                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetActiveRoomsForProcessDeprecatedResponse](../../models/operations/getactiveroomsforprocessdeprecatedresponse.md)>**


## ~~getConnectionInfoDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetConnectionInfoDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.roomV1.getConnectionInfoDeprecated(appId, roomId);


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

**Promise<[operations.GetConnectionInfoDeprecatedResponse](../../models/operations/getconnectioninfodeprecatedresponse.md)>**


## ~~getInactiveRoomsForProcessDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetInactiveRoomsForProcessDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const processId: string = "cbfcddd2-0006-43ae-996c-995fff7bed2e";

  const res = await sdk.roomV1.getInactiveRoomsForProcessDeprecated(appId, processId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `processId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | cbfcddd2-0006-43ae-996c-995fff7bed2e                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetInactiveRoomsForProcessDeprecatedResponse](../../models/operations/getinactiveroomsforprocessdeprecatedresponse.md)>**


## ~~getRoomInfoDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetRoomInfoDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.roomV1.getRoomInfoDeprecated(appId, roomId);


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

**Promise<[operations.GetRoomInfoDeprecatedResponse](../../models/operations/getroominfodeprecatedresponse.md)>**


## ~~suspendRoomDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SuspendRoomDeprecatedRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

  const res = await sdk.roomV1.suspendRoomDeprecated(appId, roomId);


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

**Promise<[operations.SuspendRoomDeprecatedResponse](../../models/operations/suspendroomdeprecatedresponse.md)>**

