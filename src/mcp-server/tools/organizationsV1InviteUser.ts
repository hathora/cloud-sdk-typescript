/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { organizationsV1InviteUser } from "../../funcs/organizationsV1InviteUser.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  orgId: z.string(),
  createUserInvite: components.CreateUserInvite$inboundSchema,
};

export const tool$organizationsV1InviteUser: ToolDefinition<typeof args> = {
  name: "organizations-v1-invite-user",
  description: `InviteUser`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await organizationsV1InviteUser(
      client,
      args.orgId,
      args.createUserInvite,
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
