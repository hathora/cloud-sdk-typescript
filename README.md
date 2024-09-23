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

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Global Parameters](#global-parameters)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
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
yarn add @hathora/cloud-sdk-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [~~appsV1~~](docs/sdks/appsv1/README.md)

* [~~getAppsV1Deprecated~~](docs/sdks/appsv1/README.md#getappsv1deprecated) - Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`. :warning: **Deprecated**
* [~~createAppV1Deprecated~~](docs/sdks/appsv1/README.md#createappv1deprecated) - Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~updateAppV1Deprecated~~](docs/sdks/appsv1/README.md#updateappv1deprecated) - Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. :warning: **Deprecated**
* [~~getAppInfoV1Deprecated~~](docs/sdks/appsv1/README.md#getappinfov1deprecated) - Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. :warning: **Deprecated**
* [~~deleteAppV1Deprecated~~](docs/sdks/appsv1/README.md#deleteappv1deprecated) - Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application. :warning: **Deprecated**

### [appsV2](docs/sdks/appsv2/README.md)

* [getApps](docs/sdks/appsv2/README.md#getapps) - Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
* [createApp](docs/sdks/appsv2/README.md#createapp) - Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [updateApp](docs/sdks/appsv2/README.md#updateapp) - Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [getApp](docs/sdks/appsv2/README.md#getapp) - Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [deleteApp](docs/sdks/appsv2/README.md#deleteapp) - Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.

### [authV1](docs/sdks/authv1/README.md)

* [loginAnonymous](docs/sdks/authv1/README.md#loginanonymous) - Returns a unique player token for an anonymous user.
* [loginNickname](docs/sdks/authv1/README.md#loginnickname) - Returns a unique player token with a specified nickname for a user.
* [loginGoogle](docs/sdks/authv1/README.md#logingoogle) - Returns a unique player token using a Google-signed OIDC `idToken`.

### [billingV1](docs/sdks/billingv1/README.md)

* [getBalance](docs/sdks/billingv1/README.md#getbalance)
* [getUpcomingInvoiceItems](docs/sdks/billingv1/README.md#getupcominginvoiceitems)
* [getUpcomingInvoiceTotal](docs/sdks/billingv1/README.md#getupcominginvoicetotal)
* [getPaymentMethod](docs/sdks/billingv1/README.md#getpaymentmethod)
* [initStripeCustomerPortalUrl](docs/sdks/billingv1/README.md#initstripecustomerportalurl)
* [getInvoices](docs/sdks/billingv1/README.md#getinvoices)

### [~~buildsV1~~](docs/sdks/buildsv1/README.md)

* [~~getBuildsDeprecated~~](docs/sdks/buildsv1/README.md#getbuildsdeprecated) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getBuildInfoDeprecated~~](docs/sdks/buildsv1/README.md#getbuildinfodeprecated) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build). :warning: **Deprecated**
* [~~createBuildDeprecated~~](docs/sdks/buildsv1/README.md#createbuilddeprecated) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build. :warning: **Deprecated**
* [~~deleteBuildDeprecated~~](docs/sdks/buildsv1/README.md#deletebuilddeprecated) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted. :warning: **Deprecated**
* [~~runBuildDeprecated~~](docs/sdks/buildsv1/README.md#runbuilddeprecated) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild). :warning: **Deprecated**

### [~~buildsV2~~](docs/sdks/buildsv2/README.md)

* [~~getBuildsV2Deprecated~~](docs/sdks/buildsv2/README.md#getbuildsv2deprecated) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getBuildInfoV2Deprecated~~](docs/sdks/buildsv2/README.md#getbuildinfov2deprecated) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build). :warning: **Deprecated**
* [~~createBuildV2Deprecated~~](docs/sdks/buildsv2/README.md#createbuildv2deprecated) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build. :warning: **Deprecated**
* [~~createBuildWithUploadUrlV2Deprecated~~](docs/sdks/buildsv2/README.md#createbuildwithuploadurlv2deprecated) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with `uploadUrl` that can be used to upload the build to before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build. :warning: **Deprecated**
* [~~createWithMultipartUploadsV2Deprecated~~](docs/sdks/buildsv2/README.md#createwithmultipartuploadsv2deprecated) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `multipartUploadUrls` that can be used to upload larger builds in parts before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build. :warning: **Deprecated**
* [~~deleteBuildV2Deprecated~~](docs/sdks/buildsv2/README.md#deletebuildv2deprecated) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted. :warning: **Deprecated**
* [~~runBuildV2Deprecated~~](docs/sdks/buildsv2/README.md#runbuildv2deprecated) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild). :warning: **Deprecated**

### [buildsV3](docs/sdks/buildsv3/README.md)

* [getBuilds](docs/sdks/buildsv3/README.md#getbuilds) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [createBuild](docs/sdks/buildsv3/README.md#createbuild) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `multipartUploadUrls` that can be used to upload larger builds in parts before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
* [getBuild](docs/sdks/buildsv3/README.md#getbuild) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [deleteBuild](docs/sdks/buildsv3/README.md#deletebuild) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
Be careful which builds you delete. This endpoint does not prevent you from deleting actively used builds.
Deleting a build that is actively build used by an app's deployment will cause failures when creating rooms.
* [runBuild](docs/sdks/buildsv3/README.md#runbuild) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).

### [~~deploymentsV1~~](docs/sdks/deploymentsv1/README.md)

* [~~getDeploymentsV1Deprecated~~](docs/sdks/deploymentsv1/README.md#getdeploymentsv1deprecated) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getLatestDeploymentV1Deprecated~~](docs/sdks/deploymentsv1/README.md#getlatestdeploymentv1deprecated) - Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getDeploymentInfoV1Deprecated~~](docs/sdks/deploymentsv1/README.md#getdeploymentinfov1deprecated) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). :warning: **Deprecated**
* [~~createDeploymentV1Deprecated~~](docs/sdks/deploymentsv1/README.md#createdeploymentv1deprecated) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected. :warning: **Deprecated**

### [~~deploymentsV2~~](docs/sdks/deploymentsv2/README.md)

* [~~getDeploymentsV2Deprecated~~](docs/sdks/deploymentsv2/README.md#getdeploymentsv2deprecated) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getLatestDeploymentV2Deprecated~~](docs/sdks/deploymentsv2/README.md#getlatestdeploymentv2deprecated) - Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getDeploymentInfoV2Deprecated~~](docs/sdks/deploymentsv2/README.md#getdeploymentinfov2deprecated) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). :warning: **Deprecated**
* [~~createDeploymentV2Deprecated~~](docs/sdks/deploymentsv2/README.md#createdeploymentv2deprecated) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected. :warning: **Deprecated**

### [deploymentsV3](docs/sdks/deploymentsv3/README.md)

* [getDeployments](docs/sdks/deploymentsv3/README.md#getdeployments) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [createDeployment](docs/sdks/deploymentsv3/README.md#createdeployment) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
* [getLatestDeployment](docs/sdks/deploymentsv3/README.md#getlatestdeployment) - Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [getDeployment](docs/sdks/deploymentsv3/README.md#getdeployment) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).

### [~~discoveryV1~~](docs/sdks/discoveryv1/README.md)

* [~~getPingServiceEndpointsDeprecated~~](docs/sdks/discoveryv1/README.md#getpingserviceendpointsdeprecated) - Returns an array of V1 regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back. :warning: **Deprecated**

### [discoveryV2](docs/sdks/discoveryv2/README.md)

* [getPingServiceEndpoints](docs/sdks/discoveryv2/README.md#getpingserviceendpoints) - Returns an array of all regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back.


### [~~lobbiesV1~~](docs/sdks/lobbiesv1/README.md)

* [~~createPrivateLobbyDeprecated~~](docs/sdks/lobbiesv1/README.md#createprivatelobbydeprecated) - :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](docs/sdks/lobbiesv1/README.md#createpubliclobbydeprecated) - :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV1~~](docs/sdks/lobbiesv1/README.md#listactivepubliclobbiesdeprecatedv1) - :warning: **Deprecated**

### [~~lobbiesV2~~](docs/sdks/lobbiesv2/README.md)

* [~~createPrivateLobby~~](docs/sdks/lobbiesv2/README.md#createprivatelobby) - :warning: **Deprecated**
* [~~createPublicLobby~~](docs/sdks/lobbiesv2/README.md#createpubliclobby) - :warning: **Deprecated**
* [~~createLocalLobby~~](docs/sdks/lobbiesv2/README.md#createlocallobby) - :warning: **Deprecated**
* [~~createLobbyDeprecated~~](docs/sdks/lobbiesv2/README.md#createlobbydeprecated) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players. :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV2~~](docs/sdks/lobbiesv2/README.md#listactivepubliclobbiesdeprecatedv2) - Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client. :warning: **Deprecated**
* [~~getLobbyInfo~~](docs/sdks/lobbiesv2/README.md#getlobbyinfo) - Get details for a lobby. :warning: **Deprecated**
* [~~setLobbyState~~](docs/sdks/lobbiesv2/README.md#setlobbystate) - Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores). :warning: **Deprecated**

### [lobbiesV3](docs/sdks/lobbiesv3/README.md)

* [createLobby](docs/sdks/lobbiesv3/README.md#createlobby) - Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
* [listActivePublicLobbies](docs/sdks/lobbiesv3/README.md#listactivepubliclobbies) - Get all active lobbies for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.
* [getLobbyInfoByRoomId](docs/sdks/lobbiesv3/README.md#getlobbyinfobyroomid) - Get details for a lobby.
* [getLobbyInfoByShortCode](docs/sdks/lobbiesv3/README.md#getlobbyinfobyshortcode) - Get details for a lobby. If 2 or more lobbies have the same `shortCode`, then the most recently created lobby will be returned.

### [logsV1](docs/sdks/logsv1/README.md)

* [~~getLogsForApp~~](docs/sdks/logsv1/README.md#getlogsforapp) - Returns a stream of logs for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. :warning: **Deprecated**
* [getLogsForProcess](docs/sdks/logsv1/README.md#getlogsforprocess) - Returns a stream of logs for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
* [downloadLogForProcess](docs/sdks/logsv1/README.md#downloadlogforprocess) - Download entire log file for a stopped process.
* [~~getLogsForDeployment~~](docs/sdks/logsv1/README.md#getlogsfordeployment) - Returns a stream of logs for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId` and `deploymentId`. :warning: **Deprecated**

### [managementV1](docs/sdks/managementv1/README.md)

* [sendVerificationEmail](docs/sdks/managementv1/README.md#sendverificationemail)

### [metricsV1](docs/sdks/metricsv1/README.md)

* [getMetrics](docs/sdks/metricsv1/README.md#getmetrics) - Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### [organizationsV1](docs/sdks/organizationsv1/README.md)

* [getOrgs](docs/sdks/organizationsv1/README.md#getorgs) - Returns an unsorted list of all organizations that you are a member of (an accepted membership invite). An organization is uniquely identified by an `orgId`.
* [getUserPendingInvites](docs/sdks/organizationsv1/README.md#getuserpendinginvites)
* [getOrgMembers](docs/sdks/organizationsv1/README.md#getorgmembers)
* [inviteUser](docs/sdks/organizationsv1/README.md#inviteuser)
* [rescindInvite](docs/sdks/organizationsv1/README.md#rescindinvite)
* [getOrgPendingInvites](docs/sdks/organizationsv1/README.md#getorgpendinginvites)
* [acceptInvite](docs/sdks/organizationsv1/README.md#acceptinvite)
* [rejectInvite](docs/sdks/organizationsv1/README.md#rejectinvite)

### [~~processesV1~~](docs/sdks/processesv1/README.md)

* [~~getRunningProcesses~~](docs/sdks/processesv1/README.md#getrunningprocesses) - Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. :warning: **Deprecated**
* [~~getStoppedProcesses~~](docs/sdks/processesv1/README.md#getstoppedprocesses) - Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. :warning: **Deprecated**
* [~~getProcessInfoDeprecated~~](docs/sdks/processesv1/README.md#getprocessinfodeprecated) - Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process). :warning: **Deprecated**

### [~~processesV2~~](docs/sdks/processesv2/README.md)

* [~~getProcessInfoV2Deprecated~~](docs/sdks/processesv2/README.md#getprocessinfov2deprecated) - Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process). :warning: **Deprecated**
* [~~getLatestProcessesV2Deprecated~~](docs/sdks/processesv2/README.md#getlatestprocessesv2deprecated) - Retrieve the 10 most recent [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `status` or `region`. :warning: **Deprecated**
* [~~getProcessesCountExperimentalV2Deprecated~~](docs/sdks/processesv2/README.md#getprocessescountexperimentalv2deprecated) - Count the number of [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `status` or `region`. :warning: **Deprecated**
* [~~stopProcessV2Deprecated~~](docs/sdks/processesv2/README.md#stopprocessv2deprecated) - Stops a [process](https://hathora.dev/docs/concepts/hathora-entities#process) immediately. :warning: **Deprecated**
* [~~createProcessV2Deprecated~~](docs/sdks/processesv2/README.md#createprocessv2deprecated) - Creates a [process](https://hathora.dev/docs/concepts/hathora-entities#process) without a room. Use this to pre-allocate processes ahead of time so that subsequent room assignment via [CreateRoom()](https://hathora.dev/api#tag/RoomV2/operation/CreateRoom) can be instant. :warning: **Deprecated**

### [processesV3](docs/sdks/processesv3/README.md)

* [getLatestProcesses](docs/sdks/processesv3/README.md#getlatestprocesses) - Retrieve the 10 most recent [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `status` or `region`.
* [getProcessesCountExperimental](docs/sdks/processesv3/README.md#getprocessescountexperimental) - Count the number of [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `status` or `region`.
* [createProcess](docs/sdks/processesv3/README.md#createprocess) - Creates a [process](https://hathora.dev/docs/concepts/hathora-entities#process) without a room. Use this to pre-allocate processes ahead of time so that subsequent room assignment via [CreateRoom()](https://hathora.dev/api#tag/RoomV2/operation/CreateRoom) can be instant.
* [getProcess](docs/sdks/processesv3/README.md#getprocess) - Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [stopProcess](docs/sdks/processesv3/README.md#stopprocess) - Stops a [process](https://hathora.dev/docs/concepts/hathora-entities#process) immediately.

### [~~roomsV1~~](docs/sdks/roomsv1/README.md)

* [~~createRoomDeprecated~~](docs/sdks/roomsv1/README.md#createroomdeprecated) - :warning: **Deprecated**
* [~~getRoomInfoDeprecated~~](docs/sdks/roomsv1/README.md#getroominfodeprecated) - :warning: **Deprecated**
* [~~getActiveRoomsForProcessDeprecated~~](docs/sdks/roomsv1/README.md#getactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~getInactiveRoomsForProcessDeprecated~~](docs/sdks/roomsv1/README.md#getinactiveroomsforprocessdeprecated) - :warning: **Deprecated**
* [~~destroyRoomDeprecated~~](docs/sdks/roomsv1/README.md#destroyroomdeprecated) - :warning: **Deprecated**
* [~~suspendRoomDeprecated~~](docs/sdks/roomsv1/README.md#suspendroomdeprecated) - :warning: **Deprecated**
* [~~getConnectionInfoDeprecated~~](docs/sdks/roomsv1/README.md#getconnectioninfodeprecated) - :warning: **Deprecated**

### [roomsV2](docs/sdks/roomsv2/README.md)

* [createRoom](docs/sdks/roomsv2/README.md#createroom) - Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application). Poll the [`GetConnectionInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetConnectionInfo) endpoint to get connection details for an active room.
* [getRoomInfo](docs/sdks/roomsv2/README.md#getroominfo) - Retreive current and historical allocation data for a [room](https://hathora.dev/docs/concepts/hathora-entities#room).
* [getActiveRoomsForProcess](docs/sdks/roomsv2/README.md#getactiveroomsforprocess) - Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [getInactiveRoomsForProcess](docs/sdks/roomsv2/README.md#getinactiveroomsforprocess) - Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [destroyRoom](docs/sdks/roomsv2/README.md#destroyroom) - Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room). All associated metadata is deleted.
* [~~suspendRoomV2Deprecated~~](docs/sdks/roomsv2/README.md#suspendroomv2deprecated) - Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room). The room is unallocated from the process but can be rescheduled later using the same `roomId`. :warning: **Deprecated**
* [getConnectionInfo](docs/sdks/roomsv2/README.md#getconnectioninfo) - Poll this endpoint to get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room). Clients can call this endpoint without authentication.
* [updateRoomConfig](docs/sdks/roomsv2/README.md#updateroomconfig)

### [tokensV1](docs/sdks/tokensv1/README.md)

* [getOrgTokens](docs/sdks/tokensv1/README.md#getorgtokens) - List all organization tokens for a given org.
* [createOrgToken](docs/sdks/tokensv1/README.md#createorgtoken) - Create a new organization token.
* [revokeOrgToken](docs/sdks/tokensv1/README.md#revokeorgtoken) - Revoke an organization token.

</details>
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,404,429      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import {
  ApiError,
  SDKValidationError,
} from "@hathora/cloud-sdk-typescript/models/errors";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  let result;
  try {
    result = await hathoraCloud.tokensV1.getOrgTokens(
      "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
    );

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ApiError): {
        // Handle err.data$: ApiErrorData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.hathora.dev` | None |
| 1 | `https:///` | None |

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  serverIdx: 1,
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  serverURL: "https://api.hathora.dev",
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  // Handle the result
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

const sdk = new HathoraCloud({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name              | Type              | Scheme            |
| ----------------- | ----------------- | ----------------- |
| `hathoraDevToken` | http              | HTTP Bearer       |

To authenticate with the API the `hathoraDevToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  // Handle the result
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
  const result = await hathoraCloud.lobbiesV1.createPrivateLobbyDeprecated({
    playerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
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

- [appsV1CreateAppV1Deprecated](docs/sdks/appsv1/README.md#createappv1deprecated)
- [appsV1DeleteAppV1Deprecated](docs/sdks/appsv1/README.md#deleteappv1deprecated)
- [appsV1GetAppInfoV1Deprecated](docs/sdks/appsv1/README.md#getappinfov1deprecated)
- [appsV1GetAppsV1Deprecated](docs/sdks/appsv1/README.md#getappsv1deprecated)
- [appsV1UpdateAppV1Deprecated](docs/sdks/appsv1/README.md#updateappv1deprecated)
- [appsV2CreateApp](docs/sdks/appsv2/README.md#createapp)
- [appsV2DeleteApp](docs/sdks/appsv2/README.md#deleteapp)
- [appsV2GetApp](docs/sdks/appsv2/README.md#getapp)
- [appsV2GetApps](docs/sdks/appsv2/README.md#getapps)
- [appsV2UpdateApp](docs/sdks/appsv2/README.md#updateapp)
- [authV1LoginAnonymous](docs/sdks/authv1/README.md#loginanonymous)
- [authV1LoginGoogle](docs/sdks/authv1/README.md#logingoogle)
- [authV1LoginNickname](docs/sdks/authv1/README.md#loginnickname)
- [billingV1GetBalance](docs/sdks/billingv1/README.md#getbalance)
- [billingV1GetInvoices](docs/sdks/billingv1/README.md#getinvoices)
- [billingV1GetPaymentMethod](docs/sdks/billingv1/README.md#getpaymentmethod)
- [billingV1GetUpcomingInvoiceItems](docs/sdks/billingv1/README.md#getupcominginvoiceitems)
- [billingV1GetUpcomingInvoiceTotal](docs/sdks/billingv1/README.md#getupcominginvoicetotal)
- [billingV1InitStripeCustomerPortalUrl](docs/sdks/billingv1/README.md#initstripecustomerportalurl)
- [buildsV1CreateBuildDeprecated](docs/sdks/buildsv1/README.md#createbuilddeprecated)
- [buildsV1DeleteBuildDeprecated](docs/sdks/buildsv1/README.md#deletebuilddeprecated)
- [buildsV1GetBuildInfoDeprecated](docs/sdks/buildsv1/README.md#getbuildinfodeprecated)
- [buildsV1GetBuildsDeprecated](docs/sdks/buildsv1/README.md#getbuildsdeprecated)
- [buildsV1RunBuildDeprecated](docs/sdks/buildsv1/README.md#runbuilddeprecated)
- [buildsV2CreateBuildV2Deprecated](docs/sdks/buildsv2/README.md#createbuildv2deprecated)
- [buildsV2CreateBuildWithUploadUrlV2Deprecated](docs/sdks/buildsv2/README.md#createbuildwithuploadurlv2deprecated)
- [buildsV2CreateWithMultipartUploadsV2Deprecated](docs/sdks/buildsv2/README.md#createwithmultipartuploadsv2deprecated)
- [buildsV2DeleteBuildV2Deprecated](docs/sdks/buildsv2/README.md#deletebuildv2deprecated)
- [buildsV2GetBuildInfoV2Deprecated](docs/sdks/buildsv2/README.md#getbuildinfov2deprecated)
- [buildsV2GetBuildsV2Deprecated](docs/sdks/buildsv2/README.md#getbuildsv2deprecated)
- [buildsV2RunBuildV2Deprecated](docs/sdks/buildsv2/README.md#runbuildv2deprecated)
- [buildsV3CreateBuild](docs/sdks/buildsv3/README.md#createbuild)
- [buildsV3DeleteBuild](docs/sdks/buildsv3/README.md#deletebuild)
- [buildsV3GetBuild](docs/sdks/buildsv3/README.md#getbuild)
- [buildsV3GetBuilds](docs/sdks/buildsv3/README.md#getbuilds)
- [buildsV3RunBuild](docs/sdks/buildsv3/README.md#runbuild)
- [deploymentsV1CreateDeploymentV1Deprecated](docs/sdks/deploymentsv1/README.md#createdeploymentv1deprecated)
- [deploymentsV1GetDeploymentInfoV1Deprecated](docs/sdks/deploymentsv1/README.md#getdeploymentinfov1deprecated)
- [deploymentsV1GetDeploymentsV1Deprecated](docs/sdks/deploymentsv1/README.md#getdeploymentsv1deprecated)
- [deploymentsV1GetLatestDeploymentV1Deprecated](docs/sdks/deploymentsv1/README.md#getlatestdeploymentv1deprecated)
- [deploymentsV2CreateDeploymentV2Deprecated](docs/sdks/deploymentsv2/README.md#createdeploymentv2deprecated)
- [deploymentsV2GetDeploymentInfoV2Deprecated](docs/sdks/deploymentsv2/README.md#getdeploymentinfov2deprecated)
- [deploymentsV2GetDeploymentsV2Deprecated](docs/sdks/deploymentsv2/README.md#getdeploymentsv2deprecated)
- [deploymentsV2GetLatestDeploymentV2Deprecated](docs/sdks/deploymentsv2/README.md#getlatestdeploymentv2deprecated)
- [deploymentsV3CreateDeployment](docs/sdks/deploymentsv3/README.md#createdeployment)
- [deploymentsV3GetDeployment](docs/sdks/deploymentsv3/README.md#getdeployment)
- [deploymentsV3GetDeployments](docs/sdks/deploymentsv3/README.md#getdeployments)
- [deploymentsV3GetLatestDeployment](docs/sdks/deploymentsv3/README.md#getlatestdeployment)
- [discoveryV1GetPingServiceEndpointsDeprecated](docs/sdks/discoveryv1/README.md#getpingserviceendpointsdeprecated)
- [discoveryV2GetPingServiceEndpoints](docs/sdks/discoveryv2/README.md#getpingserviceendpoints)
- [lobbiesV1CreatePrivateLobbyDeprecated](docs/sdks/lobbiesv1/README.md#createprivatelobbydeprecated)
- [lobbiesV1CreatePublicLobbyDeprecated](docs/sdks/lobbiesv1/README.md#createpubliclobbydeprecated)
- [lobbiesV1ListActivePublicLobbiesDeprecatedV1](docs/sdks/lobbiesv1/README.md#listactivepubliclobbiesdeprecatedv1)
- [lobbiesV2CreateLobbyDeprecated](docs/sdks/lobbiesv2/README.md#createlobbydeprecated)
- [lobbiesV2CreateLocalLobby](docs/sdks/lobbiesv2/README.md#createlocallobby)
- [lobbiesV2CreatePrivateLobby](docs/sdks/lobbiesv2/README.md#createprivatelobby)
- [lobbiesV2CreatePublicLobby](docs/sdks/lobbiesv2/README.md#createpubliclobby)
- [lobbiesV2GetLobbyInfo](docs/sdks/lobbiesv2/README.md#getlobbyinfo)
- [lobbiesV2ListActivePublicLobbiesDeprecatedV2](docs/sdks/lobbiesv2/README.md#listactivepubliclobbiesdeprecatedv2)
- [lobbiesV2SetLobbyState](docs/sdks/lobbiesv2/README.md#setlobbystate)
- [lobbiesV3CreateLobby](docs/sdks/lobbiesv3/README.md#createlobby)
- [lobbiesV3GetLobbyInfoByRoomId](docs/sdks/lobbiesv3/README.md#getlobbyinfobyroomid)
- [lobbiesV3GetLobbyInfoByShortCode](docs/sdks/lobbiesv3/README.md#getlobbyinfobyshortcode)
- [lobbiesV3ListActivePublicLobbies](docs/sdks/lobbiesv3/README.md#listactivepubliclobbies)
- [logsV1DownloadLogForProcess](docs/sdks/logsv1/README.md#downloadlogforprocess)
- [logsV1GetLogsForApp](docs/sdks/logsv1/README.md#getlogsforapp)
- [logsV1GetLogsForDeployment](docs/sdks/logsv1/README.md#getlogsfordeployment)
- [logsV1GetLogsForProcess](docs/sdks/logsv1/README.md#getlogsforprocess)
- [managementV1SendVerificationEmail](docs/sdks/managementv1/README.md#sendverificationemail)
- [metricsV1GetMetrics](docs/sdks/metricsv1/README.md#getmetrics)
- [organizationsV1AcceptInvite](docs/sdks/organizationsv1/README.md#acceptinvite)
- [organizationsV1GetOrgMembers](docs/sdks/organizationsv1/README.md#getorgmembers)
- [organizationsV1GetOrgPendingInvites](docs/sdks/organizationsv1/README.md#getorgpendinginvites)
- [organizationsV1GetOrgs](docs/sdks/organizationsv1/README.md#getorgs)
- [organizationsV1GetUserPendingInvites](docs/sdks/organizationsv1/README.md#getuserpendinginvites)
- [organizationsV1InviteUser](docs/sdks/organizationsv1/README.md#inviteuser)
- [organizationsV1RejectInvite](docs/sdks/organizationsv1/README.md#rejectinvite)
- [organizationsV1RescindInvite](docs/sdks/organizationsv1/README.md#rescindinvite)
- [processesV1GetProcessInfoDeprecated](docs/sdks/processesv1/README.md#getprocessinfodeprecated)
- [processesV1GetRunningProcesses](docs/sdks/processesv1/README.md#getrunningprocesses)
- [processesV1GetStoppedProcesses](docs/sdks/processesv1/README.md#getstoppedprocesses)
- [processesV2CreateProcessV2Deprecated](docs/sdks/processesv2/README.md#createprocessv2deprecated)
- [processesV2GetLatestProcessesV2Deprecated](docs/sdks/processesv2/README.md#getlatestprocessesv2deprecated)
- [processesV2GetProcessInfoV2Deprecated](docs/sdks/processesv2/README.md#getprocessinfov2deprecated)
- [processesV2GetProcessesCountExperimentalV2Deprecated](docs/sdks/processesv2/README.md#getprocessescountexperimentalv2deprecated)
- [processesV2StopProcessV2Deprecated](docs/sdks/processesv2/README.md#stopprocessv2deprecated)
- [processesV3CreateProcess](docs/sdks/processesv3/README.md#createprocess)
- [processesV3GetLatestProcesses](docs/sdks/processesv3/README.md#getlatestprocesses)
- [processesV3GetProcess](docs/sdks/processesv3/README.md#getprocess)
- [processesV3GetProcessesCountExperimental](docs/sdks/processesv3/README.md#getprocessescountexperimental)
- [processesV3StopProcess](docs/sdks/processesv3/README.md#stopprocess)
- [roomsV1CreateRoomDeprecated](docs/sdks/roomsv1/README.md#createroomdeprecated)
- [roomsV1DestroyRoomDeprecated](docs/sdks/roomsv1/README.md#destroyroomdeprecated)
- [roomsV1GetActiveRoomsForProcessDeprecated](docs/sdks/roomsv1/README.md#getactiveroomsforprocessdeprecated)
- [roomsV1GetConnectionInfoDeprecated](docs/sdks/roomsv1/README.md#getconnectioninfodeprecated)
- [roomsV1GetInactiveRoomsForProcessDeprecated](docs/sdks/roomsv1/README.md#getinactiveroomsforprocessdeprecated)
- [roomsV1GetRoomInfoDeprecated](docs/sdks/roomsv1/README.md#getroominfodeprecated)
- [roomsV1SuspendRoomDeprecated](docs/sdks/roomsv1/README.md#suspendroomdeprecated)
- [roomsV2CreateRoom](docs/sdks/roomsv2/README.md#createroom)
- [roomsV2DestroyRoom](docs/sdks/roomsv2/README.md#destroyroom)
- [roomsV2GetActiveRoomsForProcess](docs/sdks/roomsv2/README.md#getactiveroomsforprocess)
- [roomsV2GetConnectionInfo](docs/sdks/roomsv2/README.md#getconnectioninfo)
- [roomsV2GetInactiveRoomsForProcess](docs/sdks/roomsv2/README.md#getinactiveroomsforprocess)
- [roomsV2GetRoomInfo](docs/sdks/roomsv2/README.md#getroominfo)
- [roomsV2SuspendRoomV2Deprecated](docs/sdks/roomsv2/README.md#suspendroomv2deprecated)
- [roomsV2UpdateRoomConfig](docs/sdks/roomsv2/README.md#updateroomconfig)
- [tokensV1CreateOrgToken](docs/sdks/tokensv1/README.md#createorgtoken)
- [tokensV1GetOrgTokens](docs/sdks/tokensv1/README.md#getorgtokens)
- [tokensV1RevokeOrgToken](docs/sdks/tokensv1/README.md#revokeorgtoken)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `appId` to `"app-af469a92-5b45-4565-b3c4-b79878de67d2"` at SDK initialization and then you do not have to pass the same value on calls to operations like `createRoomDeprecated`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| appId | string |  | The appId parameter. |


### Example

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.roomsV1.createRoomDeprecated(
    {
      clientIPs: [
        "123.123.123.123",
      ],
      roomConfig: "{\"name\":\"my-room\"}",
      region: "Chicago",
    },
    "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    "2swovpy1fnunu",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { openAsBlob } from "node:fs";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.buildsV1.runBuildDeprecated(1, {
    file: await openAsBlob("example.file"),
  }, "app-af469a92-5b45-4565-b3c4-b79878de67d2");

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
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

  // Handle the result
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
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  // Handle the result
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
