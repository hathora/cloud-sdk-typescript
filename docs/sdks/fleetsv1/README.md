# FleetsV1
(*fleetsV1*)

## Overview

Operations to manage and view a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Available Operations

* [getFleets](#getfleets) - GetFleets
* [updateFleet](#updatefleet) - UpdateFleet
* [getFleetRegion](#getfleetregion) - GetFleetRegion
* [updateFleetRegion](#updatefleetregion) - UpdateFleetRegion
* [getFleetMetrics](#getfleetmetrics) - GetFleetMetrics

## getFleets

Returns an array of [fleets](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleets();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1GetFleets } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1GetFleets.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1GetFleets(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1GetFleets failed:", res.error);
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

**Promise\<[components.FleetsPage](../../models/components/fleetspage.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404, 429    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateFleet

Updates a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet)'s configuration.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await hathoraCloud.fleetsV1.updateFleet("<id>", {
    autoscalerConfig: {
      scaleUpThreshold: 979840,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1UpdateFleet } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1UpdateFleet.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1UpdateFleet(hathoraCloud, "<id>", {
    autoscalerConfig: {
      scaleUpThreshold: 979840,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("fleetsV1UpdateFleet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fleetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `updateFleet`                                                                                                                                                                  | [components.UpdateFleet](../../models/components/updatefleet.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
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

## getFleetRegion

Gets the configuration for a given [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleetRegion("<id>", "Singapore");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1GetFleetRegion } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1GetFleetRegion.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1GetFleetRegion(hathoraCloud, "<id>", "Singapore");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1GetFleetRegion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fleetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `region`                                                                                                                                                                       | [components.Region](../../models/components/region.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FleetRegion](../../models/components/fleetregion.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 422, 429 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## updateFleetRegion

Updates the configuration for a given [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await hathoraCloud.fleetsV1.updateFleetRegion("<id>", "Chicago", {
    cloudMinVcpus: 503995,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1UpdateFleetRegion } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1UpdateFleetRegion.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1UpdateFleetRegion(hathoraCloud, "<id>", "Chicago", {
    cloudMinVcpus: 503995,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("fleetsV1UpdateFleetRegion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fleetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `region`                                                                                                                                                                       | [components.Region](../../models/components/region.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `fleetRegionConfig`                                                                                                                                                            | [components.FleetRegionConfig](../../models/components/fleetregionconfig.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
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

## getFleetMetrics

Gets metrics for a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleetMetrics({
    fleetId: "<id>",
    region: "Washington_DC",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1GetFleetMetrics } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1GetFleetMetrics.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1GetFleetMetrics(hathoraCloud, {
    fleetId: "<id>",
    region: "Washington_DC",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1GetFleetMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFleetMetricsRequest](../../models/operations/getfleetmetricsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FleetMetricsData](../../models/components/fleetmetricsdata.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 422, 429 | application/json   |
| errors.ApiError    | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |