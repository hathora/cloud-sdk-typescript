# SetLobbyStateParams

## Example Usage

```typescript
import { SetLobbyStateParams } from "@hathora/cloud-sdk-typescript/models/components";

let value: SetLobbyStateParams = {
  state: "Nevada",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `state`                                                           | *any*                                                             | :heavy_check_mark:                                                | JSON blob to store metadata for a room. Must be smaller than 1MB. |