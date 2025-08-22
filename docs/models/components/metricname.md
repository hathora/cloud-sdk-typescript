# MetricName

The name of the metric.
Allowed values:
`concurrent-requests`: Tracks the number of concurrent requests that a single Process handles.

## Example Usage

```typescript
import { MetricName } from "@hathora/cloud-sdk-typescript/models/components";

let value: MetricName = "concurrent-requests";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"concurrent-requests" | Unrecognized<string>
```