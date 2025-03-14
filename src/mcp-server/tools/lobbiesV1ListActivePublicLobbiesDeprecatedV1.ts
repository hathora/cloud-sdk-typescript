/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { lobbiesV1ListActivePublicLobbiesDeprecatedV1 } from "../../funcs/lobbiesV1ListActivePublicLobbiesDeprecatedV1.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  appId: z.string().optional(),
  local: z.boolean().default(false),
  region: components.Region$inboundSchema.optional(),
};

export const tool$lobbiesV1ListActivePublicLobbiesDeprecatedV1: ToolDefinition<
  typeof args
> = {
  name: "lobbies-v1-list-active-public-lobbies-deprecated-v1",
  description: `ListActivePublicLobbiesDeprecatedV1`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] =
      await lobbiesV1ListActivePublicLobbiesDeprecatedV1(
        client,
        args.appId,
        args.local,
        args.region,
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
