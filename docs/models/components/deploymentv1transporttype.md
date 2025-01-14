# ~~DeploymentV1TransportType~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { DeploymentV1TransportType } from "@hathora/cloud-sdk-typescript/models/components";

let value: DeploymentV1TransportType = "udp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tcp" | "udp" | "tls" | Unrecognized<string>
```