# GetLatestProcessesRequest

## Example Usage

```typescript
import { GetLatestProcessesRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: GetLatestProcessesRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `appId`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                               |
| `status`                                                               | [components.ProcessStatus](../../models/components/processstatus.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `region`                                                               | [components.Region](../../models/components/region.md)[]               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `before`                                                               | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |