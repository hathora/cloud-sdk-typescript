/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { authV1LoginGoogle } from "../../funcs/authV1LoginGoogle.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  googleIdTokenObject: components.GoogleIdTokenObject$inboundSchema,
  appId: z.string().optional(),
};

export const tool$authV1LoginGoogle: ToolDefinition<typeof args> = {
  name: "auth-v1_login-google",
  description: `LoginGoogle

Returns a unique player token using a Google-signed OIDC \`idToken\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await authV1LoginGoogle(
      client,
      args.googleIdTokenObject,
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
