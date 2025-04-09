# Scope

## Example Usage

```typescript
import { Scope } from "@hathora/cloud-sdk-typescript/models/components";

let value: Scope = "builds:read-write";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"billing:read-write" | "builds:read" | "builds:read-write" | "deployments:read" | "deployments:read-write" | "applications:read" | "applications:read-write" | "processes:read" | "processes:read-write" | "fleets:read" | "fleets:read-write" | "orgs:read" | "orgs:read-write" | "tokens:read" | "tokens:read-write" | Unrecognized<string>
```