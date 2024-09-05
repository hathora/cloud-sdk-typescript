# RoomsV1
(*roomsV1*)

## Overview

### Available Operations

* [~~createRoomDeprecated~~](#createroomdeprecated) - :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](#getroominfodeprecated) - :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](#getactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](#getinactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](#destroyroomdeprecated) - :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](#suspendroomdeprecated) - :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](#getconnectioninfodeprecated) - :warning: **Deprecated**

## ~~createRoomDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.roomsV1.createRoomDeprecated({
    roomConfig: "{\"name\":\"my-room\"}",
    region: "Chicago",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1CreateRoomDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1CreateRoomDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1CreateRoomDeprecated(hathoraCloud, {
    roomConfig: "{\"name\":\"my-room\"}",
    region: "Tokyo",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2", "2swovpy1fnunu");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createRoomParams`                                                                                                                                                             | [components.CreateRoomParams](../../models/components/createroomparams.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `roomId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiError             | 400,401,402,404,422,429,500 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## ~~getRoomInfoDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.roomsV1.getRoomInfoDeprecated("2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1GetRoomInfoDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1GetRoomInfoDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1GetRoomInfoDeprecated(hathoraCloud, "2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `roomId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Room](../../models/components/room.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,422,429  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## ~~getActiveRoomsForProcessDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.roomsV1.getActiveRoomsForProcessDeprecated("cbfcddd2-0006-43ae-996c-995fff7bed2e", "app-af469a92-5b45-4565-b3c4-b79878de67d2");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1GetActiveRoomsForProcessDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1GetActiveRoomsForProcessDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1GetActiveRoomsForProcessDeprecated(hathoraCloud, "cbfcddd2-0006-43ae-996c-995fff7bed2e", "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `processId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.RoomWithoutAllocations[]](../../models/.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## ~~getInactiveRoomsForProcessDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.roomsV1.getInactiveRoomsForProcessDeprecated("cbfcddd2-0006-43ae-996c-995fff7bed2e", "app-af469a92-5b45-4565-b3c4-b79878de67d2");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1GetInactiveRoomsForProcessDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1GetInactiveRoomsForProcessDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1GetInactiveRoomsForProcessDeprecated(hathoraCloud, "cbfcddd2-0006-43ae-996c-995fff7bed2e", "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `processId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.RoomWithoutAllocations[]](../../models/.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## ~~destroyRoomDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  await hathoraCloud.roomsV1.destroyRoomDeprecated("2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1DestroyRoomDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1DestroyRoomDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1DestroyRoomDeprecated(hathoraCloud, "2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `roomId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429,500  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## ~~suspendRoomDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  await hathoraCloud.roomsV1.suspendRoomDeprecated("2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1SuspendRoomDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1SuspendRoomDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1SuspendRoomDeprecated(hathoraCloud, "2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `roomId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429,500  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## ~~getConnectionInfoDeprecated~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.roomsV1.getConnectionInfoDeprecated("2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { roomsV1GetConnectionInfoDeprecated } from "@hathora/cloud-sdk-typescript/funcs/roomsV1GetConnectionInfoDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const res = await roomsV1GetConnectionInfoDeprecated(hathoraCloud, "2swovpy1fnunu", "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `roomId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ConnectionInfo](../../models/components/connectioninfo.md)\>**

### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ApiError     | 400,402,404,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |
