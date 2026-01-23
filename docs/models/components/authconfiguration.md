# AuthConfiguration

Configure [player authentication](https://hathora.dev/docs/backend-integrations/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).

## Example Usage

```typescript
import { AuthConfiguration } from "@hathora/cloud-sdk-typescript/models/components";

let value: AuthConfiguration = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `google`                                                                     | [components.Google](../../models/components/google.md)                       | :heavy_minus_sign:                                                           | Enable google auth for your application.                                     |
| `nickname`                                                                   | [components.RecordStringNever](../../models/components/recordstringnever.md) | :heavy_minus_sign:                                                           | Construct a type with a set of properties K of type T                        |
| `anonymous`                                                                  | [components.RecordStringNever](../../models/components/recordstringnever.md) | :heavy_minus_sign:                                                           | Construct a type with a set of properties K of type T                        |