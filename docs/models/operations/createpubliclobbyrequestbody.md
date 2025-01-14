# CreatePublicLobbyRequestBody

## Example Usage

```typescript
import { CreatePublicLobbyRequestBody } from "@hathora/cloud-sdk-typescript/models/operations";

let value: CreatePublicLobbyRequestBody = {
  initialConfig: "<value>",
  region: "Chicago",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `initialConfig`                                                            | *any*                                                                      | :heavy_check_mark:                                                         | User input to initialize the game state. Object must be smaller than 64KB. |
| `region`                                                                   | [components.Region](../../models/components/region.md)                     | :heavy_check_mark:                                                         | N/A                                                                        |