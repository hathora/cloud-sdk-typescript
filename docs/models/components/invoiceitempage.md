# InvoiceItemPage

## Example Usage

```typescript
import { InvoiceItemPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceItemPage = {
  invoiceItems: [
    {
      amount: 9527.92,
      unitPrice: 6874.88,
      quantity: 2155.07,
      unit: "lux",
      productName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `invoiceItems`                                                     | [components.InvoiceItem](../../models/components/invoiceitem.md)[] | :heavy_check_mark:                                                 | N/A                                                                |