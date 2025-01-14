# CardPaymentMethod

## Example Usage

```typescript
import { CardPaymentMethod } from "@hathora/cloud-sdk-typescript/models/components";

let value: CardPaymentMethod = {
  last4: "<value>",
  brand: "visa",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `last4`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `brand`                                                      | [components.CardBrand](../../models/components/cardbrand.md) | :heavy_check_mark:                                           | N/A                                                          |