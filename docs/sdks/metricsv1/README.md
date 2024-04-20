# MetricsV1
(*metricsV1*)

## Overview

Operations to get metrics by [process](https://hathora.dev/docs/concepts/hathora-entities#process). We store 72 hours of metrics data.

### Available Operations

* [getMetrics](#getmetrics) - Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

## getMetrics

Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### Example Usage

```typescript
import { HathoraCloud, MetricName } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });

  const res = await sdk.metricsV1.getMetrics({
    metrics: [
      MetricName.RateEgress,
    ],
    processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                     | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `request`                                                     | [models.GetMetricsRequest](../../models/getmetricsrequest.md) | :heavy_check_mark:                                            | The request object to use for the request.                    |
| `config`                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)  | :heavy_minus_sign:                                            | Available config options for making requests.                 |


### Response

**Promise<[models.GetMetricsResponse](../../models/getmetricsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ApiErrorError | 404,422,500          | application/json     |
| models.SDKError      | 400-600              | */*                  |
