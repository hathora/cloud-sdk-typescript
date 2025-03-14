/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { appsV2GetApp } from "../../funcs/appsV2GetApp.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  appId: z.string().optional(),
};

export const tool$appsV2GetApp: ToolDefinition<typeof args> = {
  name: "apps-v2-get-app",
  description: `GetApp

Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using \`appId\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await appsV2GetApp(
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
