# ProcessMetricName

Available metrics to query over time.

## Example Usage

```typescript
import { ProcessMetricName } from "@hathora/cloud-sdk-typescript/models/components";

let value: ProcessMetricName = "memory";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cpu" | "memory" | "rateEgress" | "totalEgress" | "activeConnections" | Unrecognized<string>
```