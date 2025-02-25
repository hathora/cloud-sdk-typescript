/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { appsV1DeleteAppV1Deprecated } from "../../funcs/appsV1DeleteAppV1Deprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  appId: z.string().optional(),
};

export const tool$appsV1DeleteAppV1Deprecated: ToolDefinition<typeof args> = {
  name: "apps-v1_delete-app-v1-deprecated",
  description: `DeleteAppV1Deprecated

Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using \`appId\`. Your organization will lose access to this application.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await appsV1DeleteAppV1Deprecated(
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

    return formatResult(void 0, apiCall);
  },
};
