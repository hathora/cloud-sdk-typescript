# Invoice

## Example Usage

```typescript
import { Invoice } from "@hathora/cloud-sdk-typescript/models/components";

let value: Invoice = {
  status: "overdue",
  amountDue: 1175.31,
  pdfUrl: "https://complete-provision.info",
  dueDate: new Date("2024-09-11T16:50:31.874Z"),
  year: 1832.8,
  month: 1448.47,
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