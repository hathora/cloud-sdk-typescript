# ManagementV1
(*managementV1*)

## Overview

 

### Available Operations

* [sendVerificationEmail](#sendverificationemail) - SendVerificationEmail

## sendVerificationEmail

SendVerificationEmail

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud();

async function run() {
  const result = await hathoraCloud.managementV1.sendVerificationEmail({
    userId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { managementV1SendVerificationEmail } from "@hathora/cloud-sdk-typescript/funcs/managementV1SendVerificationEmail.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore();

async function run() {
  const res = await managementV1SendVerificationEmail(hathoraCloud, {
    userId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("managementV1SendVerificationEmail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.VerificationEmailRequest](../../models/components/verificationemailrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.VerificationEmailSuccess](../../models/components/verificationemailsuccess.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 429         | application/json |
| errors.ApiError  | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |