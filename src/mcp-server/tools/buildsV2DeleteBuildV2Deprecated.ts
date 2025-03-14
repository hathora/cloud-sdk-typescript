/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { buildsV2DeleteBuildV2Deprecated } from "../../funcs/buildsV2DeleteBuildV2Deprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  buildId: z.number().int(),
  appId: z.string().optional(),
};

export const tool$buildsV2DeleteBuildV2Deprecated: ToolDefinition<typeof args> =
  {
    name: "builds-v2-delete-build-v2-deprecated",
    description: `DeleteBuildV2Deprecated

Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await buildsV2DeleteBuildV2Deprecated(
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

      return formatResult(void 0, apiCall);
    },
  };
