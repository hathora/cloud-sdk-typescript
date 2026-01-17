# FleetErrorState

## Example Usage

```typescript
import { FleetErrorState } from "@hathora/cloud-sdk-typescript/models/components";

let value: FleetErrorState = {
  lastErrorTimestamp: new Date("2026-11-10T01:54:00.717Z"),
  lastErrorMessage: null,
  lastErrorLogId: "<id>",
  inError: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lastErrorTimestamp`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastErrorMessage`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastErrorLogId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inError`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |