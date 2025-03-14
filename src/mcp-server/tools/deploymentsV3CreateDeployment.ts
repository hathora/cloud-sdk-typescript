/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { deploymentsV3CreateDeployment } from "../../funcs/deploymentsV3CreateDeployment.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  deploymentConfigV3: components.DeploymentConfigV3$inboundSchema,
  appId: z.string().optional(),
};

export const tool$deploymentsV3CreateDeployment: ToolDefinition<typeof args> = {
  name: "deployments-v3-create-deployment",
  description: `CreateDeployment

Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await deploymentsV3CreateDeployment(
      client,
      args.deploymentConfigV3,
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
