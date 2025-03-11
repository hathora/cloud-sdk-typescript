/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { HathoraCloudCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$appsV1CreateAppV1Deprecated } from "./tools/appsV1CreateAppV1Deprecated.js";
import { tool$appsV1DeleteAppV1Deprecated } from "./tools/appsV1DeleteAppV1Deprecated.js";
import { tool$appsV1GetAppInfoV1Deprecated } from "./tools/appsV1GetAppInfoV1Deprecated.js";
import { tool$appsV1GetAppsV1Deprecated } from "./tools/appsV1GetAppsV1Deprecated.js";
import { tool$appsV1UpdateAppV1Deprecated } from "./tools/appsV1UpdateAppV1Deprecated.js";
import { tool$appsV2CreateApp } from "./tools/appsV2CreateApp.js";
import { tool$appsV2DeleteApp } from "./tools/appsV2DeleteApp.js";
import { tool$appsV2GetApp } from "./tools/appsV2GetApp.js";
import { tool$appsV2GetApps } from "./tools/appsV2GetApps.js";
import { tool$appsV2UpdateApp } from "./tools/appsV2UpdateApp.js";
import { tool$authV1LoginAnonymous } from "./tools/authV1LoginAnonymous.js";
import { tool$authV1LoginGoogle } from "./tools/authV1LoginGoogle.js";
import { tool$authV1LoginNickname } from "./tools/authV1LoginNickname.js";
import { tool$billingV1GetBalance } from "./tools/billingV1GetBalance.js";
import { tool$billingV1GetInvoices } from "./tools/billingV1GetInvoices.js";
import { tool$billingV1GetPaymentMethod } from "./tools/billingV1GetPaymentMethod.js";
import { tool$billingV1GetUpcomingInvoiceItems } from "./tools/billingV1GetUpcomingInvoiceItems.js";
import { tool$billingV1GetUpcomingInvoiceTotal } from "./tools/billingV1GetUpcomingInvoiceTotal.js";
import { tool$billingV1InitStripeCustomerPortalUrl } from "./tools/billingV1InitStripeCustomerPortalUrl.js";
import { tool$buildsV1CreateBuildDeprecated } from "./tools/buildsV1CreateBuildDeprecated.js";
import { tool$buildsV1DeleteBuildDeprecated } from "./tools/buildsV1DeleteBuildDeprecated.js";
import { tool$buildsV1GetBuildInfoDeprecated } from "./tools/buildsV1GetBuildInfoDeprecated.js";
import { tool$buildsV1GetBuildsDeprecated } from "./tools/buildsV1GetBuildsDeprecated.js";
import { tool$buildsV1RunBuildDeprecated } from "./tools/buildsV1RunBuildDeprecated.js";
import { tool$buildsV2CreateBuildV2Deprecated } from "./tools/buildsV2CreateBuildV2Deprecated.js";
import { tool$buildsV2CreateBuildWithUploadUrlV2Deprecated } from "./tools/buildsV2CreateBuildWithUploadUrlV2Deprecated.js";
import { tool$buildsV2CreateWithMultipartUploadsV2Deprecated } from "./tools/buildsV2CreateWithMultipartUploadsV2Deprecated.js";
import { tool$buildsV2DeleteBuildV2Deprecated } from "./tools/buildsV2DeleteBuildV2Deprecated.js";
import { tool$buildsV2GetBuildInfoV2Deprecated } from "./tools/buildsV2GetBuildInfoV2Deprecated.js";
import { tool$buildsV2GetBuildsV2Deprecated } from "./tools/buildsV2GetBuildsV2Deprecated.js";
import { tool$buildsV2RunBuildV2Deprecated } from "./tools/buildsV2RunBuildV2Deprecated.js";
import { tool$buildsV3CreateBuild } from "./tools/buildsV3CreateBuild.js";
import { tool$buildsV3DeleteBuild } from "./tools/buildsV3DeleteBuild.js";
import { tool$buildsV3GetBuild } from "./tools/buildsV3GetBuild.js";
import { tool$buildsV3GetBuilds } from "./tools/buildsV3GetBuilds.js";
import { tool$buildsV3RunBuild } from "./tools/buildsV3RunBuild.js";
import { tool$deploymentsV1CreateDeploymentV1Deprecated } from "./tools/deploymentsV1CreateDeploymentV1Deprecated.js";
import { tool$deploymentsV1GetDeploymentInfoV1Deprecated } from "./tools/deploymentsV1GetDeploymentInfoV1Deprecated.js";
import { tool$deploymentsV1GetDeploymentsV1Deprecated } from "./tools/deploymentsV1GetDeploymentsV1Deprecated.js";
import { tool$deploymentsV1GetLatestDeploymentV1Deprecated } from "./tools/deploymentsV1GetLatestDeploymentV1Deprecated.js";
import { tool$deploymentsV2CreateDeploymentV2Deprecated } from "./tools/deploymentsV2CreateDeploymentV2Deprecated.js";
import { tool$deploymentsV2GetDeploymentInfoV2Deprecated } from "./tools/deploymentsV2GetDeploymentInfoV2Deprecated.js";
import { tool$deploymentsV2GetDeploymentsV2Deprecated } from "./tools/deploymentsV2GetDeploymentsV2Deprecated.js";
import { tool$deploymentsV2GetLatestDeploymentV2Deprecated } from "./tools/deploymentsV2GetLatestDeploymentV2Deprecated.js";
import { tool$deploymentsV3CreateDeployment } from "./tools/deploymentsV3CreateDeployment.js";
import { tool$deploymentsV3GetDeployment } from "./tools/deploymentsV3GetDeployment.js";
import { tool$deploymentsV3GetDeployments } from "./tools/deploymentsV3GetDeployments.js";
import { tool$deploymentsV3GetLatestDeployment } from "./tools/deploymentsV3GetLatestDeployment.js";
import { tool$discoveryV1GetPingServiceEndpointsDeprecated } from "./tools/discoveryV1GetPingServiceEndpointsDeprecated.js";
import { tool$discoveryV2GetPingServiceEndpoints } from "./tools/discoveryV2GetPingServiceEndpoints.js";
import { tool$fleetsV1GetFleetMetrics } from "./tools/fleetsV1GetFleetMetrics.js";
import { tool$fleetsV1GetFleetRegion } from "./tools/fleetsV1GetFleetRegion.js";
import { tool$fleetsV1GetFleets } from "./tools/fleetsV1GetFleets.js";
import { tool$fleetsV1UpdateFleetRegion } from "./tools/fleetsV1UpdateFleetRegion.js";
import { tool$lobbiesV1ListActivePublicLobbiesDeprecatedV1 } from "./tools/lobbiesV1ListActivePublicLobbiesDeprecatedV1.js";
import { tool$lobbiesV2GetLobbyInfo } from "./tools/lobbiesV2GetLobbyInfo.js";
import { tool$lobbiesV2ListActivePublicLobbiesDeprecatedV2 } from "./tools/lobbiesV2ListActivePublicLobbiesDeprecatedV2.js";
import { tool$lobbiesV2SetLobbyState } from "./tools/lobbiesV2SetLobbyState.js";
import { tool$lobbiesV3GetLobbyInfoByRoomId } from "./tools/lobbiesV3GetLobbyInfoByRoomId.js";
import { tool$lobbiesV3GetLobbyInfoByShortCode } from "./tools/lobbiesV3GetLobbyInfoByShortCode.js";
import { tool$lobbiesV3ListActivePublicLobbies } from "./tools/lobbiesV3ListActivePublicLobbies.js";
import { tool$logsV1DownloadLogForProcess } from "./tools/logsV1DownloadLogForProcess.js";
import { tool$logsV1GetLogsForProcess } from "./tools/logsV1GetLogsForProcess.js";
import { tool$managementV1SendVerificationEmail } from "./tools/managementV1SendVerificationEmail.js";
import { tool$metricsV1GetMetricsDeprecated } from "./tools/metricsV1GetMetricsDeprecated.js";
import { tool$organizationsV1AcceptInvite } from "./tools/organizationsV1AcceptInvite.js";
import { tool$organizationsV1GetOrgMembers } from "./tools/organizationsV1GetOrgMembers.js";
import { tool$organizationsV1GetOrgPendingInvites } from "./tools/organizationsV1GetOrgPendingInvites.js";
import { tool$organizationsV1GetOrgs } from "./tools/organizationsV1GetOrgs.js";
import { tool$organizationsV1GetUsageLimits } from "./tools/organizationsV1GetUsageLimits.js";
import { tool$organizationsV1GetUserPendingInvites } from "./tools/organizationsV1GetUserPendingInvites.js";
import { tool$organizationsV1InviteUser } from "./tools/organizationsV1InviteUser.js";
import { tool$organizationsV1RejectInvite } from "./tools/organizationsV1RejectInvite.js";
import { tool$organizationsV1RescindInvite } from "./tools/organizationsV1RescindInvite.js";
import { tool$organizationsV1UpdateUserInvite } from "./tools/organizationsV1UpdateUserInvite.js";
import { tool$processesV1GetProcessInfoDeprecated } from "./tools/processesV1GetProcessInfoDeprecated.js";
import { tool$processesV1GetRunningProcesses } from "./tools/processesV1GetRunningProcesses.js";
import { tool$processesV1GetStoppedProcesses } from "./tools/processesV1GetStoppedProcesses.js";
import { tool$processesV2CreateProcessV2Deprecated } from "./tools/processesV2CreateProcessV2Deprecated.js";
import { tool$processesV2GetLatestProcessesV2Deprecated } from "./tools/processesV2GetLatestProcessesV2Deprecated.js";
import { tool$processesV2GetProcessesCountExperimentalV2Deprecated } from "./tools/processesV2GetProcessesCountExperimentalV2Deprecated.js";
import { tool$processesV2GetProcessInfoV2Deprecated } from "./tools/processesV2GetProcessInfoV2Deprecated.js";
import { tool$processesV2StopProcessV2Deprecated } from "./tools/processesV2StopProcessV2Deprecated.js";
import { tool$processesV3CreateProcess } from "./tools/processesV3CreateProcess.js";
import { tool$processesV3GetLatestProcesses } from "./tools/processesV3GetLatestProcesses.js";
import { tool$processesV3GetProcess } from "./tools/processesV3GetProcess.js";
import { tool$processesV3GetProcessesCountExperimental } from "./tools/processesV3GetProcessesCountExperimental.js";
import { tool$processesV3GetProcessMetrics } from "./tools/processesV3GetProcessMetrics.js";
import { tool$processesV3StopProcess } from "./tools/processesV3StopProcess.js";
import { tool$roomsV1CreateRoomDeprecated } from "./tools/roomsV1CreateRoomDeprecated.js";
import { tool$roomsV1DestroyRoomDeprecated } from "./tools/roomsV1DestroyRoomDeprecated.js";
import { tool$roomsV1GetActiveRoomsForProcessDeprecated } from "./tools/roomsV1GetActiveRoomsForProcessDeprecated.js";
import { tool$roomsV1GetConnectionInfoDeprecated } from "./tools/roomsV1GetConnectionInfoDeprecated.js";
import { tool$roomsV1GetInactiveRoomsForProcessDeprecated } from "./tools/roomsV1GetInactiveRoomsForProcessDeprecated.js";
import { tool$roomsV1GetRoomInfoDeprecated } from "./tools/roomsV1GetRoomInfoDeprecated.js";
import { tool$roomsV1SuspendRoomDeprecated } from "./tools/roomsV1SuspendRoomDeprecated.js";
import { tool$roomsV2CreateRoom } from "./tools/roomsV2CreateRoom.js";
import { tool$roomsV2DestroyRoom } from "./tools/roomsV2DestroyRoom.js";
import { tool$roomsV2GetActiveRoomsForProcess } from "./tools/roomsV2GetActiveRoomsForProcess.js";
import { tool$roomsV2GetConnectionInfo } from "./tools/roomsV2GetConnectionInfo.js";
import { tool$roomsV2GetInactiveRoomsForProcess } from "./tools/roomsV2GetInactiveRoomsForProcess.js";
import { tool$roomsV2GetRoomInfo } from "./tools/roomsV2GetRoomInfo.js";
import { tool$roomsV2ResumeRoom } from "./tools/roomsV2ResumeRoom.js";
import { tool$roomsV2SuspendRoomV2Deprecated } from "./tools/roomsV2SuspendRoomV2Deprecated.js";
import { tool$roomsV2UpdateRoomConfig } from "./tools/roomsV2UpdateRoomConfig.js";
import { tool$tokensV1CreateOrgToken } from "./tools/tokensV1CreateOrgToken.js";
import { tool$tokensV1GetOrgTokens } from "./tools/tokensV1GetOrgTokens.js";
import { tool$tokensV1RevokeOrgToken } from "./tools/tokensV1RevokeOrgToken.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  hathoraDevToken?: SDKOptions["hathoraDevToken"] | undefined;
  orgId?: SDKOptions["orgId"] | undefined;
  appId?: SDKOptions["appId"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "HathoraCloud",
    version: "2.15.0",
  });

  const client = new HathoraCloudCore({
    hathoraDevToken: deps.hathoraDevToken,
    orgId: deps.orgId,
    appId: deps.appId,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const register = { tool, resource, resourceTemplate };
  void register; // suppress unused warnings

  tool(tool$tokensV1GetOrgTokens);
  tool(tool$tokensV1CreateOrgToken);
  tool(tool$tokensV1RevokeOrgToken);
  tool(tool$roomsV1CreateRoomDeprecated);
  tool(tool$roomsV1GetRoomInfoDeprecated);
  tool(tool$roomsV1GetActiveRoomsForProcessDeprecated);
  tool(tool$roomsV1GetInactiveRoomsForProcessDeprecated);
  tool(tool$roomsV1DestroyRoomDeprecated);
  tool(tool$roomsV1SuspendRoomDeprecated);
  tool(tool$roomsV1GetConnectionInfoDeprecated);
  tool(tool$roomsV2CreateRoom);
  tool(tool$roomsV2GetRoomInfo);
  tool(tool$roomsV2GetActiveRoomsForProcess);
  tool(tool$roomsV2GetInactiveRoomsForProcess);
  tool(tool$roomsV2DestroyRoom);
  tool(tool$roomsV2SuspendRoomV2Deprecated);
  tool(tool$roomsV2GetConnectionInfo);
  tool(tool$roomsV2UpdateRoomConfig);
  tool(tool$roomsV2ResumeRoom);
  tool(tool$processesV1GetRunningProcesses);
  tool(tool$processesV1GetStoppedProcesses);
  tool(tool$processesV1GetProcessInfoDeprecated);
  tool(tool$processesV2GetProcessInfoV2Deprecated);
  tool(tool$processesV2GetLatestProcessesV2Deprecated);
  tool(tool$processesV2GetProcessesCountExperimentalV2Deprecated);
  tool(tool$processesV2StopProcessV2Deprecated);
  tool(tool$processesV2CreateProcessV2Deprecated);
  tool(tool$processesV3GetLatestProcesses);
  tool(tool$processesV3GetProcessesCountExperimental);
  tool(tool$processesV3CreateProcess);
  tool(tool$processesV3GetProcess);
  tool(tool$processesV3StopProcess);
  tool(tool$processesV3GetProcessMetrics);
  tool(tool$organizationsV1GetOrgs);
  tool(tool$organizationsV1GetUserPendingInvites);
  tool(tool$organizationsV1GetOrgMembers);
  tool(tool$organizationsV1InviteUser);
  tool(tool$organizationsV1UpdateUserInvite);
  tool(tool$organizationsV1RescindInvite);
  tool(tool$organizationsV1GetOrgPendingInvites);
  tool(tool$organizationsV1AcceptInvite);
  tool(tool$organizationsV1RejectInvite);
  tool(tool$organizationsV1GetUsageLimits);
  tool(tool$metricsV1GetMetricsDeprecated);
  tool(tool$managementV1SendVerificationEmail);
  tool(tool$logsV1GetLogsForProcess);
  tool(tool$logsV1DownloadLogForProcess);
  tool(tool$lobbiesV1ListActivePublicLobbiesDeprecatedV1);
  tool(tool$lobbiesV2ListActivePublicLobbiesDeprecatedV2);
  tool(tool$lobbiesV2GetLobbyInfo);
  tool(tool$lobbiesV2SetLobbyState);
  tool(tool$lobbiesV3ListActivePublicLobbies);
  tool(tool$lobbiesV3GetLobbyInfoByRoomId);
  tool(tool$lobbiesV3GetLobbyInfoByShortCode);
  tool(tool$fleetsV1GetFleets);
  tool(tool$fleetsV1GetFleetRegion);
  tool(tool$fleetsV1UpdateFleetRegion);
  tool(tool$fleetsV1GetFleetMetrics);
  tool(tool$discoveryV1GetPingServiceEndpointsDeprecated);
  tool(tool$discoveryV2GetPingServiceEndpoints);
  tool(tool$deploymentsV1GetDeploymentsV1Deprecated);
  tool(tool$deploymentsV1GetLatestDeploymentV1Deprecated);
  tool(tool$deploymentsV1GetDeploymentInfoV1Deprecated);
  tool(tool$deploymentsV1CreateDeploymentV1Deprecated);
  tool(tool$deploymentsV2GetDeploymentsV2Deprecated);
  tool(tool$deploymentsV2GetLatestDeploymentV2Deprecated);
  tool(tool$deploymentsV2GetDeploymentInfoV2Deprecated);
  tool(tool$deploymentsV2CreateDeploymentV2Deprecated);
  tool(tool$deploymentsV3GetDeployments);
  tool(tool$deploymentsV3CreateDeployment);
  tool(tool$deploymentsV3GetLatestDeployment);
  tool(tool$deploymentsV3GetDeployment);
  tool(tool$buildsV1GetBuildsDeprecated);
  tool(tool$buildsV1GetBuildInfoDeprecated);
  tool(tool$buildsV1CreateBuildDeprecated);
  tool(tool$buildsV1DeleteBuildDeprecated);
  tool(tool$buildsV1RunBuildDeprecated);
  tool(tool$buildsV2GetBuildsV2Deprecated);
  tool(tool$buildsV2GetBuildInfoV2Deprecated);
  tool(tool$buildsV2CreateBuildV2Deprecated);
  tool(tool$buildsV2CreateBuildWithUploadUrlV2Deprecated);
  tool(tool$buildsV2CreateWithMultipartUploadsV2Deprecated);
  tool(tool$buildsV2DeleteBuildV2Deprecated);
  tool(tool$buildsV2RunBuildV2Deprecated);
  tool(tool$buildsV3GetBuilds);
  tool(tool$buildsV3CreateBuild);
  tool(tool$buildsV3GetBuild);
  tool(tool$buildsV3DeleteBuild);
  tool(tool$buildsV3RunBuild);
  tool(tool$billingV1GetBalance);
  tool(tool$billingV1GetUpcomingInvoiceItems);
  tool(tool$billingV1GetUpcomingInvoiceTotal);
  tool(tool$billingV1GetPaymentMethod);
  tool(tool$billingV1InitStripeCustomerPortalUrl);
  tool(tool$billingV1GetInvoices);
  tool(tool$authV1LoginAnonymous);
  tool(tool$authV1LoginNickname);
  tool(tool$authV1LoginGoogle);
  tool(tool$appsV1GetAppsV1Deprecated);
  tool(tool$appsV1CreateAppV1Deprecated);
  tool(tool$appsV1UpdateAppV1Deprecated);
  tool(tool$appsV1GetAppInfoV1Deprecated);
  tool(tool$appsV1DeleteAppV1Deprecated);
  tool(tool$appsV2GetApps);
  tool(tool$appsV2CreateApp);
  tool(tool$appsV2UpdateApp);
  tool(tool$appsV2GetApp);
  tool(tool$appsV2DeleteApp);

  return server;
}
