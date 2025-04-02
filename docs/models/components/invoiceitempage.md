# InvoiceItemPage

## Example Usage

```typescript
import { InvoiceItemPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceItemPage = {
  invoiceItems: [
    {
      amount: 6874.88,
      unitPrice: 2155.07,
      quantity: 9473.71,
      unit: "sievert",
      productName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `invoiceItems`                                                     | [components.InvoiceItem](../../models/components/invoiceitem.md)[] | :heavy_check_mark:                                                 | N/A                                                                |