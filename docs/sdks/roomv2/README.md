# RoomV2
(*roomV2*)

## Overview

Operations to create, manage, and connect to [rooms](https://hathora.dev/docs/concepts/hathora-entities#room).

### Available Operations

* [createRoom](#createroom) - Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `region`.
* [destroyRoom](#destroyroom) - Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. All associated metadata is deleted.
* [getActiveRoomsForProcess](#getactiveroomsforprocess) - Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [getConnectionInfo](#getconnectioninfo) - Get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. Clients can call this endpoint without authentication.
* [getInactiveRoomsForProcess](#getinactiveroomsforprocess) - Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [getRoomInfo](#getroominfo) - Get details for an existing [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`.
* [suspendRoom](#suspendroom) - Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. The room is unallocated from the process but can be rescheduled later using the same `roomId`.

## createRoom

Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `region`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateRoomRequest, CreateRoomResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { CreateRoomRequest, Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const createRoomRequest: CreateRoomRequest = {
  region: Region.Singapore,
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.roomV2.createRoom(createRoomRequest, appId, roomId).then((res: CreateRoomResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `createRoomRequest`                                                  | [shared.CreateRoomRequest](../../models/shared/createroomrequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `appId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                             |
| `roomId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 2swovpy1fnunu                                                        |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.CreateRoomResponse](../../models/operations/createroomresponse.md)>**


## destroyRoom

Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. All associated metadata is deleted.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DestroyRoomRequest, DestroyRoomResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.roomV2.destroyRoom(appId, roomId).then((res: DestroyRoomResponse) => {
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

**Promise<[operations.DestroyRoomResponse](../../models/operations/destroyroomresponse.md)>**


## getActiveRoomsForProcess

Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetActiveRoomsForProcessRequest, GetActiveRoomsForProcessResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const processId: string = "cbfcddd2-0006-43ae-996c-995fff7bed2e";

sdk.roomV2.getActiveRoomsForProcess(appId, processId).then((res: GetActiveRoomsForProcessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `processId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | cbfcddd2-0006-43ae-996c-995fff7bed2e                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetActiveRoomsForProcessResponse](../../models/operations/getactiveroomsforprocessresponse.md)>**


## getConnectionInfo

Get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. Clients can call this endpoint without authentication.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetConnectionInfoRequest, GetConnectionInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.roomV2.getConnectionInfo(appId, roomId).then((res: GetConnectionInfoResponse) => {
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

**Promise<[operations.GetConnectionInfoResponse](../../models/operations/getconnectioninforesponse.md)>**


## getInactiveRoomsForProcess

Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetInactiveRoomsForProcessRequest, GetInactiveRoomsForProcessResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const processId: string = "cbfcddd2-0006-43ae-996c-995fff7bed2e";

sdk.roomV2.getInactiveRoomsForProcess(appId, processId).then((res: GetInactiveRoomsForProcessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `processId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | cbfcddd2-0006-43ae-996c-995fff7bed2e                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetInactiveRoomsForProcessResponse](../../models/operations/getinactiveroomsforprocessresponse.md)>**


## getRoomInfo

Get details for an existing [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetRoomInfoRequest, GetRoomInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.roomV2.getRoomInfo(appId, roomId).then((res: GetRoomInfoResponse) => {
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

**Promise<[operations.GetRoomInfoResponse](../../models/operations/getroominforesponse.md)>**


## suspendRoom

Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. The room is unallocated from the process but can be rescheduled later using the same `roomId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SuspendRoomRequest, SuspendRoomResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const roomId: string = "2swovpy1fnunu";

sdk.roomV2.suspendRoom(appId, roomId).then((res: SuspendRoomResponse) => {
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

**Promise<[operations.SuspendRoomResponse](../../models/operations/suspendroomresponse.md)>**

