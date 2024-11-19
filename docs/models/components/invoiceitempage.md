# InvoiceItemPage

## Example Usage

```typescript
import { InvoiceItemPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceItemPage = {
  invoiceItems: [
    {
      amount: 580.29,
      unitPrice: 4344.17,
      quantity: 3117.96,
      unit: "gray",
      productName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `invoiceItems`                                                     | [components.InvoiceItem](../../models/components/invoiceitem.md)[] | :heavy_check_mark:                                                 | N/A                                                                |