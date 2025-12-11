<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/235110661-00e586cc-7489-4daf-82e8-7ae3c2c7143e.svg" width="350px">
    <h1> Typescript SDK</h1>
   <p>Serverless cloud hosting for multiplayer games</p>
   <a href="https://hathora.dev/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
   <a href="https://discord.com/invite/hathora"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
</div>

<!-- Start Summary [summary] -->
## Summary

Hathora Cloud API: Welcome to the Hathora Cloud API documentation! Learn how to use the Hathora Cloud APIs to build and scale your game servers globally.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Requirements](#requirements)
  * [Retries](#retries)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @hathora/cloud-sdk-typescript
```

### PNPM

```bash
pnpm add @hathora/cloud-sdk-typescript
```

### Bun

```bash
bun add @hathora/cloud-sdk-typescript
```

### Yarn

```bash
yarn add @hathora/cloud-sdk-typescript
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [~~AppsV1~~](docs/sdks/appsv1/README.md)

* [~~getAppsV1Deprecated~~](docs/sdks/appsv1/README.md#getappsv1deprecated) - GetAppsV1Deprecated :warning: **Deprecated**
* [~~createAppV1Deprecated~~](docs/sdks/appsv1/README.md#createappv1deprecated) - CreateAppV1Deprecated :warning: **Deprecated**
* [~~updateAppV1Deprecated~~](docs/sdks/appsv1/README.md#updateappv1deprecated) - UpdateAppV1Deprecated :warning: **Deprecated**
* [~~getAppInfoV1Deprecated~~](docs/sdks/appsv1/README.md#getappinfov1deprecated) - GetAppInfoV1Deprecated :warning: **Deprecated**
* [~~deleteAppV1Deprecated~~](docs/sdks/appsv1/README.md#deleteappv1deprecated) - DeleteAppV1Deprecated :warning: **Deprecated**

### [AppsV2](docs/sdks/appsv2/README.md)

* [getApps](docs/sdks/appsv2/README.md#getapps) - GetApps
* [createApp](docs/sdks/appsv2/README.md#createapp) - CreateApp
* [updateApp](docs/sdks/appsv2/README.md#updateapp) - UpdateApp
* [patchApp](docs/sdks/appsv2/README.md#patchapp) - PatchApp
* [getApp](docs/sdks/appsv2/README.md#getapp) - GetApp
* [deleteApp](docs/sdks/appsv2/README.md#deleteapp) - DeleteApp

### [AuthV1](docs/sdks/authv1/README.md)

* [loginAnonymous](docs/sdks/authv1/README.md#loginanonymous) - LoginAnonymous
* [loginNickname](docs/sdks/authv1/README.md#loginnickname) - LoginNickname
* [loginGoogle](docs/sdks/authv1/README.md#logingoogle) - LoginGoogle

### [BillingV1](docs/sdks/billingv1/README.md)

* [~~getBalance~~](docs/sdks/billingv1/README.md#getbalance) - GetBalance :warning: **Deprecated**
* [getUpcomingInvoiceItems](docs/sdks/billingv1/README.md#getupcominginvoiceitems) - GetUpcomingInvoiceItems
* [getUpcomingInvoiceTotal](docs/sdks/billingv1/README.md#getupcominginvoicetotal) - GetUpcomingInvoiceTotal
* [getPaymentMethod](docs/sdks/billingv1/README.md#getpaymentmethod) - GetPaymentMethod
* [initStripeCustomerPortalUrl](docs/sdks/billingv1/README.md#initstripecustomerportalurl) - InitStripeCustomerPortalUrl
* [getInvoices](docs/sdks/billingv1/README.md#getinvoices) - GetInvoices

### [~~BuildsV1~~](docs/sdks/buildsv1/README.md)

* [~~getBuildsDeprecated~~](docs/sdks/buildsv1/README.md#getbuildsdeprecated) - GetBuildsDeprecated :warning: **Deprecated**
* [~~getBuildInfoDeprecated~~](docs/sdks/buildsv1/README.md#getbuildinfodeprecated) - GetBuildInfoDeprecated :warning: **Deprecated**
* [~~createBuildDeprecated~~](docs/sdks/buildsv1/README.md#createbuilddeprecated) - CreateBuildDeprecated :warning: **Deprecated**
* [~~deleteBuildDeprecated~~](docs/sdks/buildsv1/README.md#deletebuilddeprecated) - DeleteBuildDeprecated :warning: **Deprecated**
* [~~runBuildDeprecated~~](docs/sdks/buildsv1/README.md#runbuilddeprecated) - RunBuildDeprecated :warning: **Deprecated**

### [~~BuildsV2~~](docs/sdks/buildsv2/README.md)

* [~~getBuildsV2Deprecated~~](docs/sdks/buildsv2/README.md#getbuildsv2deprecated) - GetBuildsV2Deprecated :warning: **Deprecated**
* [~~getBuildInfoV2Deprecated~~](docs/sdks/buildsv2/README.md#getbuildinfov2deprecated) - GetBuildInfoV2Deprecated :warning: **Deprecated**
* [~~createBuildV2Deprecated~~](docs/sdks/buildsv2/README.md#createbuildv2deprecated) - CreateBuildV2Deprecated :warning: **Deprecated**
* [~~createBuildWithUploadUrlV2Deprecated~~](docs/sdks/buildsv2/README.md#createbuildwithuploadurlv2deprecated) - CreateBuildWithUploadUrlV2Deprecated :warning: **Deprecated**
* [~~createWithMultipartUploadsV2Deprecated~~](docs/sdks/buildsv2/README.md#createwithmultipartuploadsv2deprecated) - CreateWithMultipartUploadsV2Deprecated :warning: **Deprecated**
* [~~deleteBuildV2Deprecated~~](docs/sdks/buildsv2/README.md#deletebuildv2deprecated) - DeleteBuildV2Deprecated :warning: **Deprecated**
* [~~runBuildV2Deprecated~~](docs/sdks/buildsv2/README.md#runbuildv2deprecated) - RunBuildV2Deprecated :warning: **Deprecated**

### [BuildsV3](docs/sdks/buildsv3/README.md)

* [getBuilds](docs/sdks/buildsv3/README.md#getbuilds) - GetBuilds
* [createBuild](docs/sdks/buildsv3/README.md#createbuild) - CreateBuild
* [getBuild](docs/sdks/buildsv3/README.md#getbuild) - GetBuild
* [deleteBuild](docs/sdks/buildsv3/README.md#deletebuild) - DeleteBuild
* [createBuildRegistry](docs/sdks/buildsv3/README.md#createbuildregistry) - CreateBuildRegistry
* [runBuild](docs/sdks/buildsv3/README.md#runbuild) - RunBuild
* [runBuildRegistry](docs/sdks/buildsv3/README.md#runbuildregistry) - RunBuildRegistry

### [~~DeploymentsV1~~](docs/sdks/deploymentsv1/README.md)

* [~~getDeploymentsV1Deprecated~~](docs/sdks/deploymentsv1/README.md#getdeploymentsv1deprecated) - GetDeploymentsV1Deprecated :warning: **Deprecated**
* [~~getLatestDeploymentV1Deprecated~~](docs/sdks/deploymentsv1/README.md#getlatestdeploymentv1deprecated) - GetLatestDeploymentV1Deprecated :warning: **Deprecated**
* [~~getDeploymentInfoV1Deprecated~~](docs/sdks/deploymentsv1/README.md#getdeploymentinfov1deprecated) - GetDeploymentInfoV1Deprecated :warning: **Deprecated**
* [~~createDeploymentV1Deprecated~~](docs/sdks/deploymentsv1/README.md#createdeploymentv1deprecated) - CreateDeploymentV1Deprecated :warning: **Deprecated**

### [~~DeploymentsV2~~](docs/sdks/deploymentsv2/README.md)

* [~~getDeploymentsV2Deprecated~~](docs/sdks/deploymentsv2/README.md#getdeploymentsv2deprecated) - GetDeploymentsV2Deprecated :warning: **Deprecated**
* [~~getLatestDeploymentV2Deprecated~~](docs/sdks/deploymentsv2/README.md#getlatestdeploymentv2deprecated) - GetLatestDeploymentV2Deprecated :warning: **Deprecated**
* [~~getDeploymentInfoV2Deprecated~~](docs/sdks/deploymentsv2/README.md#getdeploymentinfov2deprecated) - GetDeploymentInfoV2Deprecated :warning: **Deprecated**
* [~~createDeploymentV2Deprecated~~](docs/sdks/deploymentsv2/README.md#createdeploymentv2deprecated) - CreateDeploymentV2Deprecated :warning: **Deprecated**

### [DeploymentsV3](docs/sdks/deploymentsv3/README.md)

* [getDeployments](docs/sdks/deploymentsv3/README.md#getdeployments) - GetDeployments
* [createDeployment](docs/sdks/deploymentsv3/README.md#createdeployment) - CreateDeployment
* [getLatestDeployment](docs/sdks/deploymentsv3/README.md#getlatestdeployment) - GetLatestDeployment
* [getDeployment](docs/sdks/deploymentsv3/README.md#getdeployment) - GetDeployment

### [~~DiscoveryV1~~](docs/sdks/discoveryv1/README.md)

* [~~getPingServiceEndpointsDeprecated~~](docs/sdks/discoveryv1/README.md#getpingserviceendpointsdeprecated) - GetPingServiceEndpointsDeprecated :warning: **Deprecated**

### [DiscoveryV2](docs/sdks/discoveryv2/README.md)

* [getPingServiceEndpoints](docs/sdks/discoveryv2/README.md#getpingserviceendpoints) - GetPingServiceEndpoints

### [FleetsV1](docs/sdks/fleetsv1/README.md)

* [getFleetsDeprecated](docs/sdks/fleetsv1/README.md#getfleetsdeprecated) - GetFleetsDeprecated
* [createFleetDeprecated](docs/sdks/fleetsv1/README.md#createfleetdeprecated) - CreateFleetDeprecated
* [getFleetDeprecated](docs/sdks/fleetsv1/README.md#getfleetdeprecated) - GetFleetDeprecated
* [updateFleetDeprecated](docs/sdks/fleetsv1/README.md#updatefleetdeprecated) - UpdateFleetDeprecated
* [getFleetRegionDeprecated](docs/sdks/fleetsv1/README.md#getfleetregiondeprecated) - GetFleetRegionDeprecated
* [updateFleetRegionDeprecated](docs/sdks/fleetsv1/README.md#updatefleetregiondeprecated) - UpdateFleetRegionDeprecated
* [getFleetMetricsDeprecated](docs/sdks/fleetsv1/README.md#getfleetmetricsdeprecated) - GetFleetMetricsDeprecated
* [getFleetRegionMetricsDeprecated](docs/sdks/fleetsv1/README.md#getfleetregionmetricsdeprecated) - GetFleetRegionMetricsDeprecated

### [FleetsV2](docs/sdks/fleetsv2/README.md)

* [getNodeShapes](docs/sdks/fleetsv2/README.md#getnodeshapes) - GetNodeShapes
* [getFleets](docs/sdks/fleetsv2/README.md#getfleets) - GetFleets
* [createFleet](docs/sdks/fleetsv2/README.md#createfleet) - CreateFleet
* [getFleet](docs/sdks/fleetsv2/README.md#getfleet) - GetFleet
* [updateFleet](docs/sdks/fleetsv2/README.md#updatefleet) - UpdateFleet
* [getFleetRegion](docs/sdks/fleetsv2/README.md#getfleetregion) - GetFleetRegion
* [~~deprecatedUpdateFleetRegionV2~~](docs/sdks/fleetsv2/README.md#deprecatedupdatefleetregionv2) - DeprecatedUpdateFleetRegionV2 :warning: **Deprecated**
* [updateFleetRegion](docs/sdks/fleetsv2/README.md#updatefleetregion) - UpdateFleetRegion
* [getFleetMetrics](docs/sdks/fleetsv2/README.md#getfleetmetrics) - GetFleetMetrics
* [getFleetRegionMetrics](docs/sdks/fleetsv2/README.md#getfleetregionmetrics) - GetFleetRegionMetrics

### [~~LobbiesV1~~](docs/sdks/lobbiesv1/README.md)

* [~~createPrivateLobbyDeprecated~~](docs/sdks/lobbiesv1/README.md#createprivatelobbydeprecated) - CreatePrivateLobbyDeprecated :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](docs/sdks/lobbiesv1/README.md#createpubliclobbydeprecated) - CreatePublicLobbyDeprecated :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV1~~](docs/sdks/lobbiesv1/README.md#listactivepubliclobbiesdeprecatedv1) - ListActivePublicLobbiesDeprecatedV1 :warning: **Deprecated**

### [~~LobbiesV2~~](docs/sdks/lobbiesv2/README.md)

* [~~createPrivateLobby~~](docs/sdks/lobbiesv2/README.md#createprivatelobby) - CreatePrivateLobby :warning: **Deprecated**
* [~~createPublicLobby~~](docs/sdks/lobbiesv2/README.md#createpubliclobby) - CreatePublicLobby :warning: **Deprecated**
* [~~createLocalLobby~~](docs/sdks/lobbiesv2/README.md#createlocallobby) - CreateLocalLobby :warning: **Deprecated**
* [~~createLobbyDeprecated~~](docs/sdks/lobbiesv2/README.md#createlobbydeprecated) - CreateLobbyDeprecated :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV2~~](docs/sdks/lobbiesv2/README.md#listactivepubliclobbiesdeprecatedv2) - ListActivePublicLobbiesDeprecatedV2 :warning: **Deprecated**
* [~~getLobbyInfo~~](docs/sdks/lobbiesv2/README.md#getlobbyinfo) - GetLobbyInfo :warning: **Deprecated**
* [~~setLobbyState~~](docs/sdks/lobbiesv2/README.md#setlobbystate) - SetLobbyState :warning: **Deprecated**

### [LobbiesV3](docs/sdks/lobbiesv3/README.md)

* [createLobby](docs/sdks/lobbiesv3/README.md#createlobby) - CreateLobby
* [listActivePublicLobbies](docs/sdks/lobbiesv3/README.md#listactivepubliclobbies) - ListActivePublicLobbies
* [getLobbyInfoByRoomId](docs/sdks/lobbiesv3/README.md#getlobbyinfobyroomid) - GetLobbyInfoByRoomId
* [getLobbyInfoByShortCode](docs/sdks/lobbiesv3/README.md#getlobbyinfobyshortcode) - GetLobbyInfoByShortCode

### [LogsV1](docs/sdks/logsv1/README.md)

* [getLogsForProcess](docs/sdks/logsv1/README.md#getlogsforprocess) - GetLogsForProcess
* [downloadLogForProcess](docs/sdks/logsv1/README.md#downloadlogforprocess) - DownloadLogForProcess

### [ManagementV1](docs/sdks/managementv1/README.md)

* [sendVerificationEmail](docs/sdks/managementv1/README.md#sendverificationemail) - SendVerificationEmail

### [~~MetricsV1~~](docs/sdks/metricsv1/README.md)

* [~~getMetricsDeprecated~~](docs/sdks/metricsv1/README.md#getmetricsdeprecated) - GetMetricsDeprecated :warning: **Deprecated**

### [NodesV1](docs/sdks/nodesv1/README.md)

* [getNode](docs/sdks/nodesv1/README.md#getnode) - GetNode
* [listProvisionedNodes](docs/sdks/nodesv1/README.md#listprovisionednodes) - ListProvisionedNodes

### [OrganizationsV1](docs/sdks/organizationsv1/README.md)

* [getOrgs](docs/sdks/organizationsv1/README.md#getorgs) - GetOrgs
* [getUserPendingInvites](docs/sdks/organizationsv1/README.md#getuserpendinginvites) - GetUserPendingInvites
* [getOrgMembers](docs/sdks/organizationsv1/README.md#getorgmembers) - GetOrgMembers
* [inviteUser](docs/sdks/organizationsv1/README.md#inviteuser) - InviteUser
* [updateUserInvite](docs/sdks/organizationsv1/README.md#updateuserinvite) - UpdateUserInvite
* [rescindInvite](docs/sdks/organizationsv1/README.md#rescindinvite) - RescindInvite
* [getOrgPendingInvites](docs/sdks/organizationsv1/README.md#getorgpendinginvites) - GetOrgPendingInvites
* [acceptInvite](docs/sdks/organizationsv1/README.md#acceptinvite) - AcceptInvite
* [rejectInvite](docs/sdks/organizationsv1/README.md#rejectinvite) - RejectInvite
* [getUsageLimits](docs/sdks/organizationsv1/README.md#getusagelimits) - GetUsageLimits

### [~~ProcessesV1~~](docs/sdks/processesv1/README.md)

* [~~getRunningProcesses~~](docs/sdks/processesv1/README.md#getrunningprocesses) - GetRunningProcesses :warning: **Deprecated**
* [~~getStoppedProcesses~~](docs/sdks/processesv1/README.md#getstoppedprocesses) - GetStoppedProcesses :warning: **Deprecated**
* [~~getProcessInfoDeprecated~~](docs/sdks/processesv1/README.md#getprocessinfodeprecated) - GetProcessInfoDeprecated :warning: **Deprecated**

### [~~ProcessesV2~~](docs/sdks/processesv2/README.md)

* [~~getProcessInfoV2Deprecated~~](docs/sdks/processesv2/README.md#getprocessinfov2deprecated) - GetProcessInfoV2Deprecated :warning: **Deprecated**
* [~~getLatestProcessesV2Deprecated~~](docs/sdks/processesv2/README.md#getlatestprocessesv2deprecated) - GetLatestProcessesV2Deprecated :warning: **Deprecated**
* [~~getProcessesCountExperimentalV2Deprecated~~](docs/sdks/processesv2/README.md#getprocessescountexperimentalv2deprecated) - GetProcessesCountExperimentalV2Deprecated :warning: **Deprecated**
* [~~stopProcessV2Deprecated~~](docs/sdks/processesv2/README.md#stopprocessv2deprecated) - StopProcessV2Deprecated :warning: **Deprecated**
* [~~createProcessV2Deprecated~~](docs/sdks/processesv2/README.md#createprocessv2deprecated) - CreateProcessV2Deprecated :warning: **Deprecated**

### [ProcessesV3](docs/sdks/processesv3/README.md)

* [getLatestProcesses](docs/sdks/processesv3/README.md#getlatestprocesses) - GetLatestProcesses
* [getProcessesCountExperimental](docs/sdks/processesv3/README.md#getprocessescountexperimental) - GetProcessesCountExperimental
* [createProcess](docs/sdks/processesv3/README.md#createprocess) - CreateProcess
* [getProcess](docs/sdks/processesv3/README.md#getprocess) - GetProcess
* [stopProcess](docs/sdks/processesv3/README.md#stopprocess) - StopProcess
* [getProcessMetrics](docs/sdks/processesv3/README.md#getprocessmetrics) - GetProcessMetrics

### [~~RoomsV1~~](docs/sdks/roomsv1/README.md)

* [~~createRoomDeprecated~~](docs/sdks/roomsv1/README.md#createroomdeprecated) - CreateRoomDeprecated :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](docs/sdks/roomsv1/README.md#getroominfodeprecated) - GetRoomInfoDeprecated :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](docs/sdks/roomsv1/README.md#getactiveroomsforprocessdeprecated) - GetActiveRoomsForProcessDeprecated :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](docs/sdks/roomsv1/README.md#getinactiveroomsforprocessdeprecated) - GetInactiveRoomsForProcessDeprecated :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](docs/sdks/roomsv1/README.md#destroyroomdeprecated) - DestroyRoomDeprecated :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](docs/sdks/roomsv1/README.md#suspendroomdeprecated) - SuspendRoomDeprecated :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](docs/sdks/roomsv1/README.md#getconnectioninfodeprecated) - GetConnectionInfoDeprecated :warning: **Deprecated**

### [RoomsV2](docs/sdks/roomsv2/README.md)

* [createRoom](docs/sdks/roomsv2/README.md#createroom) - CreateRoom
* [getRoomInfo](docs/sdks/roomsv2/README.md#getroominfo) - GetRoomInfo
* [getActiveRoomsForProcess](docs/sdks/roomsv2/README.md#getactiveroomsforprocess) - GetActiveRoomsForProcess
* [getInactiveRoomsForProcess](docs/sdks/roomsv2/README.md#getinactiveroomsforprocess) - GetInactiveRoomsForProcess
* [destroyRoom](docs/sdks/roomsv2/README.md#destroyroom) - DestroyRoom
* [~~suspendRoomV2Deprecated~~](docs/sdks/roomsv2/README.md#suspendroomv2deprecated) - SuspendRoomV2Deprecated :warning: **Deprecated**
* [getConnectionInfo](docs/sdks/roomsv2/README.md#getconnectioninfo) - GetConnectionInfo
* [updateRoomConfig](docs/sdks/roomsv2/README.md#updateroomconfig) - UpdateRoomConfig
* [resumeRoom](docs/sdks/roomsv2/README.md#resumeroom) - ResumeRoom

### [TokensV1](docs/sdks/tokensv1/README.md)

* [getOrgTokens](docs/sdks/tokensv1/README.md#getorgtokens) - GetOrgTokens
* [createOrgToken](docs/sdks/tokensv1/README.md#createorgtoken) - CreateOrgToken
* [revokeOrgToken](docs/sdks/tokensv1/README.md#revokeorgtoken) - RevokeOrgToken

</details>
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

[`HathoraCloudError`](./src/models/errors/hathoraclouderror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import * as errors from "@hathora/cloud-sdk-typescript/models/errors";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await hathoraCloud.tokensV1.getOrgTokens(
      "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    );

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.HathoraCloudError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ApiError) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`HathoraCloudError`](./src/models/errors/hathoraclouderror.ts): The base class for HTTP error responses.
  * [`ApiError`](./src/models/errors/apierror.ts): . *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`HathoraCloudError`](./src/models/errors/hathoraclouderror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                    | Description |
| --- | ------------------------- | ----------- |
| 0   | `https://api.hathora.dev` |             |
| 1   | `/`                       |             |

#### Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  serverIdx: 0,
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  serverURL: "https://api.hathora.dev",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { HTTPClient } from "@hathora/cloud-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new HathoraCloud({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name              | Type | Scheme      |
| ----------------- | ---- | ----------- |
| `hathoraDevToken` | http | HTTP Bearer |

To authenticate with the API the `hathoraDevToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.lobbiesV3.createLobby(
    {
      playerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
    {
      visibility: "private",
      roomConfig: "{\"name\":\"my-room\"}",
      region: "Dubai",
    },
    undefined,
    "LFG4",
    "2swovpy1fnunu",
  );

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->



<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`appsV2CreateApp`](docs/sdks/appsv2/README.md#createapp) - CreateApp
- [`appsV2DeleteApp`](docs/sdks/appsv2/README.md#deleteapp) - DeleteApp
- [`appsV2GetApp`](docs/sdks/appsv2/README.md#getapp) - GetApp
- [`appsV2GetApps`](docs/sdks/appsv2/README.md#getapps) - GetApps
- [`appsV2PatchApp`](docs/sdks/appsv2/README.md#patchapp) - PatchApp
- [`appsV2UpdateApp`](docs/sdks/appsv2/README.md#updateapp) - UpdateApp
- [`authV1LoginAnonymous`](docs/sdks/authv1/README.md#loginanonymous) - LoginAnonymous
- [`authV1LoginGoogle`](docs/sdks/authv1/README.md#logingoogle) - LoginGoogle
- [`authV1LoginNickname`](docs/sdks/authv1/README.md#loginnickname) - LoginNickname
- [`billingV1GetInvoices`](docs/sdks/billingv1/README.md#getinvoices) - GetInvoices
- [`billingV1GetPaymentMethod`](docs/sdks/billingv1/README.md#getpaymentmethod) - GetPaymentMethod
- [`billingV1GetUpcomingInvoiceItems`](docs/sdks/billingv1/README.md#getupcominginvoiceitems) - GetUpcomingInvoiceItems
- [`billingV1GetUpcomingInvoiceTotal`](docs/sdks/billingv1/README.md#getupcominginvoicetotal) - GetUpcomingInvoiceTotal
- [`billingV1InitStripeCustomerPortalUrl`](docs/sdks/billingv1/README.md#initstripecustomerportalurl) - InitStripeCustomerPortalUrl
- [`buildsV3CreateBuild`](docs/sdks/buildsv3/README.md#createbuild) - CreateBuild
- [`buildsV3CreateBuildRegistry`](docs/sdks/buildsv3/README.md#createbuildregistry) - CreateBuildRegistry
- [`buildsV3DeleteBuild`](docs/sdks/buildsv3/README.md#deletebuild) - DeleteBuild
- [`buildsV3GetBuild`](docs/sdks/buildsv3/README.md#getbuild) - GetBuild
- [`buildsV3GetBuilds`](docs/sdks/buildsv3/README.md#getbuilds) - GetBuilds
- [`buildsV3RunBuild`](docs/sdks/buildsv3/README.md#runbuild) - RunBuild
- [`buildsV3RunBuildRegistry`](docs/sdks/buildsv3/README.md#runbuildregistry) - RunBuildRegistry
- [`deploymentsV3CreateDeployment`](docs/sdks/deploymentsv3/README.md#createdeployment) - CreateDeployment
- [`deploymentsV3GetDeployment`](docs/sdks/deploymentsv3/README.md#getdeployment) - GetDeployment
- [`deploymentsV3GetDeployments`](docs/sdks/deploymentsv3/README.md#getdeployments) - GetDeployments
- [`deploymentsV3GetLatestDeployment`](docs/sdks/deploymentsv3/README.md#getlatestdeployment) - GetLatestDeployment
- [`discoveryV2GetPingServiceEndpoints`](docs/sdks/discoveryv2/README.md#getpingserviceendpoints) - GetPingServiceEndpoints
- [`fleetsV1CreateFleetDeprecated`](docs/sdks/fleetsv1/README.md#createfleetdeprecated) - CreateFleetDeprecated
- [`fleetsV1GetFleetDeprecated`](docs/sdks/fleetsv1/README.md#getfleetdeprecated) - GetFleetDeprecated
- [`fleetsV1GetFleetMetricsDeprecated`](docs/sdks/fleetsv1/README.md#getfleetmetricsdeprecated) - GetFleetMetricsDeprecated
- [`fleetsV1GetFleetRegionDeprecated`](docs/sdks/fleetsv1/README.md#getfleetregiondeprecated) - GetFleetRegionDeprecated
- [`fleetsV1GetFleetRegionMetricsDeprecated`](docs/sdks/fleetsv1/README.md#getfleetregionmetricsdeprecated) - GetFleetRegionMetricsDeprecated
- [`fleetsV1GetFleetsDeprecated`](docs/sdks/fleetsv1/README.md#getfleetsdeprecated) - GetFleetsDeprecated
- [`fleetsV1UpdateFleetDeprecated`](docs/sdks/fleetsv1/README.md#updatefleetdeprecated) - UpdateFleetDeprecated
- [`fleetsV1UpdateFleetRegionDeprecated`](docs/sdks/fleetsv1/README.md#updatefleetregiondeprecated) - UpdateFleetRegionDeprecated
- [`fleetsV2CreateFleet`](docs/sdks/fleetsv2/README.md#createfleet) - CreateFleet
- [`fleetsV2GetFleet`](docs/sdks/fleetsv2/README.md#getfleet) - GetFleet
- [`fleetsV2GetFleetMetrics`](docs/sdks/fleetsv2/README.md#getfleetmetrics) - GetFleetMetrics
- [`fleetsV2GetFleetRegion`](docs/sdks/fleetsv2/README.md#getfleetregion) - GetFleetRegion
- [`fleetsV2GetFleetRegionMetrics`](docs/sdks/fleetsv2/README.md#getfleetregionmetrics) - GetFleetRegionMetrics
- [`fleetsV2GetFleets`](docs/sdks/fleetsv2/README.md#getfleets) - GetFleets
- [`fleetsV2GetNodeShapes`](docs/sdks/fleetsv2/README.md#getnodeshapes) - GetNodeShapes
- [`fleetsV2UpdateFleet`](docs/sdks/fleetsv2/README.md#updatefleet) - UpdateFleet
- [`fleetsV2UpdateFleetRegion`](docs/sdks/fleetsv2/README.md#updatefleetregion) - UpdateFleetRegion
- [`lobbiesV3CreateLobby`](docs/sdks/lobbiesv3/README.md#createlobby) - CreateLobby
- [`lobbiesV3GetLobbyInfoByRoomId`](docs/sdks/lobbiesv3/README.md#getlobbyinfobyroomid) - GetLobbyInfoByRoomId
- [`lobbiesV3GetLobbyInfoByShortCode`](docs/sdks/lobbiesv3/README.md#getlobbyinfobyshortcode) - GetLobbyInfoByShortCode
- [`lobbiesV3ListActivePublicLobbies`](docs/sdks/lobbiesv3/README.md#listactivepubliclobbies) - ListActivePublicLobbies
- [`logsV1DownloadLogForProcess`](docs/sdks/logsv1/README.md#downloadlogforprocess) - DownloadLogForProcess
- [`logsV1GetLogsForProcess`](docs/sdks/logsv1/README.md#getlogsforprocess) - GetLogsForProcess
- [`managementV1SendVerificationEmail`](docs/sdks/managementv1/README.md#sendverificationemail) - SendVerificationEmail
- [`nodesV1GetNode`](docs/sdks/nodesv1/README.md#getnode) - GetNode
- [`nodesV1ListProvisionedNodes`](docs/sdks/nodesv1/README.md#listprovisionednodes) - ListProvisionedNodes
- [`organizationsV1AcceptInvite`](docs/sdks/organizationsv1/README.md#acceptinvite) - AcceptInvite
- [`organizationsV1GetOrgMembers`](docs/sdks/organizationsv1/README.md#getorgmembers) - GetOrgMembers
- [`organizationsV1GetOrgPendingInvites`](docs/sdks/organizationsv1/README.md#getorgpendinginvites) - GetOrgPendingInvites
- [`organizationsV1GetOrgs`](docs/sdks/organizationsv1/README.md#getorgs) - GetOrgs
- [`organizationsV1GetUsageLimits`](docs/sdks/organizationsv1/README.md#getusagelimits) - GetUsageLimits
- [`organizationsV1GetUserPendingInvites`](docs/sdks/organizationsv1/README.md#getuserpendinginvites) - GetUserPendingInvites
- [`organizationsV1InviteUser`](docs/sdks/organizationsv1/README.md#inviteuser) - InviteUser
- [`organizationsV1RejectInvite`](docs/sdks/organizationsv1/README.md#rejectinvite) - RejectInvite
- [`organizationsV1RescindInvite`](docs/sdks/organizationsv1/README.md#rescindinvite) - RescindInvite
- [`organizationsV1UpdateUserInvite`](docs/sdks/organizationsv1/README.md#updateuserinvite) - UpdateUserInvite
- [`processesV3CreateProcess`](docs/sdks/processesv3/README.md#createprocess) - CreateProcess
- [`processesV3GetLatestProcesses`](docs/sdks/processesv3/README.md#getlatestprocesses) - GetLatestProcesses
- [`processesV3GetProcess`](docs/sdks/processesv3/README.md#getprocess) - GetProcess
- [`processesV3GetProcessesCountExperimental`](docs/sdks/processesv3/README.md#getprocessescountexperimental) - GetProcessesCountExperimental
- [`processesV3GetProcessMetrics`](docs/sdks/processesv3/README.md#getprocessmetrics) - GetProcessMetrics
- [`processesV3StopProcess`](docs/sdks/processesv3/README.md#stopprocess) - StopProcess
- [`roomsV2CreateRoom`](docs/sdks/roomsv2/README.md#createroom) - CreateRoom
- [`roomsV2DestroyRoom`](docs/sdks/roomsv2/README.md#destroyroom) - DestroyRoom
- [`roomsV2GetActiveRoomsForProcess`](docs/sdks/roomsv2/README.md#getactiveroomsforprocess) - GetActiveRoomsForProcess
- [`roomsV2GetConnectionInfo`](docs/sdks/roomsv2/README.md#getconnectioninfo) - GetConnectionInfo
- [`roomsV2GetInactiveRoomsForProcess`](docs/sdks/roomsv2/README.md#getinactiveroomsforprocess) - GetInactiveRoomsForProcess
- [`roomsV2GetRoomInfo`](docs/sdks/roomsv2/README.md#getroominfo) - GetRoomInfo
- [`roomsV2ResumeRoom`](docs/sdks/roomsv2/README.md#resumeroom) - ResumeRoom
- [`roomsV2UpdateRoomConfig`](docs/sdks/roomsv2/README.md#updateroomconfig) - UpdateRoomConfig
- [`tokensV1CreateOrgToken`](docs/sdks/tokensv1/README.md#createorgtoken) - CreateOrgToken
- [`tokensV1GetOrgTokens`](docs/sdks/tokensv1/README.md#getorgtokens) - GetOrgTokens
- [`tokensV1RevokeOrgToken`](docs/sdks/tokensv1/README.md#revokeorgtoken) - RevokeOrgToken
- ~~[`appsV1CreateAppV1Deprecated`](docs/sdks/appsv1/README.md#createappv1deprecated)~~ - CreateAppV1Deprecated :warning: **Deprecated**
- ~~[`appsV1DeleteAppV1Deprecated`](docs/sdks/appsv1/README.md#deleteappv1deprecated)~~ - DeleteAppV1Deprecated :warning: **Deprecated**
- ~~[`appsV1GetAppInfoV1Deprecated`](docs/sdks/appsv1/README.md#getappinfov1deprecated)~~ - GetAppInfoV1Deprecated :warning: **Deprecated**
- ~~[`appsV1GetAppsV1Deprecated`](docs/sdks/appsv1/README.md#getappsv1deprecated)~~ - GetAppsV1Deprecated :warning: **Deprecated**
- ~~[`appsV1UpdateAppV1Deprecated`](docs/sdks/appsv1/README.md#updateappv1deprecated)~~ - UpdateAppV1Deprecated :warning: **Deprecated**
- ~~[`billingV1GetBalance`](docs/sdks/billingv1/README.md#getbalance)~~ - GetBalance :warning: **Deprecated**
- ~~[`buildsV1CreateBuildDeprecated`](docs/sdks/buildsv1/README.md#createbuilddeprecated)~~ - CreateBuildDeprecated :warning: **Deprecated**
- ~~[`buildsV1DeleteBuildDeprecated`](docs/sdks/buildsv1/README.md#deletebuilddeprecated)~~ - DeleteBuildDeprecated :warning: **Deprecated**
- ~~[`buildsV1GetBuildInfoDeprecated`](docs/sdks/buildsv1/README.md#getbuildinfodeprecated)~~ - GetBuildInfoDeprecated :warning: **Deprecated**
- ~~[`buildsV1GetBuildsDeprecated`](docs/sdks/buildsv1/README.md#getbuildsdeprecated)~~ - GetBuildsDeprecated :warning: **Deprecated**
- ~~[`buildsV1RunBuildDeprecated`](docs/sdks/buildsv1/README.md#runbuilddeprecated)~~ - RunBuildDeprecated :warning: **Deprecated**
- ~~[`buildsV2CreateBuildV2Deprecated`](docs/sdks/buildsv2/README.md#createbuildv2deprecated)~~ - CreateBuildV2Deprecated :warning: **Deprecated**
- ~~[`buildsV2CreateBuildWithUploadUrlV2Deprecated`](docs/sdks/buildsv2/README.md#createbuildwithuploadurlv2deprecated)~~ - CreateBuildWithUploadUrlV2Deprecated :warning: **Deprecated**
- ~~[`buildsV2CreateWithMultipartUploadsV2Deprecated`](docs/sdks/buildsv2/README.md#createwithmultipartuploadsv2deprecated)~~ - CreateWithMultipartUploadsV2Deprecated :warning: **Deprecated**
- ~~[`buildsV2DeleteBuildV2Deprecated`](docs/sdks/buildsv2/README.md#deletebuildv2deprecated)~~ - DeleteBuildV2Deprecated :warning: **Deprecated**
- ~~[`buildsV2GetBuildInfoV2Deprecated`](docs/sdks/buildsv2/README.md#getbuildinfov2deprecated)~~ - GetBuildInfoV2Deprecated :warning: **Deprecated**
- ~~[`buildsV2GetBuildsV2Deprecated`](docs/sdks/buildsv2/README.md#getbuildsv2deprecated)~~ - GetBuildsV2Deprecated :warning: **Deprecated**
- ~~[`buildsV2RunBuildV2Deprecated`](docs/sdks/buildsv2/README.md#runbuildv2deprecated)~~ - RunBuildV2Deprecated :warning: **Deprecated**
- ~~[`deploymentsV1CreateDeploymentV1Deprecated`](docs/sdks/deploymentsv1/README.md#createdeploymentv1deprecated)~~ - CreateDeploymentV1Deprecated :warning: **Deprecated**
- ~~[`deploymentsV1GetDeploymentInfoV1Deprecated`](docs/sdks/deploymentsv1/README.md#getdeploymentinfov1deprecated)~~ - GetDeploymentInfoV1Deprecated :warning: **Deprecated**
- ~~[`deploymentsV1GetDeploymentsV1Deprecated`](docs/sdks/deploymentsv1/README.md#getdeploymentsv1deprecated)~~ - GetDeploymentsV1Deprecated :warning: **Deprecated**
- ~~[`deploymentsV1GetLatestDeploymentV1Deprecated`](docs/sdks/deploymentsv1/README.md#getlatestdeploymentv1deprecated)~~ - GetLatestDeploymentV1Deprecated :warning: **Deprecated**
- ~~[`deploymentsV2CreateDeploymentV2Deprecated`](docs/sdks/deploymentsv2/README.md#createdeploymentv2deprecated)~~ - CreateDeploymentV2Deprecated :warning: **Deprecated**
- ~~[`deploymentsV2GetDeploymentInfoV2Deprecated`](docs/sdks/deploymentsv2/README.md#getdeploymentinfov2deprecated)~~ - GetDeploymentInfoV2Deprecated :warning: **Deprecated**
- ~~[`deploymentsV2GetDeploymentsV2Deprecated`](docs/sdks/deploymentsv2/README.md#getdeploymentsv2deprecated)~~ - GetDeploymentsV2Deprecated :warning: **Deprecated**
- ~~[`deploymentsV2GetLatestDeploymentV2Deprecated`](docs/sdks/deploymentsv2/README.md#getlatestdeploymentv2deprecated)~~ - GetLatestDeploymentV2Deprecated :warning: **Deprecated**
- ~~[`discoveryV1GetPingServiceEndpointsDeprecated`](docs/sdks/discoveryv1/README.md#getpingserviceendpointsdeprecated)~~ - GetPingServiceEndpointsDeprecated :warning: **Deprecated**
- ~~[`fleetsV2DeprecatedUpdateFleetRegionV2`](docs/sdks/fleetsv2/README.md#deprecatedupdatefleetregionv2)~~ - DeprecatedUpdateFleetRegionV2 :warning: **Deprecated**
- ~~[`lobbiesV1CreatePrivateLobbyDeprecated`](docs/sdks/lobbiesv1/README.md#createprivatelobbydeprecated)~~ - CreatePrivateLobbyDeprecated :warning: **Deprecated**
- ~~[`lobbiesV1CreatePublicLobbyDeprecated`](docs/sdks/lobbiesv1/README.md#createpubliclobbydeprecated)~~ - CreatePublicLobbyDeprecated :warning: **Deprecated**
- ~~[`lobbiesV1ListActivePublicLobbiesDeprecatedV1`](docs/sdks/lobbiesv1/README.md#listactivepubliclobbiesdeprecatedv1)~~ - ListActivePublicLobbiesDeprecatedV1 :warning: **Deprecated**
- ~~[`lobbiesV2CreateLobbyDeprecated`](docs/sdks/lobbiesv2/README.md#createlobbydeprecated)~~ - CreateLobbyDeprecated :warning: **Deprecated**
- ~~[`lobbiesV2CreateLocalLobby`](docs/sdks/lobbiesv2/README.md#createlocallobby)~~ - CreateLocalLobby :warning: **Deprecated**
- ~~[`lobbiesV2CreatePrivateLobby`](docs/sdks/lobbiesv2/README.md#createprivatelobby)~~ - CreatePrivateLobby :warning: **Deprecated**
- ~~[`lobbiesV2CreatePublicLobby`](docs/sdks/lobbiesv2/README.md#createpubliclobby)~~ - CreatePublicLobby :warning: **Deprecated**
- ~~[`lobbiesV2GetLobbyInfo`](docs/sdks/lobbiesv2/README.md#getlobbyinfo)~~ - GetLobbyInfo :warning: **Deprecated**
- ~~[`lobbiesV2ListActivePublicLobbiesDeprecatedV2`](docs/sdks/lobbiesv2/README.md#listactivepubliclobbiesdeprecatedv2)~~ - ListActivePublicLobbiesDeprecatedV2 :warning: **Deprecated**
- ~~[`lobbiesV2SetLobbyState`](docs/sdks/lobbiesv2/README.md#setlobbystate)~~ - SetLobbyState :warning: **Deprecated**
- ~~[`metricsV1GetMetricsDeprecated`](docs/sdks/metricsv1/README.md#getmetricsdeprecated)~~ - GetMetricsDeprecated :warning: **Deprecated**
- ~~[`processesV1GetProcessInfoDeprecated`](docs/sdks/processesv1/README.md#getprocessinfodeprecated)~~ - GetProcessInfoDeprecated :warning: **Deprecated**
- ~~[`processesV1GetRunningProcesses`](docs/sdks/processesv1/README.md#getrunningprocesses)~~ - GetRunningProcesses :warning: **Deprecated**
- ~~[`processesV1GetStoppedProcesses`](docs/sdks/processesv1/README.md#getstoppedprocesses)~~ - GetStoppedProcesses :warning: **Deprecated**
- ~~[`processesV2CreateProcessV2Deprecated`](docs/sdks/processesv2/README.md#createprocessv2deprecated)~~ - CreateProcessV2Deprecated :warning: **Deprecated**
- ~~[`processesV2GetLatestProcessesV2Deprecated`](docs/sdks/processesv2/README.md#getlatestprocessesv2deprecated)~~ - GetLatestProcessesV2Deprecated :warning: **Deprecated**
- ~~[`processesV2GetProcessesCountExperimentalV2Deprecated`](docs/sdks/processesv2/README.md#getprocessescountexperimentalv2deprecated)~~ - GetProcessesCountExperimentalV2Deprecated :warning: **Deprecated**
- ~~[`processesV2GetProcessInfoV2Deprecated`](docs/sdks/processesv2/README.md#getprocessinfov2deprecated)~~ - GetProcessInfoV2Deprecated :warning: **Deprecated**
- ~~[`processesV2StopProcessV2Deprecated`](docs/sdks/processesv2/README.md#stopprocessv2deprecated)~~ - StopProcessV2Deprecated :warning: **Deprecated**
- ~~[`roomsV1CreateRoomDeprecated`](docs/sdks/roomsv1/README.md#createroomdeprecated)~~ - CreateRoomDeprecated :warning: **Deprecated**
- ~~[`roomsV1DestroyRoomDeprecated`](docs/sdks/roomsv1/README.md#destroyroomdeprecated)~~ - DestroyRoomDeprecated :warning: **Deprecated**
- ~~[`roomsV1GetActiveRoomsForProcessDeprecated`](docs/sdks/roomsv1/README.md#getactiveroomsforprocessdeprecated)~~ - GetActiveRoomsForProcessDeprecated :warning: **Deprecated**
- ~~[`roomsV1GetConnectionInfoDeprecated`](docs/sdks/roomsv1/README.md#getconnectioninfodeprecated)~~ - GetConnectionInfoDeprecated :warning: **Deprecated**
- ~~[`roomsV1GetInactiveRoomsForProcessDeprecated`](docs/sdks/roomsv1/README.md#getinactiveroomsforprocessdeprecated)~~ - GetInactiveRoomsForProcessDeprecated :warning: **Deprecated**
- ~~[`roomsV1GetRoomInfoDeprecated`](docs/sdks/roomsv1/README.md#getroominfodeprecated)~~ - GetRoomInfoDeprecated :warning: **Deprecated**
- ~~[`roomsV1SuspendRoomDeprecated`](docs/sdks/roomsv1/README.md#suspendroomdeprecated)~~ - SuspendRoomDeprecated :warning: **Deprecated**
- ~~[`roomsV2SuspendRoomV2Deprecated`](docs/sdks/roomsv2/README.md#suspendroomv2deprecated)~~ - SuspendRoomV2Deprecated :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `orgId` to `"org-6f706e83-0ec1-437a-9a46-7d4281eb2f39"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getOrgTokens`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.

| Name  | Type   | Description          |
| ----- | ------ | -------------------- |
| orgId | string | The orgId parameter. |
| appId | string | The appId parameter. |

### Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const sdk = new HathoraCloud({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
