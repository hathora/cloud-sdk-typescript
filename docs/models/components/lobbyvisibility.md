# LobbyVisibility

Types of lobbies a player can create.

`private`: the player who created the room must share the roomId with their friends

`public`: visible in the public lobby list, anyone can join

`local`: for testing with a server running locally

## Example Usage

```typescript
import { LobbyVisibility } from "@hathora/cloud-sdk-typescript/models/components";

let value: LobbyVisibility = "private";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "public" | "local" | Unrecognized<string>
```