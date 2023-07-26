# GetPaymentMethodResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `getPaymentMethod404ApplicationJSONString`                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `getPaymentMethod500ApplicationJSONString`                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `paymentMethod`                                              | [shared.PaymentMethod](../../models/shared/paymentmethod.md) | :heavy_minus_sign:                                           | Ok                                                           |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rawResponse`                                                | [AxiosResponse>](https://axios-http.com/docs/res_schema)     | :heavy_minus_sign:                                           | N/A                                                          |