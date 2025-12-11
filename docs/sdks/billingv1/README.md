# BillingV1

## Overview

 

### Available Operations

* [~~getBalance~~](#getbalance) - GetBalance :warning: **Deprecated**
* [getUpcomingInvoiceItems](#getupcominginvoiceitems) - GetUpcomingInvoiceItems
* [getUpcomingInvoiceTotal](#getupcominginvoicetotal) - GetUpcomingInvoiceTotal
* [getPaymentMethod](#getpaymentmethod) - GetPaymentMethod
* [initStripeCustomerPortalUrl](#initstripecustomerportalurl) - InitStripeCustomerPortalUrl
* [getInvoices](#getinvoices) - GetInvoices

## ~~getBalance~~

GetBalance

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetBalance" method="get" path="/billing/v1/balance" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.billingV1.getBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { billingV1GetBalance } from "@hathora/cloud-sdk-typescript/funcs/billingV1GetBalance.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await billingV1GetBalance(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingV1GetBalance failed:", res.error);
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

**Promise\<[number](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getUpcomingInvoiceItems

GetUpcomingInvoiceItems

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetUpcomingInvoiceItems" method="get" path="/billing/v1/upcoming/items" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.billingV1.getUpcomingInvoiceItems();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { billingV1GetUpcomingInvoiceItems } from "@hathora/cloud-sdk-typescript/funcs/billingV1GetUpcomingInvoiceItems.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await billingV1GetUpcomingInvoiceItems(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingV1GetUpcomingInvoiceItems failed:", res.error);
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

**Promise\<[components.InvoiceItemPage](../../models/components/invoiceitempage.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getUpcomingInvoiceTotal

GetUpcomingInvoiceTotal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetUpcomingInvoiceTotal" method="get" path="/billing/v1/upcoming/total" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.billingV1.getUpcomingInvoiceTotal();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { billingV1GetUpcomingInvoiceTotal } from "@hathora/cloud-sdk-typescript/funcs/billingV1GetUpcomingInvoiceTotal.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await billingV1GetUpcomingInvoiceTotal(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingV1GetUpcomingInvoiceTotal failed:", res.error);
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

**Promise\<[operations.GetUpcomingInvoiceTotalResponseBody](../../models/operations/getupcominginvoicetotalresponsebody.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getPaymentMethod

GetPaymentMethod

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetPaymentMethod" method="get" path="/billing/v1/paymentmethod" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.billingV1.getPaymentMethod();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { billingV1GetPaymentMethod } from "@hathora/cloud-sdk-typescript/funcs/billingV1GetPaymentMethod.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await billingV1GetPaymentMethod(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingV1GetPaymentMethod failed:", res.error);
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

**Promise\<[components.PaymentMethod](../../models/components/paymentmethod.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## initStripeCustomerPortalUrl

InitStripeCustomerPortalUrl

### Example Usage

<!-- UsageSnippet language="typescript" operationID="InitStripeCustomerPortalUrl" method="post" path="/billing/v1/customerportalurl" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.billingV1.initStripeCustomerPortalUrl({
    returnUrl: "https://sunny-majority.com/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { billingV1InitStripeCustomerPortalUrl } from "@hathora/cloud-sdk-typescript/funcs/billingV1InitStripeCustomerPortalUrl.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await billingV1InitStripeCustomerPortalUrl(hathoraCloud, {
    returnUrl: "https://sunny-majority.com/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingV1InitStripeCustomerPortalUrl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `customerPortalUrl`                                                                                                                                                            | [components.CustomerPortalUrl](../../models/components/customerportalurl.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `orgId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getInvoices

GetInvoices

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetInvoices" method="get" path="/billing/v1/invoices" -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.billingV1.getInvoices();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HathoraCloudCore } from "@hathora/cloud-sdk-typescript/core.js";
import { billingV1GetInvoices } from "@hathora/cloud-sdk-typescript/funcs/billingV1GetInvoices.js";

// Use `HathoraCloudCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hathoraCloud = new HathoraCloudCore({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await billingV1GetInvoices(hathoraCloud);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingV1GetInvoices failed:", res.error);
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

**Promise\<[components.Invoice[]](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 401, 404, 408, 422, 429 | application/json        |
| errors.ApiError         | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |