# ProcessStatus

## Example Usage

```typescript
import { ProcessStatus } from "@hathora/cloud-sdk-typescript/models/components";

let value: ProcessStatus = "stopping";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"starting" | "running" | "draining" | "stopping" | "stopped" | "failed" | Unrecognized<string>
```