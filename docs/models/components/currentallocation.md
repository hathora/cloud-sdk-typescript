# CurrentAllocation

Metadata on an allocated instance of a room.

## Example Usage

```typescript
import { CurrentAllocation } from "@hathora/cloud-sdk-typescript/models/components";

let value: CurrentAllocation = {
  unscheduledAt: new Date("2023-09-15T13:50:38.886Z"),
  scheduledAt: new Date("2024-10-11T10:53:38.306Z"),
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  roomAllocationId: "e3a0aa32-1711-4036-acfa-008b96061a78",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `unscheduledAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `scheduledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `processId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | System generated unique identifier to a runtime instance of your game server.                 | cbfcddd2-0006-43ae-996c-995fff7bed2e                                                          |
| `roomAllocationId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | System generated unique identifier to an allocated instance of a room.                        | e3a0aa32-1711-4036-acfa-008b96061a78                                                          |