/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { tokensV1GetOrgTokens } from "../../funcs/tokensV1GetOrgTokens.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  orgId: z.string(),
};

export const tool$tokensV1GetOrgTokens: ToolDefinition<typeof args> = {
  name: "tokens-v1-get-org-tokens",
  description: `GetOrgTokens

List all organization tokens for a given org.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tokensV1GetOrgTokens(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
