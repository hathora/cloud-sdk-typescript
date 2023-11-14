# AuthV1
(*authV1*)

## Overview

Operations that allow you to generate a Hathora-signed [JSON web token (JWT)](https://jwt.io/) for [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service).

### Available Operations

* [loginAnonymous](#loginanonymous) - Returns a unique player token for an anonymous user.
* [loginGoogle](#logingoogle) - Returns a unique player token using a Google-signed OIDC `idToken`.
* [loginNickname](#loginnickname) - Returns a unique player token with a specified nickname for a user.

## loginAnonymous

Returns a unique player token for an anonymous user.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { LoginAnonymousRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
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
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.LoginAnonymousResponse](../../sdk/models/operations/loginanonymousresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 404              | application/json |
| errors.SDKError  | 400-600          | */*              |

## loginGoogle

Returns a unique player token using a Google-signed OIDC `idToken`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { LoginGoogleRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LoginGoogleRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const loginGoogleRequest: LoginGoogleRequest = {
  idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkNDhhNzUxMzhkOWQ0OGYwYWE2MzVlZjU2OWM0ZTE5NmY3YWU4ZDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NDEyODI2Nzg4LW00bXNyYjZxNDRkbTJ1ZTNrZ3Z1aTBmcTdrZGE1NWxzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4NDEyODI2Nzg4LW00bXNyYjZxNDRkbTJ1ZTNrZ3Z1aTBmcTdrZGE1NWxzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTQyMzMwNzI3MTU2MTMzNzc2IiwiZW1haWwiOiJocGFdkeivmeuzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidno1NGhhdTNxbnVR",
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.authV1.loginGoogle(loginGoogleRequest, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                     | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `loginGoogleRequest`                                                          | [shared.LoginGoogleRequest](../../../sdk/models/shared/logingooglerequest.md) | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `appId`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           | app-af469a92-5b45-4565-b3c4-b79878de67d2                                      |
| `config`                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                  | :heavy_minus_sign:                                                            | Available config options for making requests.                                 |                                                                               |


### Response

**Promise<[operations.LoginGoogleResponse](../../sdk/models/operations/logingoogleresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404          | application/json |
| errors.SDKError  | 400-600          | */*              |

## loginNickname

Returns a unique player token with a specified nickname for a user.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { LoginNicknameRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { LoginNicknameRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      hathoraDevToken: "",
    },
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  });
const loginNicknameRequest: LoginNicknameRequest = {
  nickname: "squiddytwoshoes",
};
const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

  const res = await sdk.authV1.loginNickname(loginNicknameRequest, appId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `loginNicknameRequest`                                                            | [shared.LoginNicknameRequest](../../../sdk/models/shared/loginnicknamerequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `appId`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | app-af469a92-5b45-4565-b3c4-b79878de67d2                                          |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |                                                                                   |


### Response

**Promise<[operations.LoginNicknameResponse](../../sdk/models/operations/loginnicknameresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 404              | application/json |
| errors.SDKError  | 400-600          | */*              |
