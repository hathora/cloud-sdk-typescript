# TransportType

Transport type specifies the underlying communication protocol to the exposed port.

## Example Usage

```typescript
import { TransportType } from "@hathora/cloud-sdk-typescript/models/components";

let value: TransportType = "tcp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tcp" | "udp" | "tls" | Unrecognized<string>
```