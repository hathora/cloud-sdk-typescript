/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Scope, Scope$inboundSchema, Scope$outboundSchema } from "./scope.js";
import {
  UserRole,
  UserRole$inboundSchema,
  UserRole$outboundSchema,
} from "./userrole.js";

/**
 * Scopes can only be removed or added if a user has those scopes.
 */
export type UpdateUserInviteScopes = UserRole | Array<Scope>;

export type UpdateUserInvite = {
  /**
   * Scopes can only be removed or added if a user has those scopes.
   */
  scopes: UserRole | Array<Scope>;
  /**
   * A user's email.
   */
  userEmail: string;
};

/** @internal */
export const UpdateUserInviteScopes$inboundSchema: z.ZodType<
  UpdateUserInviteScopes,
  z.ZodTypeDef,
  unknown
> = z.union([UserRole$inboundSchema, z.array(Scope$inboundSchema)]);

/** @internal */
export type UpdateUserInviteScopes$Outbound = string | Array<string>;

/** @internal */
export const UpdateUserInviteScopes$outboundSchema: z.ZodType<
  UpdateUserInviteScopes$Outbound,
  z.ZodTypeDef,
  UpdateUserInviteScopes
> = z.union([UserRole$outboundSchema, z.array(Scope$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserInviteScopes$ {
  /** @deprecated use `UpdateUserInviteScopes$inboundSchema` instead. */
  export const inboundSchema = UpdateUserInviteScopes$inboundSchema;
  /** @deprecated use `UpdateUserInviteScopes$outboundSchema` instead. */
  export const outboundSchema = UpdateUserInviteScopes$outboundSchema;
  /** @deprecated use `UpdateUserInviteScopes$Outbound` instead. */
  export type Outbound = UpdateUserInviteScopes$Outbound;
}

export function updateUserInviteScopesToJSON(
  updateUserInviteScopes: UpdateUserInviteScopes,
): string {
  return JSON.stringify(
    UpdateUserInviteScopes$outboundSchema.parse(updateUserInviteScopes),
  );
}

export function updateUserInviteScopesFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUserInviteScopes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUserInviteScopes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUserInviteScopes' from JSON`,
  );
}

/** @internal */
export const UpdateUserInvite$inboundSchema: z.ZodType<
  UpdateUserInvite,
  z.ZodTypeDef,
  unknown
> = z.object({
  scopes: z.union([UserRole$inboundSchema, z.array(Scope$inboundSchema)]),
  userEmail: z.string(),
});

/** @internal */
export type UpdateUserInvite$Outbound = {
  scopes: string | Array<string>;
  userEmail: string;
};

/** @internal */
export const UpdateUserInvite$outboundSchema: z.ZodType<
  UpdateUserInvite$Outbound,
  z.ZodTypeDef,
  UpdateUserInvite
> = z.object({
  scopes: z.union([UserRole$outboundSchema, z.array(Scope$outboundSchema)]),
  userEmail: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserInvite$ {
  /** @deprecated use `UpdateUserInvite$inboundSchema` instead. */
  export const inboundSchema = UpdateUserInvite$inboundSchema;
  /** @deprecated use `UpdateUserInvite$outboundSchema` instead. */
  export const outboundSchema = UpdateUserInvite$outboundSchema;
  /** @deprecated use `UpdateUserInvite$Outbound` instead. */
  export type Outbound = UpdateUserInvite$Outbound;
}

export function updateUserInviteToJSON(
  updateUserInvite: UpdateUserInvite,
): string {
  return JSON.stringify(
    UpdateUserInvite$outboundSchema.parse(updateUserInvite),
  );
}

export function updateUserInviteFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUserInvite, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUserInvite$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUserInvite' from JSON`,
  );
}