# Hosting

## Example Usage

```typescript
import { Hosting } from "@hathora/cloud-sdk-typescript/models/components";

let value: Hosting = "cloud";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"metal" | "cloud" | "shared" | Unrecognized<string>
```