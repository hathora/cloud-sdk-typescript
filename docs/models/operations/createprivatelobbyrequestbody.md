# CreatePrivateLobbyRequestBody


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `initialConfig`                                                                | [components.LobbyInitialConfig](../../models/components/lobbyinitialconfig.md) | :heavy_check_mark:                                                             | User input to initialize the game state. Object must be smaller than 64KB.     |
| `region`                                                                       | [components.Region](../../models/components/region.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |