# ContainerPort

A container port object represents the transport configruations for how your server will listen.

## Example Usage

```typescript
import { ContainerPort } from "@hathora/cloud-sdk-typescript/models/components";

let value: ContainerPort = {
  transportType: "tls",
  port: 8000,
  name: "default",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `transportType`                                                                     | [components.TransportType](../../models/components/transporttype.md)                | :heavy_check_mark:                                                                  | Transport type specifies the underlying communication protocol to the exposed port. |                                                                                     |
| `port`                                                                              | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 | 8000                                                                                |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Readable name for the port.                                                         | default                                                                             |