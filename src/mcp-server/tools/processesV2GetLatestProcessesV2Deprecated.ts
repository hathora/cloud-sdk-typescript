/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { processesV2GetLatestProcessesV2Deprecated } from "../../funcs/processesV2GetLatestProcessesV2Deprecated.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  appId: z.string().optional(),
  status: z.array(components.ProcessStatus$inboundSchema).optional(),
  region: z.array(components.Region$inboundSchema).optional(),
};

export const tool$processesV2GetLatestProcessesV2Deprecated: ToolDefinition<
  typeof args
> = {
  name: "processes-v2-get-latest-processes-v2-deprecated",
  description: `GetLatestProcessesV2Deprecated

Retrieve the 10 most recent [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a \`status\` or \`region\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await processesV2GetLatestProcessesV2Deprecated(
      client,
      args.appId,
      args.status,
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
