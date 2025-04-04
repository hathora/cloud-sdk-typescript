/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { logsV1DownloadLogForProcess } from "../../funcs/logsV1DownloadLogForProcess.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  processId: z.string(),
  appId: z.string().optional(),
};

export const tool$logsV1DownloadLogForProcess: ToolDefinition<typeof args> = {
  name: "logs-v1-download-log-for-process",
  description: `DownloadLogForProcess

Download entire log file for a stopped process.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await logsV1DownloadLogForProcess(
      client,
      args.processId,
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
