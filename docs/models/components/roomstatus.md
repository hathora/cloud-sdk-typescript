# RoomStatus

The allocation status of a room.

`scheduling`: a process is not allocated yet and the room is waiting to be scheduled

`active`: ready to accept connections

`destroyed`: all associated metadata is deleted

## Example Usage

```typescript
import { RoomStatus } from "@hathora/cloud-sdk-typescript/models/components";

let value: RoomStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"scheduling" | "active" | "destroyed" | Unrecognized<string>
```