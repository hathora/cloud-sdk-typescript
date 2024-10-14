# Invoice

## Example Usage

```typescript
import { Invoice } from "@hathora/cloud-sdk-typescript/models/components";

let value: Invoice = {
  status: "overdue",
  amountDue: 2168.97,
  pdfUrl: "https://fatherly-agreement.net",
  dueDate: new Date("2022-12-17T17:43:52.087Z"),
  year: 3834.64,
  month: 5883.17,
  id: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.InvoiceStatus](../../models/components/invoicestatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amountDue`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pdfUrl`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `year`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `month`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |