/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { roomsV1GetInactiveRoomsForProcessDeprecated } from "../../funcs/roomsV1GetInactiveRoomsForProcessDeprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  processId: z.string(),
  appId: z.string().optional(),
};

export const tool$roomsV1GetInactiveRoomsForProcessDeprecated: ToolDefinition<
  typeof args
> = {
  name: "rooms-v1-get-inactive-rooms-for-process-deprecated",
  description: `GetInactiveRoomsForProcessDeprecated`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await roomsV1GetInactiveRoomsForProcessDeprecated(
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
