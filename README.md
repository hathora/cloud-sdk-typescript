# @hathora/cloud-sdk-typescript

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
import { CreateAppResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.createApp({
  appName: "minecraft",
  authConfiguration: {
    anonymous: {},
    google: {
      clientId: "corrupti",
    },
    nickname: {},
  },
}, {
  auth0: "",
}).then((res: CreateAppResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [appV1](docs/sdks/appv1/README.md)

* [createApp](docs/sdks/appv1/README.md#createapp) - Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [deleteApp](docs/sdks/appv1/README.md#deleteapp) - Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.
* [getAppInfo](docs/sdks/appv1/README.md#getappinfo) - Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [getApps](docs/sdks/appv1/README.md#getapps) - Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
* [updateApp](docs/sdks/appv1/README.md#updateapp) - Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### [authV1](docs/sdks/authv1/README.md)

* [loginAnonymous](docs/sdks/authv1/README.md#loginanonymous)
* [loginGoogle](docs/sdks/authv1/README.md#logingoogle)
* [loginNickname](docs/sdks/authv1/README.md#loginnickname)

### [billingV1](docs/sdks/billingv1/README.md)

* [getBalance](docs/sdks/billingv1/README.md#getbalance)
* [getInvoices](docs/sdks/billingv1/README.md#getinvoices)
* [getPaymentMethod](docs/sdks/billingv1/README.md#getpaymentmethod)
* [initStripeCustomerPortalUrl](docs/sdks/billingv1/README.md#initstripecustomerportalurl)

### [buildV1](docs/sdks/buildv1/README.md)

* [createBuild](docs/sdks/buildv1/README.md#createbuild) - Generate a new `buildId` for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. You need `buildId` to run a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [deleteBuild](docs/sdks/buildv1/README.md#deletebuild) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `buildId`.
* [getBuildInfo](docs/sdks/buildv1/README.md#getbuildinfo) - Get details for an existing [build](https://hathora.dev/docs/concepts/hathora-entities#build) using `appId` and `buildId`.
* [getBuilds](docs/sdks/buildv1/README.md#getbuilds) - Returns an array of [build](https://hathora.dev/docs/concepts/hathora-entities#build) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [runBuild](docs/sdks/buildv1/README.md#runbuild) - Provide a tarball that will generate a container image for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Pass in `buildId` generated from Create Build.

### [deploymentV1](docs/sdks/deploymentv1/README.md)

* [createDeployment](docs/sdks/deploymentv1/README.md#createdeployment) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) and [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [getDeploymentInfo](docs/sdks/deploymentv1/README.md#getdeploymentinfo) - Get details for an existing [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId`.
* [getDeployments](docs/sdks/deploymentv1/README.md#getdeployments) - Returns an array of [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### [discoveryV1](docs/sdks/discoveryv1/README.md)

* [getPingServiceEndpoints](docs/sdks/discoveryv1/README.md#getpingserviceendpoints) - Returns an array of all regions with a host and port that a client can directly ping.

### [lobbyV1](docs/sdks/lobbyv1/README.md)

* [~~createPrivateLobbyDeprecated~~](docs/sdks/lobbyv1/README.md#createprivatelobbydeprecated) - :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](docs/sdks/lobbyv1/README.md#createpubliclobbydeprecated) - :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecated~~](docs/sdks/lobbyv1/README.md#listactivepubliclobbiesdeprecated) - :warning: **Deprecated**

### [lobbyV2](docs/sdks/lobbyv2/README.md)

* [createLobby](docs/sdks/lobbyv2/README.md#createlobby) - Create a new [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [~~createLocalLobby~~](docs/sdks/lobbyv2/README.md#createlocallobby) - :warning: **Deprecated**
* [~~createPrivateLobby~~](docs/sdks/lobbyv2/README.md#createprivatelobby) - :warning: **Deprecated**
* [~~createPublicLobby~~](docs/sdks/lobbyv2/README.md#createpubliclobby) - :warning: **Deprecated**
* [getLobbyInfo](docs/sdks/lobbyv2/README.md#getlobbyinfo) - Get details for an existing [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) using `appId` and `roomId`.
* [listActivePublicLobbies](docs/sdks/lobbyv2/README.md#listactivepubliclobbies) - Get all active [lobbies](https://hathora.dev/docs/concepts/hathora-entities#lobby) for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a `region`.
* [setLobbyState](docs/sdks/lobbyv2/README.md#setlobbystate) - Set the state of a [lobby](https://hathora.dev/docs/concepts/hathora-entities#lobby) using `appId` and `roomId`. State is intended to be set by the server and must be smaller than 1MB.

### [logV1](docs/sdks/logv1/README.md)

* [getLogsForApp](docs/sdks/logv1/README.md#getlogsforapp) - Returns a stream of logs for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [getLogsForDeployment](docs/sdks/logv1/README.md#getlogsfordeployment) - Returns a stream of logs for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId` and `deploymentId`.
* [getLogsForProcess](docs/sdks/logv1/README.md#getlogsforprocess) - Returns a stream of logs for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### [managementV1](docs/sdks/managementv1/README.md)

* [sendVerificationEmail](docs/sdks/managementv1/README.md#sendverificationemail)

### [metricsV1](docs/sdks/metricsv1/README.md)

* [getMetrics](docs/sdks/metricsv1/README.md#getmetrics) - Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### [processesV1](docs/sdks/processesv1/README.md)

* [getProcessInfo](docs/sdks/processesv1/README.md#getprocessinfo) - Get details for an existing [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [getRunningProcesses](docs/sdks/processesv1/README.md#getrunningprocesses) - Returns an array of active [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a region.
* [getStoppedProcesses](docs/sdks/processesv1/README.md#getstoppedprocesses) - Returns an array of stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Filter the array by optionally passing in a region.

### [roomV1](docs/sdks/roomv1/README.md)

* [~~createRoomDeprecated~~](docs/sdks/roomv1/README.md#createroomdeprecated) - :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](docs/sdks/roomv1/README.md#destroyroomdeprecated) - :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](docs/sdks/roomv1/README.md#getactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](docs/sdks/roomv1/README.md#getconnectioninfodeprecated) - :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](docs/sdks/roomv1/README.md#getinactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](docs/sdks/roomv1/README.md#getroominfodeprecated) - :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](docs/sdks/roomv1/README.md#suspendroomdeprecated) - :warning: **Deprecated**

### [roomV2](docs/sdks/roomv2/README.md)

* [createRoom](docs/sdks/roomv2/README.md#createroom) - Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId` and `region`.
* [destroyRoom](docs/sdks/roomv2/README.md#destroyroom) - Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. All associated metadata is deleted.
* [getActiveRoomsForProcess](docs/sdks/roomv2/README.md#getactiveroomsforprocess) - Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [getConnectionInfo](docs/sdks/roomv2/README.md#getconnectioninfo) - Get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. Clients can call this endpoint without authentication.
* [getInactiveRoomsForProcess](docs/sdks/roomv2/README.md#getinactiveroomsforprocess) - Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [getRoomInfo](docs/sdks/roomv2/README.md#getroominfo) - Get details for an existing [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`.
* [suspendRoom](docs/sdks/roomv2/README.md#suspendroom) - Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room) using `appId` and `roomId`. The room is unallocated from the process but can be rescheduled later using the same `roomId`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
