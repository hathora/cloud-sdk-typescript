# ConnectionInfo

Connection information to the default port.

## Example Usage

```typescript
import { ConnectionInfo } from "@hathora/cloud-sdk-typescript/models/components";

let value: ConnectionInfo = {
  status: "active",
  transportType: "udp",
  port: 4799.77,
  host: "nice-gorilla.org",
  roomId: "2swovpy1fnunu",
};
```

## Supported Types

### `components.StartingConnectionInfo`

```typescript
const value: components.StartingConnectionInfo = /* values here */
```

### `components.ActiveConnectionInfo`

```typescript
const value: components.ActiveConnectionInfo = /* values here */
```

