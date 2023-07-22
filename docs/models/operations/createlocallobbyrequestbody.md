# CreateLocalLobbyRequestBody


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `initialConfig`                                                            | [shared.LobbyInitialConfig](../../models/shared/lobbyinitialconfig.md)     | :heavy_check_mark:                                                         | User input to initialize the game state. Object must be smaller than 64KB. |
| `region`                                                                   | [shared.Region](../../models/shared/region.md)                             | :heavy_check_mark:                                                         | Available regions to request a game server.                                |