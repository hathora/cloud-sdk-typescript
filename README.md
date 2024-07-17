<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/235110661-00e586cc-7489-4daf-82e8-7ae3c2c7143e.svg" width="350px">
    <h1> Typescript SDK</h1>
   <p>Serverless cloud hosting for multiplayer games</p>
   <a href="https://hathora.dev/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
   <a href="https://discord.com/invite/hathora"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

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
    const result = await hathoraCloud.appsV1.getApps();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [appsV1](docs/sdks/appsv1/README.md)

* [getApps](docs/sdks/appsv1/README.md#getapps) - Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
* [createApp](docs/sdks/appsv1/README.md#createapp) - Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [updateApp](docs/sdks/appsv1/README.md#updateapp) - Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [getAppInfo](docs/sdks/appsv1/README.md#getappinfo) - Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
* [deleteApp](docs/sdks/appsv1/README.md#deleteapp) - Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.

### [authV1](docs/sdks/authv1/README.md)

* [loginAnonymous](docs/sdks/authv1/README.md#loginanonymous) - Returns a unique player token for an anonymous user.
* [loginNickname](docs/sdks/authv1/README.md#loginnickname) - Returns a unique player token with a specified nickname for a user.
* [loginGoogle](docs/sdks/authv1/README.md#logingoogle) - Returns a unique player token using a Google-signed OIDC `idToken`.

### [billingV1](docs/sdks/billingv1/README.md)

* [getBalance](docs/sdks/billingv1/README.md#getbalance)
* [getPaymentMethod](docs/sdks/billingv1/README.md#getpaymentmethod)
* [initStripeCustomerPortalUrl](docs/sdks/billingv1/README.md#initstripecustomerportalurl)
* [getInvoices](docs/sdks/billingv1/README.md#getinvoices)

### [buildsV1](docs/sdks/buildsv1/README.md)

* [~~getBuildsDeprecated~~](docs/sdks/buildsv1/README.md#getbuildsdeprecated) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getBuildInfoDeprecated~~](docs/sdks/buildsv1/README.md#getbuildinfodeprecated) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build). :warning: **Deprecated**
* [~~createBuildDeprecated~~](docs/sdks/buildsv1/README.md#createbuilddeprecated) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build. :warning: **Deprecated**
* [~~runBuildDeprecated~~](docs/sdks/buildsv1/README.md#runbuilddeprecated) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild). :warning: **Deprecated**
* [~~deleteBuildDeprecated~~](docs/sdks/buildsv1/README.md#deletebuilddeprecated) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted. :warning: **Deprecated**

### [buildsV2](docs/sdks/buildsv2/README.md)

* [getBuilds](docs/sdks/buildsv2/README.md#getbuilds) - Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [getBuildInfo](docs/sdks/buildsv2/README.md#getbuildinfo) - Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [createBuild](docs/sdks/buildsv2/README.md#createbuild) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
* [createBuildWithUploadUrl](docs/sdks/buildsv2/README.md#createbuildwithuploadurl) - Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `uploadUrl` that can be used to upload the build to before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
* [runBuild](docs/sdks/buildsv2/README.md#runbuild) - Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).
* [deleteBuild](docs/sdks/buildsv2/README.md#deletebuild) - Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.

### [deploymentsV1](docs/sdks/deploymentsv1/README.md)

* [~~getDeploymentsDeprecated~~](docs/sdks/deploymentsv1/README.md#getdeploymentsdeprecated) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getLatestDeploymentDeprecated~~](docs/sdks/deploymentsv1/README.md#getlatestdeploymentdeprecated) - Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). :warning: **Deprecated**
* [~~getDeploymentInfoDeprecated~~](docs/sdks/deploymentsv1/README.md#getdeploymentinfodeprecated) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). :warning: **Deprecated**
* [~~createDeploymentDeprecated~~](docs/sdks/deploymentsv1/README.md#createdeploymentdeprecated) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected. :warning: **Deprecated**

### [deploymentsV2](docs/sdks/deploymentsv2/README.md)

* [getDeployments](docs/sdks/deploymentsv2/README.md#getdeployments) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [getLatestDeployment](docs/sdks/deploymentsv2/README.md#getlatestdeployment) - Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
* [getDeploymentInfo](docs/sdks/deploymentsv2/README.md#getdeploymentinfo) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
* [createDeployment](docs/sdks/deploymentsv2/README.md#createdeployment) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.

### [discoveryV1](docs/sdks/discoveryv1/README.md)

* [~~getPingServiceEndpointsDeprecated~~](docs/sdks/discoveryv1/README.md#getpingserviceendpointsdeprecated) - Returns an array of V1 regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back. :warning: **Deprecated**

### [discoveryV2](docs/sdks/discoveryv2/README.md)

* [getPingServiceEndpoints](docs/sdks/discoveryv2/README.md#getpingserviceendpoints) - Returns an array of all regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back.

### [lobbiesV1](docs/sdks/lobbiesv1/README.md)

* [~~createPrivateLobbyDeprecated~~](docs/sdks/lobbiesv1/README.md#createprivatelobbydeprecated) - :warning: **Deprecated**
* [~~createPublicLobbyDeprecated~~](docs/sdks/lobbiesv1/README.md#createpubliclobbydeprecated) - :warning: **Deprecated**
* [~~listActivePublicLobbiesDeprecatedV1~~](docs/sdks/lobbiesv1/README.md#listactivepubliclobbiesdeprecatedv1) - :warning: **Deprecated**

### [lobbiesV2](docs/sdks/lobbiesv2/README.md)

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

### [processesV1](docs/sdks/processesv1/README.md)

* [~~getRunningProcesses~~](docs/sdks/processesv1/README.md#getrunningprocesses) - Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. :warning: **Deprecated**
* [~~getStoppedProcesses~~](docs/sdks/processesv1/README.md#getstoppedprocesses) - Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. :warning: **Deprecated**
* [~~getProcessInfoDeprecated~~](docs/sdks/processesv1/README.md#getprocessinfodeprecated) - Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process). :warning: **Deprecated**

### [processesV2](docs/sdks/processesv2/README.md)

* [getProcessInfo](docs/sdks/processesv2/README.md#getprocessinfo) - Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
* [getLatestProcesses](docs/sdks/processesv2/README.md#getlatestprocesses) - Retrieve the 10 most recent [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `status` or `region`.
* [stopProcess](docs/sdks/processesv2/README.md#stopprocess) - Stops a [process](https://hathora.dev/docs/concepts/hathora-entities#process) immediately.
* [createProcess](docs/sdks/processesv2/README.md#createprocess) - Creates a [process](https://hathora.dev/docs/concepts/hathora-entities#process) without a room. Use this to pre-allocate processes ahead of time so that subsequent room assignment via [CreateRoom()](https://hathora.dev/api#tag/RoomV2/operation/CreateRoom) can be instant.

### [roomsV1](docs/sdks/roomsv1/README.md)

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
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401,429          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { SDKValidationError } from "@hathora/cloud-sdk-typescript/models/errors";

const hathoraCloud = new HathoraCloud({
    hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
    let result;
    try {
        result = await hathoraCloud.appsV1.getApps();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ApiError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
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
    const result = await hathoraCloud.appsV1.getApps();

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
    const result = await hathoraCloud.appsV1.getApps();

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
    const result = await hathoraCloud.appsV1.getApps();

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
    const result = await hathoraCloud.lobbiesV1.createPrivateLobbyDeprecated(
        "<YOUR_BEARER_TOKEN_HERE>",
        "app-af469a92-5b45-4565-b3c4-b79878de67d2",
        "London",
        false
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->



<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `appId` to `"app-af469a92-5b45-4565-b3c4-b79878de67d2"` at SDK initialization and then you do not have to pass the same value on calls to operations like `updateApp`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


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
    const result = await hathoraCloud.appsV1.updateApp(
        {
            authConfiguration: {},
            appName: "minecraft",
        },
        "app-af469a92-5b45-4565-b3c4-b79878de67d2"
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
    const result = await hathoraCloud.buildsV1.runBuildDeprecated(
        1,
        {
            file: await openAsBlob("./sample-file"),
        },
        "app-af469a92-5b45-4565-b3c4-b79878de67d2"
    );

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
    const result = await hathoraCloud.appsV1.getApps({
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
    });

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
    const result = await hathoraCloud.appsV1.getApps();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
