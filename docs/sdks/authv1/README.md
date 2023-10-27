# AuthV1
(*authV1*)

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
import { LoginAnonymousRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.authV1.loginAnonymous(appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { LoginGoogleRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LoginGoogleRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const loginGoogleRequest: LoginGoogleRequest = {
  idToken: "string",
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.authV1.loginGoogle(loginGoogleRequest, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { LoginNicknameRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LoginNicknameRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });
const loginNicknameRequest: LoginNicknameRequest = {
  nickname: "string",
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.authV1.loginNickname(loginNicknameRequest, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `loginNicknameRequest`                                                     | [shared.LoginNicknameRequest](../../models/shared/loginnicknamerequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `appId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                   |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.LoginNicknameResponse](../../models/operations/loginnicknameresponse.md)>**

