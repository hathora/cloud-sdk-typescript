# InvoiceItemPage

## Example Usage

```typescript
import { InvoiceItemPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceItemPage = {
  invoiceItems: [
    {
      amount: 2274.15,
      unitPrice: 2543.56,
      quantity: 580.29,
      unit: "watt",
      productName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `invoiceItems`                                                     | [components.InvoiceItem](../../models/components/invoiceitem.md)[] | :heavy_check_mark:                                                 | N/A                                                                |