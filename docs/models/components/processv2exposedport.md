# ProcessV2ExposedPort

Connection details for an active process.

## Example Usage

```typescript
import { ProcessV2ExposedPort } from "@hathora/cloud-sdk-typescript/models/components";

let value: ProcessV2ExposedPort = {
    transportType: "tcp",
    port: 34567,
    host: "1.proxy.hathora.dev",
    name: "default",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `transportType`                                                                     | [components.TransportType](../../models/components/transporttype.md)                | :heavy_check_mark:                                                                  | Transport type specifies the underlying communication protocol to the exposed port. |
| `port`                                                                              | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `host`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |