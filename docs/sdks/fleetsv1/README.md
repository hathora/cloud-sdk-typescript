# FleetsV1
(*fleetsV1*)

## Overview

Operations to manage and view a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Available Operations

* [getFleetsDeprecated](#getfleetsdeprecated) - GetFleetsDeprecated
* [createFleetDeprecated](#createfleetdeprecated) - CreateFleetDeprecated
* [getFleetDeprecated](#getfleetdeprecated) - GetFleetDeprecated
* [updateFleetDeprecated](#updatefleetdeprecated) - UpdateFleetDeprecated
* [getFleetRegion](#getfleetregion) - GetFleetRegion
* [updateFleetRegion](#updatefleetregion) - UpdateFleetRegion
* [getFleetMetrics](#getfleetmetrics) - GetFleetMetrics
* [getFleetRegionMetrics](#getfleetregionmetrics) - GetFleetRegionMetrics

## getFleetsDeprecated

Returns an array of [fleets](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetFleetsDeprecated" method="get" path="/fleets/v1/fleets" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleetsDeprecated();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1GetFleetsDeprecated } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1GetFleetsDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1GetFleetsDeprecated(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1GetFleetsDeprecated failed:", res.error);
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

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 401, 404, 408, 429 | application/json   |
| errors.ApiError    | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## createFleetDeprecated

CreateFleetDeprecated

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateFleetDeprecated" method="post" path="/fleets/v1/fleets" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.createFleetDeprecated({
    nodeShape: "cpu-16-32",
    autoscalerConfig: {
      scaleUpThreshold: 557407,
    },
    name: "production",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1CreateFleetDeprecated } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1CreateFleetDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1CreateFleetDeprecated(hathoraCloud, {
    nodeShape: "cpu-16-32",
    autoscalerConfig: {
      scaleUpThreshold: 557407,
    },
    name: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1CreateFleetDeprecated failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createFleet`                                                                                                                                                                  | [components.CreateFleet](../../models/components/createfleet.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Fleet](../../models/components/fleet.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getFleetDeprecated

Returns a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetFleetDeprecated" method="get" path="/fleets/v1/fleets/{fleetId}" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleetDeprecated("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1GetFleetDeprecated } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1GetFleetDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1GetFleetDeprecated(hathoraCloud, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1GetFleetDeprecated failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fleetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Fleet](../../models/components/fleet.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## updateFleetDeprecated

Updates a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet)'s configuration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateFleetDeprecated" method="post" path="/fleets/v1/fleets/{fleetId}" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await hathoraCloud.fleetsV1.updateFleetDeprecated("<id>", {
    autoscalerConfig: {
      scaleUpThreshold: 638855,
    },
    name: "production",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1UpdateFleetDeprecated } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1UpdateFleetDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1UpdateFleetDeprecated(hathoraCloud, "<id>", {
    autoscalerConfig: {
      scaleUpThreshold: 638855,
    },
    name: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("fleetsV1UpdateFleetDeprecated failed:", res.error);
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

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getFleetRegion

Gets the configuration for a given [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetFleetRegion" method="get" path="/fleets/v1/fleets/{fleetId}/regions/{region}" -->
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

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## updateFleetRegion

Updates the configuration for a given [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateFleetRegion" method="put" path="/fleets/v1/fleets/{fleetId}/regions/{region}" -->
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

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getFleetMetrics

Gets aggregate metrics for a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetFleetMetrics" method="get" path="/fleets/v1/fleets/{fleetId}/metrics" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleetMetrics({
    fleetId: "<id>",
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

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getFleetRegionMetrics

Gets metrics for a region in a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetFleetRegionMetrics" method="get" path="/fleets/v1/fleets/{fleetId}/regions/{region}/metrics" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.fleetsV1.getFleetRegionMetrics({
    fleetId: "<id>",
    region: "Chicago",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { fleetsV1GetFleetRegionMetrics } from "@hathora/cloud-sdk-typescript/funcs/fleetsV1GetFleetRegionMetrics.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await fleetsV1GetFleetRegionMetrics(hathoraCloud, {
    fleetId: "<id>",
    region: "Chicago",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fleetsV1GetFleetRegionMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFleetRegionMetricsRequest](../../models/operations/getfleetregionmetricsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FleetMetricsData](../../models/components/fleetmetricsdata.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |