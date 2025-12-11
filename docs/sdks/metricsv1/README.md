# ~~MetricsV1~~

> [!WARNING]
> This SDK is **DEPRECATED**

## Overview

Deprecated. Use [ProcessesV3#GetProcessMetrics](https://hathora.dev/api#tag/ProcessesV3/operation/GetProcessMetrics) to fetch metrics about a specific process.

### Available Operations

* [~~getMetricsDeprecated~~](#getmetricsdeprecated) - GetMetricsDeprecated :warning: **Deprecated**

## ~~getMetricsDeprecated~~

Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetMetricsDeprecated" method="get" path="/metrics/v1/{appId}/process/{processId}" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.metricsV1.getMetricsDeprecated({
    processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { metricsV1GetMetricsDeprecated } from "@hathora/cloud-sdk-typescript/funcs/metricsV1GetMetricsDeprecated.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await metricsV1GetMetricsDeprecated(hathoraCloud, {
    processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsV1GetMetricsDeprecated failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricsDeprecatedRequest](../../models/operations/getmetricsdeprecatedrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DeprecatedProcessMetricsData](../../models/components/deprecatedprocessmetricsdata.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |