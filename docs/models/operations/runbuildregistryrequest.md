# RunBuildRegistryRequest

## Example Usage

```typescript
import { RunBuildRegistryRequest } from "@hathora/cloud-sdk-typescript/models/operations";

let value: RunBuildRegistryRequest = {
  buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
  registryConfig: {
    image: "https://picsum.photos/seed/a8dapdbaoK/1626/2103",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `buildId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5                               |
| `orgId`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | org-6f706e83-0ec1-437a-9a46-7d4281eb2f39                               |
| `registryConfig`                                                       | [components.RegistryConfig](../../models/components/registryconfig.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |