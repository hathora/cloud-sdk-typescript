# BuildStatus

## Example Usage

```typescript
import { BuildStatus } from "@hathora/cloud-sdk-typescript/models/components";

let value: BuildStatus = "succeeded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "running" | "succeeded" | "failed" | Unrecognized<string>
```