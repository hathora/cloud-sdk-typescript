<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/235110661-00e586cc-7489-4daf-82e8-7ae3c2c7143e.svg" width="350px">
    <h1> Typescript SDK</h1>
   <p>Serverless cloud hosting for multiplayer games</p>
   <a href="https://hathora.dev/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
   <a href="https://discord.com/invite/hathora"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
</div>
<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/hathora/cloud-sdk-typescript
```

### Yarn

```bash
yarn add https://github.com/hathora/cloud-sdk-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async () => {
    const sdk = new HathoraCloud({
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    const res = await sdk.appV1.createApp({
        appName: "minecraft",
        authConfiguration: {
            anonymous: {},
            google: {
                clientId: "string",
            },
            nickname: {},
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [.appV1](docs/sdks/appv1/README.md)

* [createApp](docs/sdks/appv1/README.md#createapp) - Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [deleteApp](docs/sdks/appv1/README.md#deleteapp) - Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.
* [getAppInfo](docs/sdks/appv1/README.md#getappinfo) - Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [getApps](docs/sdks/appv1/README.md#getapps) - Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
* [updateApp](docs/sdks/appv1/README.md#updateapp) - Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### [.authV1](docs/sdks/authv1/README.md)

* [loginAnonymous](docs/sdks/authv1/README.md#loginanonymous) - Returns a unique player token for an anonymous user.
* [loginGoogle](docs/sdks/authv1/README.md#logingoogle) - Returns a unique player token using a Google-signed OIDC `idToken`.
* [loginNickname](docs/sdks/authv1/README.md#loginnickname) - Returns a unique player token with a specified nickname for a user.

### [.billingV1](docs/sdks/billingv1/README.md)

* [getBalance](docs/sdks/billingv1/README.md#getbalance)
* [getInvoices](docs/sdks/billingv1/README.md#getinvoices)
* [getPaymentMethod](docs/sdks/billingv1/README.md#getpaymentmethod)
* [initStripeCustomerPortalUrl](docs/sdks/billingv1/README.md#initstripecustomerportalurl)

### [.buildV1](docs/sdks/buildv1/README.md)

* [createBuild](docs/sdks/buildv1/README.md#createbuild) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
* [deleteBuild](docs/sdks/buildv1/README.md#deletebuild) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
* [getBuildInfo](docs/sdks/buildv1/README.md#getbuildinfo) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [getBuilds](docs/sdks/buildv1/README.md#getbuilds) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [runBuild](docs/sdks/buildv1/README.md#runbuild) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).

### [.deploymentV1](docs/sdks/deploymentv1/README.md)

* [createDeployment](docs/sdks/deploymentv1/README.md#createdeployment) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
* [getDeploymentInfo](docs/sdks/deploymentv1/README.md#getdeploymentinfo) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
* [getDeployments](docs/sdks/deploymentv1/README.md#getdeployments) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).

### [.discoveryV1](docs/sdks/discoveryv1/README.md)

* [getPingServiceEndpoints](docs/sdks/discoveryv1/README.md#getpingserviceendpoints) - Returns an array of all regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back.

### [.lobbyV1](docs/sdks/lobbyv1/README.md)

* [~~createPrivateLobbyDeprecated~~](docs/sdks/lobbyv1/README.md#createprivatelobbydeprecated) - :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](docs/sdks/lobbyv1/README.md#createpubliclobbydeprecated) - :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV1~~](docs/sdks/lobbyv1/README.md#listactivepubliclobbiesdeprecatedv1) - :warning: **Deprecated**

### [.lobbyV2](docs/sdks/lobbyv2/README.md)

* [createLobbyDeprecated](docs/sdks/lobbyv2/README.md#createlobbydeprecated) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
* [~~createLocalLobby~~](docs/sdks/lobbyv2/README.md#createlocallobby) - :warning: **Deprecated**
* [~~createPrivateLobby~~](docs/sdks/lobbyv2/README.md#createprivatelobby) - :warning: **Deprecated**
* [~~createPublicLobby~~](docs/sdks/lobbyv2/README.md#createpubliclobby) - :warning: **Deprecated**
* [getLobbyInfo](docs/sdks/lobbyv2/README.md#getlobbyinfo) - Get details for a lobby.
* [listActivePublicLobbiesDeprecatedV2](docs/sdks/lobbyv2/README.md#listactivepubliclobbiesdeprecatedv2) - Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.
* [setLobbyState](docs/sdks/lobbyv2/README.md#setlobbystate) - Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).

### [.lobbyV3](docs/sdks/lobbyv3/README.md)

* [createLobby](docs/sdks/lobbyv3/README.md#createlobby) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
* [getLobbyInfoByRoomId](docs/sdks/lobbyv3/README.md#getlobbyinfobyroomid) - Get details for a lobby.
* [getLobbyInfoByShortCode](docs/sdks/lobbyv3/README.md#getlobbyinfobyshortcode) - Get details for a lobby. If 2 or more lobbies have the same `shortCode`, then the most recently created lobby will be returned.
* [listActivePublicLobbies](docs/sdks/lobbyv3/README.md#listactivepubliclobbies) - Get all active lobbies for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.

### [.logV1](docs/sdks/logv1/README.md)

* [~~getLogsForApp~~](docs/sdks/logv1/README.md#getlogsforapp) - Returns a stream of logs for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. :warning: **Deprecated**
* [~~getLogsForDeployment~~](docs/sdks/logv1/README.md#getlogsfordeployment) - Returns a stream of logs for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId` and `deploymentId`. :warning: **Deprecated**
* [getLogsForProcess](docs/sdks/logv1/README.md#getlogsforprocess) - Returns a stream of logs for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### [.managementV1](docs/sdks/managementv1/README.md)

* [sendVerificationEmail](docs/sdks/managementv1/README.md#sendverificationemail)

### [.metricsV1](docs/sdks/metricsv1/README.md)

* [getMetrics](docs/sdks/metricsv1/README.md#getmetrics) - Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### [.processesV1](docs/sdks/processesv1/README.md)

* [getProcessInfo](docs/sdks/processesv1/README.md#getprocessinfo) - Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [getRunningProcesses](docs/sdks/processesv1/README.md#getrunningprocesses) - Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
* [getStoppedProcesses](docs/sdks/processesv1/README.md#getstoppedprocesses) - Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.

### [.roomV1](docs/sdks/roomv1/README.md)

* [~~createRoomDeprecated~~](docs/sdks/roomv1/README.md#createroomdeprecated) - :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](docs/sdks/roomv1/README.md#destroyroomdeprecated) - :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](docs/sdks/roomv1/README.md#getactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](docs/sdks/roomv1/README.md#getconnectioninfodeprecated) - :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](docs/sdks/roomv1/README.md#getinactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](docs/sdks/roomv1/README.md#getroominfodeprecated) - :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](docs/sdks/roomv1/README.md#suspendroomdeprecated) - :warning: **Deprecated**

### [.roomV2](docs/sdks/roomv2/README.md)

* [createRoom](docs/sdks/roomv2/README.md#createroom) - Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application). Poll the [`GetConnectionInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetConnectionInfo) endpoint to get connection details for an active room.
* [destroyRoom](docs/sdks/roomv2/README.md#destroyroom) - Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room). All associated metadata is deleted.
* [getActiveRoomsForProcess](docs/sdks/roomv2/README.md#getactiveroomsforprocess) - Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [getConnectionInfo](docs/sdks/roomv2/README.md#getconnectioninfo) - Poll this endpoint to get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room). Clients can call this endpoint without authentication.
* [getInactiveRoomsForProcess](docs/sdks/roomv2/README.md#getinactiveroomsforprocess) - Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [getRoomInfo](docs/sdks/roomv2/README.md#getroominfo) - Retreive current and historical allocation data for a [room](https://hathora.dev/docs/concepts/hathora-entities#room).
* [suspendRoom](docs/sdks/roomv2/README.md#suspendroom) - Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room). The room is unallocated from the process but can be rescheduled later using the same `roomId`.
* [updateRoomConfig](docs/sdks/roomv2/README.md#updateroomconfig)
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |


## Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async () => {
    const sdk = new HathoraCloud({
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    let res;
    try {
        res = await sdk.appV1.createApp({
            appName: "minecraft",
            authConfiguration: {
                anonymous: {},
                google: {
                    clientId: "string",
                },
                nickname: {},
            },
        });
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.hathora.dev` | None |
| 1 | `https:///` | None |

For example:

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async () => {
    const sdk = new HathoraCloud({
        serverIdx: 1,
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    const res = await sdk.appV1.createApp({
        appName: "minecraft",
        authConfiguration: {
            anonymous: {},
            google: {
                clientId: "string",
            },
            nickname: {},
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async () => {
    const sdk = new HathoraCloud({
        serverURL: "https://api.hathora.dev",
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    const res = await sdk.appV1.createApp({
        appName: "minecraft",
        authConfiguration: {
            anonymous: {},
            google: {
                clientId: "string",
            },
            nickname: {},
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @hathora/cloud-sdk-typescript import HathoraCloud;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new HathoraCloud({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
# Authentication

## Per-Client Security Schemes

Your SDK supports the following security scheme globally:

| Name              | Type              | Scheme            |
| ----------------- | ----------------- | ----------------- |
| `hathoraDevToken` | http              | HTTP Bearer       |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async () => {
    const sdk = new HathoraCloud({
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    const res = await sdk.appV1.createApp({
        appName: "minecraft",
        authConfiguration: {
            anonymous: {},
            google: {
                clientId: "string",
            },
            nickname: {},
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```

## Per-Operation Security Schemes

Some operations in your SDK require the security scheme to be specified at the request level. For example:

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import {
    CreatePrivateLobbyDeprecatedRequest,
    CreatePrivateLobbyDeprecatedSecurity,
} from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { Region } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

(async () => {
    const sdk = new HathoraCloud({
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });
    const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
    const local: boolean = false;
    const region: Region = Region.London;
    const operationSecurity: CreatePrivateLobbyDeprecatedSecurity = {
        playerAuth: "",
    };

    const res = await sdk.lobbyV1.createPrivateLobbyDeprecated(
        operationSecurity,
        appId,
        local,
        region
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->



<!-- Start Global Parameters -->
# Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `appId` to `"app-af469a92-5b45-4565-b3c4-b79878de67d2"` at SDK initialization and then you do not have to pass the same value on calls to operations like `deleteApp`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


## Available Globals

The following global parameter is available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| appId | string |  | The appId parameter. |



## Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { DeleteAppRequest } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

(async () => {
    const sdk = new HathoraCloud({
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });
    const appId: string = "app-af469a92-5b45-4565-b3c4-b79878de67d2";

    const res = await sdk.appV1.deleteApp(appId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```

<!-- End Global Parameters -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
