/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { authV1LoginNickname } from "../../funcs/authV1LoginNickname.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  nicknameObject: components.NicknameObject$inboundSchema,
  appId: z.string().optional(),
};

export const tool$authV1LoginNickname: ToolDefinition<typeof args> = {
  name: "auth-v1_login-nickname",
  description: `LoginNickname

Returns a unique player token with a specified nickname for a user.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await authV1LoginNickname(
      client,
      args.nicknameObject,
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
