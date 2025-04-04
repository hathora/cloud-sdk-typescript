/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { buildsV3GetBuilds } from "../../funcs/buildsV3GetBuilds.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  orgId: z.string().optional(),
};

export const tool$buildsV3GetBuilds: ToolDefinition<typeof args> = {
  name: "builds-v3-get-builds",
  description: `GetBuilds

Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await buildsV3GetBuilds(
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
