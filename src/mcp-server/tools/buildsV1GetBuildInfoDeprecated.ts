/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { buildsV1GetBuildInfoDeprecated } from "../../funcs/buildsV1GetBuildInfoDeprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  buildId: z.number().int(),
  appId: z.string().optional(),
};

export const tool$buildsV1GetBuildInfoDeprecated: ToolDefinition<typeof args> =
  {
    name: "builds-v1-get-build-info-deprecated",
    description: `GetBuildInfoDeprecated

Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await buildsV1GetBuildInfoDeprecated(
        client,
        args.buildId,
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
