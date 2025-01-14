# Invoice

## Example Usage

```typescript
import { Invoice } from "@hathora/cloud-sdk-typescript/models/components";

let value: Invoice = {
  status: "paid",
  amountDue: 3741.70,
  pdfUrl: "https://flawless-morbidity.org/",
  dueDate: new Date("2023-05-09T19:33:28.581Z"),
  year: 5173.79,
  month: 1320.68,
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