/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { deploymentsV1GetDeploymentInfoV1Deprecated } from "../../funcs/deploymentsV1GetDeploymentInfoV1Deprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  deploymentId: z.number().int(),
  appId: z.string().optional(),
};

export const tool$deploymentsV1GetDeploymentInfoV1Deprecated: ToolDefinition<
  typeof args
> = {
  name: "deployments-v1_get-deployment-info-v1-deprecated",
  description: `GetDeploymentInfoV1Deprecated

Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await deploymentsV1GetDeploymentInfoV1Deprecated(
      client,
      args.deploymentId,
      args.appId,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
