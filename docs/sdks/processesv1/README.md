# ProcessesV1

## Overview

Operations to get data on active and stopped [processes](https://hathora.dev/docs/concepts/hathora-entities#process).

### Available Operations

* [getProcessInfo](#getprocessinfo) - Get details for an existing [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [getRunningProcesses](#getrunningprocesses) - Returns an array of active [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a region.
* [getStoppedProcesses](#getstoppedprocesses) - Returns an array of stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a region.

## getProcessInfo

Get details for an existing [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetProcessInfoRequest, GetProcessInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const processId: string = "cbfcddd2-0006-43ae-996c-995fff7bed2e";

sdk.processesV1.getProcessInfo(appId, processId).then((res: GetProcessInfoResponse) => {
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

**Promise<[operations.GetProcessInfoResponse](../../models/operations/getprocessinforesponse.md)>**


## getRunningProcesses

Returns an array of active [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a region.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetRunningProcessesRequest, GetRunningProcessesResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const region: Region = Region.Seattle;

sdk.processesV1.getRunningProcesses(appId, region).then((res: GetRunningProcessesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `region`                                                     | [shared.Region](../../models/shared/region.md)               | :heavy_minus_sign:                                           | Available regions to request a game server.                  |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetRunningProcessesResponse](../../models/operations/getrunningprocessesresponse.md)>**


## getStoppedProcesses

Returns an array of stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a region.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetStoppedProcessesRequest, GetStoppedProcessesResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud({
  security: {
    auth0: "",
  },
});
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
const region: Region = Region.London;

sdk.processesV1.getStoppedProcesses(appId, region).then((res: GetStoppedProcessesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `region`                                                     | [shared.Region](../../models/shared/region.md)               | :heavy_minus_sign:                                           | Available regions to request a game server.                  |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetStoppedProcessesResponse](../../models/operations/getstoppedprocessesresponse.md)>**

