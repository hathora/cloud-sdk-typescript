# CreateRoomResponse


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connectionInfoV2`                                                        | [shared.ConnectionInfoV2](../../../sdk/models/shared/connectioninfov2.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)                   | :heavy_minus_sign:                                                        | Raw HTTP response; suitable for custom response parsing                   |