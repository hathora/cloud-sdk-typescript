/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateUserInviteRequest = {
  orgId: string;
  updateUserInvite: components.UpdateUserInvite;
};

/** @internal */
export const UpdateUserInviteRequest$inboundSchema: z.ZodType<
  UpdateUserInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string(),
  UpdateUserInvite: z.lazy(() => components.UpdateUserInvite$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "UpdateUserInvite": "updateUserInvite",
  });
});

/** @internal */
export type UpdateUserInviteRequest$Outbound = {
  orgId: string;
  UpdateUserInvite: components.UpdateUserInvite$Outbound;
};

/** @internal */
export const UpdateUserInviteRequest$outboundSchema: z.ZodType<
  UpdateUserInviteRequest$Outbound,
  z.ZodTypeDef,
  UpdateUserInviteRequest
> = z.object({
  orgId: z.string(),
  updateUserInvite: z.lazy(() => components.UpdateUserInvite$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    updateUserInvite: "UpdateUserInvite",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserInviteRequest$ {
  /** @deprecated use `UpdateUserInviteRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateUserInviteRequest$inboundSchema;
  /** @deprecated use `UpdateUserInviteRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateUserInviteRequest$outboundSchema;
  /** @deprecated use `UpdateUserInviteRequest$Outbound` instead. */
  export type Outbound = UpdateUserInviteRequest$Outbound;
}

export function updateUserInviteRequestToJSON(
  updateUserInviteRequest: UpdateUserInviteRequest,
): string {
  return JSON.stringify(
    UpdateUserInviteRequest$outboundSchema.parse(updateUserInviteRequest),
  );
}

export function updateUserInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUserInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUserInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUserInviteRequest' from JSON`,
  );
}
