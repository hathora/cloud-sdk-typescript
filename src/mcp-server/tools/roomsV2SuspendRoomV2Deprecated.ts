/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { roomsV2SuspendRoomV2Deprecated } from "../../funcs/roomsV2SuspendRoomV2Deprecated.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  roomId: z.string(),
  appId: z.string().optional(),
};

export const tool$roomsV2SuspendRoomV2Deprecated: ToolDefinition<typeof args> =
  {
    name: "rooms-v2-suspend-room-v2-deprecated",
    description: `SuspendRoomV2Deprecated

Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room). The room is unallocated from the process but can be rescheduled later using the same \`roomId\`.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await roomsV2SuspendRoomV2Deprecated(
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
