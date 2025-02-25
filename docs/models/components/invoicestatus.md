# InvoiceStatus

## Example Usage

```typescript
import { InvoiceStatus } from "@hathora/cloud-sdk-typescript/models/components";

let value: InvoiceStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "paid" | "overdue" | Unrecognized<string>
```