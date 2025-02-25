/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { organizationsV1AcceptInvite } from "../../funcs/organizationsV1AcceptInvite.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  orgId: z.string(),
};

export const tool$organizationsV1AcceptInvite: ToolDefinition<typeof args> = {
  name: "organizations-v1_accept-invite",
  description: `AcceptInvite`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await organizationsV1AcceptInvite(
      client,
      args.orgId,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
