# roomV2

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
import { CreateRoomResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.roomV2.createRoom({
  auth0: "",
}, {
  region: Region.WashingtonDC,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: CreateRoomResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.CreateRoomSecurity](../../models/operations/createroomsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |                                                                                |
| `createRoomRequest`                                                            | [shared.CreateRoomRequest](../../models/shared/createroomrequest.md)           | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `appId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                       |
| `roomId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2swovpy1fnunu                                                                  |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[operations.CreateRoomResponse](../../models/operations/createroomresponse.md)>**


## destroyRoom

Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. All associated metadata is deleted.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DestroyRoomResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV2.destroyRoom({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: DestroyRoomResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.DestroyRoomSecurity](../../models/operations/destroyroomsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `roomId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 2swovpy1fnunu                                                                    |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.DestroyRoomResponse](../../models/operations/destroyroomresponse.md)>**


## getActiveRoomsForProcess

Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetActiveRoomsForProcessResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV2.getActiveRoomsForProcess({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "cbfcddd2-0006-43ae-996c-995fff7bed2e").then((res: GetActiveRoomsForProcessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                 | [operations.GetActiveRoomsForProcessSecurity](../../models/operations/getactiveroomsforprocesssecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |                                                                                                            |
| `appId`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                   |
| `processId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                       |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |                                                                                                            |


### Response

**Promise<[operations.GetActiveRoomsForProcessResponse](../../models/operations/getactiveroomsforprocessresponse.md)>**


## getConnectionInfo

Get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. Clients can call this endpoint without authentication.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetConnectionInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV2.getConnectionInfo("app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: GetConnectionInfoResponse) => {
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
import { GetInactiveRoomsForProcessResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV2.getInactiveRoomsForProcess({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "cbfcddd2-0006-43ae-996c-995fff7bed2e").then((res: GetInactiveRoomsForProcessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                     | [operations.GetInactiveRoomsForProcessSecurity](../../models/operations/getinactiveroomsforprocesssecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |                                                                                                                |
| `appId`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                       |
| `processId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                                           |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |                                                                                                                |


### Response

**Promise<[operations.GetInactiveRoomsForProcessResponse](../../models/operations/getinactiveroomsforprocessresponse.md)>**


## getRoomInfo

Get details for an existing [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetRoomInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV2.getRoomInfo({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: GetRoomInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.GetRoomInfoSecurity](../../models/operations/getroominfosecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `roomId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 2swovpy1fnunu                                                                    |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.GetRoomInfoResponse](../../models/operations/getroominforesponse.md)>**


## suspendRoom

Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. The room is unallocated from the process but can be rescheduled later using the same `roomId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SuspendRoomResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.roomV2.suspendRoom({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu").then((res: SuspendRoomResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.SuspendRoomSecurity](../../models/operations/suspendroomsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |                                                                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                         |
| `roomId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 2swovpy1fnunu                                                                    |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.SuspendRoomResponse](../../models/operations/suspendroomresponse.md)>**

