# CardBrand

## Example Usage

```typescript
import { CardBrand } from "@hathora/cloud-sdk-typescript/models/components";

let value: CardBrand = "cartes_bancaires";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"amex" | "cartes_bancaires" | "diners" | "discover" | "jcb" | "mastercard" | "visa" | "unionpay" | "card" | Unrecognized<string>
```