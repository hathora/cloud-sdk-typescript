# InvoiceItemPage

## Example Usage

```typescript
import { InvoiceItemPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceItemPage = {
  invoiceItems: [
    {
      amount: 543.38,
      unitPrice: 1999.97,
      quantity: 185.22,
      unit: "farad",
      productName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `invoiceItems`                                                     | [components.InvoiceItem](../../models/components/invoiceitem.md)[] | :heavy_check_mark:                                                 | N/A                                                                |