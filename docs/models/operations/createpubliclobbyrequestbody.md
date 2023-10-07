# CreatePublicLobbyRequestBody


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `initialConfig`                                                            | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | User input to initialize the game state. Object must be smaller than 64KB. |
| `region`                                                                   | [shared.Region](../../models/shared/region.md)                             | :heavy_check_mark:                                                         | Available regions to request a game server.                                |