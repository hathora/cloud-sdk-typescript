# MetricName

Available metrics to query over time.

## Example Usage

```typescript
import { MetricName } from "@hathora/cloud-sdk-typescript/models/components";

let value: MetricName = "total_egress";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cpu" | "memory" | "rate_egress" | "total_egress" | "active_connections" | Unrecognized<string>
```