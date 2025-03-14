/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { deploymentsV1GetDeploymentsV1Deprecated } from "../../funcs/deploymentsV1GetDeploymentsV1Deprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  appId: z.string().optional(),
};

export const tool$deploymentsV1GetDeploymentsV1Deprecated: ToolDefinition<
  typeof args
> = {
  name: "deployments-v1-get-deployments-v1-deprecated",
  description: `GetDeploymentsV1Deprecated

Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await deploymentsV1GetDeploymentsV1Deprecated(
      client,
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
