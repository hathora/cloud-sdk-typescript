/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { appsV1UpdateAppV1Deprecated } from "../../funcs/appsV1UpdateAppV1Deprecated.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  appConfig: components.AppConfig$inboundSchema,
  appId: z.string().optional(),
};

export const tool$appsV1UpdateAppV1Deprecated: ToolDefinition<typeof args> = {
  name: "apps-v1-update-app-v1-deprecated",
  description: `UpdateAppV1Deprecated

Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using \`appId\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await appsV1UpdateAppV1Deprecated(
      client,
      args.appConfig,
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
