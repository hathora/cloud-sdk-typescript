# NodeShape

## Example Usage

```typescript
import { NodeShape } from "@hathora/cloud-sdk-typescript/models/components";

let value: NodeShape = "cpu-8-16";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cpu-4-8" | "cpu-8-16" | "cpu-16-32" | "cpu-32-64" | "cpu-64-128" | "cpu-4-16" | "cpu-8-32" | "cpu-16-64" | "cpu-32-128" | "gpu-l4-1-4-16" | "gpu-l4-1-12-48" | "gpu-l4-2-24-96" | "gpu-l4-4-48-192" | "gpu-l4-8-96-384" | "gpu-h100-1-26-234" | "gpu-h100-2-52-468" | "gpu-h100-4-104-936" | "gpu-h100-8-208-1872" | "gpu-h100-1-28-180" | "gpu-h100-2-60-360" | "gpu-h100-4-124-720" | "gpu-h100-8-252-1440" | "gpu-h100-8-192-1800" | "gpu-h100-8-192-960" | "gpu-h100-1-16-200" | "gpu-h100-8-128-1600" | "gpu-h200-1-16-200" | "gpu-h200-8-128-1600" | "gpu-b200-8-160-1792" | Unrecognized<string>
```