# DiscoveryV1

## Overview

Service that allows clients to directly ping all Hathora regions to get latency information

### Available Operations

* [getPingServiceEndpoints](#getpingserviceendpoints) - Returns an array of all regions with a host and port that a client can directly ping.

## getPingServiceEndpoints

Returns an array of all regions with a host and port that a client can directly ping.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetPingServiceEndpointsResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});

sdk.discoveryV1.getPingServiceEndpoints().then((res: GetPingServiceEndpointsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPingServiceEndpointsResponse](../../models/operations/getpingserviceendpointsresponse.md)>**

