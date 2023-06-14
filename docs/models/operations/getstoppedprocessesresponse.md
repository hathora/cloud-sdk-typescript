# GetStoppedProcessesResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `getStoppedProcesses404ApplicationJSONString`            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `processes`                                              | [shared.Process](../../models/shared/process.md)[]       | :heavy_minus_sign:                                       | Ok                                                       |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |