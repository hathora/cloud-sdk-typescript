# FleetMetricName

Represents the valid metric names available to measure/manage fleets in a given region

## Example Usage

```typescript
import { FleetMetricName } from "@hathora/cloud-sdk-typescript/models/components";

let value: FleetMetricName = "provisionedBareMetal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"provisionedTotal" | "provisionedBareMetal" | "provisionedCloud" | "utilized" | "systemOverhead" | Unrecognized<string>
```