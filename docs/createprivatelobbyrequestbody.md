# CreatePrivateLobbyRequestBody


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `initialConfig`                                                            | [models.LobbyInitialConfig](../models/lobbyinitialconfig.md)               | :heavy_check_mark:                                                         | User input to initialize the game state. Object must be smaller than 64KB. |
| `region`                                                                   | [models.Region](../models/region.md)                                       | :heavy_check_mark:                                                         | N/A                                                                        |