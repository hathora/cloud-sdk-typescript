# PlanName

A plan defines how much CPU and memory is required to run an instance of your game server.

`tiny`: shared core, 1gb memory

`small`: 1 core, 2gb memory

`medium`: 2 core, 4gb memory

`large`: 4 core, 8gb memory

## Example Usage

```typescript
import { PlanName } from "@hathora/cloud-sdk-typescript/models/components";

let value: PlanName = "tiny";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"tiny" | "small" | "medium" | "large" | Unrecognized<string>
```