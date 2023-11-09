# ConnectionInfoV2

Connection information for the default and additional ports.


## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `additionalExposedPorts`                                                                                                                                                          | [shared.ExposedPort](../../../sdk/models/shared/exposedport.md)[]                                                                                                                 | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               | [object Object]                                                                                                                                                                   |
| `exposedPort`                                                                                                                                                                     | [shared.ExposedPort](../../../sdk/models/shared/exposedport.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                | Connection details for an active process.                                                                                                                                         |                                                                                                                                                                                   |
| `roomId`                                                                                                                                                                          | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.<br/>Note: error will be returned if `roomId` is not globally unique. | 2swovpy1fnunu                                                                                                                                                                     |
| `status`                                                                                                                                                                          | [shared.ConnectionInfoV2Status](../../../sdk/models/shared/connectioninfov2status.md)                                                                                             | :heavy_check_mark:                                                                                                                                                                | `exposedPort` will only be available when the `status` of a room is "active".                                                                                                     | active                                                                                                                                                                            |