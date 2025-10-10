# NodeV1Status

## Example Usage

```typescript
import { NodeV1Status } from "@hathora/cloud-sdk-typescript/models/components";

let value: NodeV1Status = "draining";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"running" | "draining" | "stopped" | Unrecognized<string>
```