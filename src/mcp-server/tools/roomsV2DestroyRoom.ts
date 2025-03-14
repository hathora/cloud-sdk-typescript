/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { roomsV2DestroyRoom } from "../../funcs/roomsV2DestroyRoom.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  roomId: z.string(),
  appId: z.string().optional(),
};

export const tool$roomsV2DestroyRoom: ToolDefinition<typeof args> = {
  name: "rooms-v2-destroy-room",
  description: `DestroyRoom

Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room). All associated metadata is deleted.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await roomsV2DestroyRoom(
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

    return formatResult(void 0, apiCall);
  },
};
