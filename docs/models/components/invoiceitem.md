# InvoiceItem

## Example Usage

```typescript
import { InvoiceItem } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceItem = {
  amount: 4615.83,
  unitPrice: 5223.08,
  quantity: 5825.78,
  unit: "second",
  productName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `discount`         | *number*           | :heavy_minus_sign: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `unitPrice`        | *number*           | :heavy_check_mark: | N/A                |
| `quantity`         | *number*           | :heavy_check_mark: | N/A                |
| `unit`             | *string*           | :heavy_check_mark: | N/A                |
| `productName`      | *string*           | :heavy_check_mark: | N/A                |