/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { lobbiesV2GetLobbyInfo } from "../../funcs/lobbiesV2GetLobbyInfo.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  roomId: z.string(),
  appId: z.string().optional(),
};

export const tool$lobbiesV2GetLobbyInfo: ToolDefinition<typeof args> = {
  name: "lobbies-v2-get-lobby-info",
  description: `GetLobbyInfo

Get details for a lobby.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lobbiesV2GetLobbyInfo(
      client,
      args.roomId,
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
