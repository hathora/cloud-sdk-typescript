/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { organizationsV1UpdateUserInvite } from "../../funcs/organizationsV1UpdateUserInvite.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  orgId: z.string(),
  updateUserInvite: components.UpdateUserInvite$inboundSchema,
};

export const tool$organizationsV1UpdateUserInvite: ToolDefinition<typeof args> =
  {
    name: "organizations-v1_update-user-invite",
    description: `UpdateUserInvite`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await organizationsV1UpdateUserInvite(
        client,
        args.orgId,
        args.updateUserInvite,
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
