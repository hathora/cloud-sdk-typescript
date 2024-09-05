# CreatePrivateLobbyRequestBody

## Example Usage

```typescript
import { CreatePrivateLobbyRequestBody } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreatePrivateLobbyRequestBody = {
    initialConfig: "<value>",
    region: "London",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `initialConfig`                                                            | *any*                                                                      | :heavy_check_mark:                                                         | User input to initialize the game state. Object must be smaller than 64KB. |
| `region`                                                                   | [components.Region](../../models/components/region.md)                     | :heavy_check_mark:                                                         | N/A                                                                        |