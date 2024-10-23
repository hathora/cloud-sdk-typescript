# Invoice

## Example Usage

```typescript
import { Invoice } from "@hathora/cloud-sdk-typescript/models/components";

let value: Invoice = {
  status: "paid",
  amountDue: 8966.71,
  pdfUrl: "https://edible-pharmacopoeia.biz",
  dueDate: new Date("2022-01-23T15:12:14.003Z"),
  year: 7583.79,
  month: 3200.17,
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