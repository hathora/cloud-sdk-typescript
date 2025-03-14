/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { buildsV2RunBuildV2Deprecated } from "../../funcs/buildsV2RunBuildV2Deprecated.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  buildId: z.number().int(),
  requestBody: operations.RunBuildV2DeprecatedRequestBody$inboundSchema,
  appId: z.string().optional(),
};

export const tool$buildsV2RunBuildV2Deprecated: ToolDefinition<typeof args> = {
  name: "builds-v2-run-build-v2-deprecated",
  description: `RunBuildV2Deprecated

Builds a game server artifact from a tarball you provide. Pass in the \`buildId\` generated from [\`CreateBuild()\`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await buildsV2RunBuildV2Deprecated(
      client,
      args.buildId,
      args.requestBody,
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
