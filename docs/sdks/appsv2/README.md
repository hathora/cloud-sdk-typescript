# AppsV2
(*appsV2*)

## Overview

Operations that allow you manage your [applications](https://hathora.dev/docs/concepts/hathora-entities#application).

### Available Operations

* [getApps](#getapps) - GetApps
* [createApp](#createapp) - CreateApp
* [updateApp](#updateapp) - UpdateApp
* [patchApp](#patchapp) - PatchApp
* [getApp](#getapp) - GetApp
* [deleteApp](#deleteapp) - DeleteApp

## getApps

Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.appsV2.getApps();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { appsV2GetApps } from "@hathora/cloud-sdk-typescript/funcs/appsV2GetApps.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appsV2GetApps(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsV2GetApps failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ApplicationsPage](../../models/components/applicationspage.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404, 429    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createApp

Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.appsV2.createApp({
    authConfiguration: {},
    appName: "minecraft",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { appsV2CreateApp } from "@hathora/cloud-sdk-typescript/funcs/appsV2CreateApp.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appsV2CreateApp(hathoraCloud, {
    authConfiguration: {},
    appName: "minecraft",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsV2CreateApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appConfig`                                                                                                                                                                    | [components.AppConfig](../../models/components/appconfig.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Application](../../models/components/application.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 422, 429 | application/json   |
| errors.ApiError    | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## updateApp

Set application config (will override all fields) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.appsV2.updateApp({
    serviceConfig: {
      staticProcessAllocation: [
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Sao_Paulo",
        },
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Sao_Paulo",
        },
      ],
    },
    authConfiguration: {},
    appName: "minecraft",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { appsV2UpdateApp } from "@hathora/cloud-sdk-typescript/funcs/appsV2UpdateApp.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appsV2UpdateApp(hathoraCloud, {
    serviceConfig: {
      staticProcessAllocation: [
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Sao_Paulo",
        },
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Sao_Paulo",
        },
      ],
    },
    authConfiguration: {},
    appName: "minecraft",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsV2UpdateApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appConfigWithServiceConfig`                                                                                                                                                   | [components.AppConfigWithServiceConfig](../../models/components/appconfigwithserviceconfig.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Application](../../models/components/application.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 422, 429 | application/json   |
| errors.ApiError    | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## patchApp

Patch data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.appsV2.patchApp({
    serviceConfig: {
      staticProcessAllocation: [
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Tokyo",
        },
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Tokyo",
        },
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Tokyo",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { appsV2PatchApp } from "@hathora/cloud-sdk-typescript/funcs/appsV2PatchApp.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appsV2PatchApp(hathoraCloud, {
    serviceConfig: {
      staticProcessAllocation: [
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Tokyo",
        },
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Tokyo",
        },
        {
          maxProcesses: 3,
          targetProcesses: 2,
          minProcesses: 1,
          region: "Tokyo",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsV2PatchApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `partialAppConfigWithServiceConfig`                                                                                                                                            | [components.PartialAppConfigWithServiceConfig](../../models/components/partialappconfigwithserviceconfig.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Application](../../models/components/application.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 422, 429 | application/json   |
| errors.ApiError    | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getApp

Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.appsV2.getApp();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { appsV2GetApp } from "@hathora/cloud-sdk-typescript/funcs/appsV2GetApp.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appsV2GetApp(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsV2GetApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Application](../../models/components/application.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404, 429    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteApp

Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await hathoraCloud.appsV2.deleteApp();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { appsV2DeleteApp } from "@hathora/cloud-sdk-typescript/funcs/appsV2DeleteApp.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await appsV2DeleteApp(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("appsV2DeleteApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 422, 429 | application/json   |
| errors.ApiError    | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |