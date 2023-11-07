# AuthConfiguration

Configure [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `anonymous`                                                          | [shared.RecordStringNever](../../models/shared/recordstringnever.md) | :heavy_minus_sign:                                                   | Construct a type with a set of properties K of type T                |
| `google`                                                             | [shared.Google](../../models/shared/google.md)                       | :heavy_minus_sign:                                                   | Enable google auth for your application.                             |
| `nickname`                                                           | [shared.RecordStringNever](../../models/shared/recordstringnever.md) | :heavy_minus_sign:                                                   | Construct a type with a set of properties K of type T                |