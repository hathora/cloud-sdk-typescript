/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { billingV1GetUpcomingInvoiceItems } from "../../funcs/billingV1GetUpcomingInvoiceItems.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  orgId: z.string().optional(),
};

export const tool$billingV1GetUpcomingInvoiceItems: ToolDefinition<
  typeof args
> = {
  name: "billing-v1-get-upcoming-invoice-items",
  description: `GetUpcomingInvoiceItems`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await billingV1GetUpcomingInvoiceItems(
      client,
      args.orgId,
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
