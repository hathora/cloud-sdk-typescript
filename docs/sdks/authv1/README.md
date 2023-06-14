# authV1

## Overview

Operations that allow you to configure authentication for your [applications](https://hathora.dev/docs/concepts/hathora-entities#application).

### Available Operations

* [loginAnonymous](#loginanonymous)
* [loginGoogle](#logingoogle)
* [loginNickname](#loginnickname)

## loginAnonymous

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { LoginAnonymousResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.authV1.loginAnonymous("app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: LoginAnonymousResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.LoginAnonymousResponse](../../models/operations/loginanonymousresponse.md)>**


## loginGoogle

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { LoginGoogleResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.authV1.loginGoogle({
  idToken: "quibusdam",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: LoginGoogleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `loginGoogleRequest`                                                   | [shared.LoginGoogleRequest](../../models/shared/logingooglerequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `appId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                               |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.LoginGoogleResponse](../../models/operations/logingoogleresponse.md)>**


## loginNickname

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { LoginNicknameResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.authV1.loginNickname({
  nickname: "unde",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: LoginNicknameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `loginNicknameRequest`                                                     | [shared.LoginNicknameRequest](../../models/shared/loginnicknamerequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `appId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.LoginNicknameResponse](../../models/operations/loginnicknameresponse.md)>**

