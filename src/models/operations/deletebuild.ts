/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteBuildGlobals = {
  orgId?: string | undefined;
};

export type DeleteBuildRequest = {
  buildId: string;
  orgId?: string | undefined;
};

/** @internal */
export const DeleteBuildGlobals$inboundSchema: z.ZodType<
  DeleteBuildGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type DeleteBuildGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const DeleteBuildGlobals$outboundSchema: z.ZodType<
  DeleteBuildGlobals$Outbound,
  z.ZodTypeDef,
  DeleteBuildGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBuildGlobals$ {
  /** @deprecated use `DeleteBuildGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteBuildGlobals$inboundSchema;
  /** @deprecated use `DeleteBuildGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteBuildGlobals$outboundSchema;
  /** @deprecated use `DeleteBuildGlobals$Outbound` instead. */
  export type Outbound = DeleteBuildGlobals$Outbound;
}

export function deleteBuildGlobalsToJSON(
  deleteBuildGlobals: DeleteBuildGlobals,
): string {
  return JSON.stringify(
    DeleteBuildGlobals$outboundSchema.parse(deleteBuildGlobals),
  );
}

export function deleteBuildGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteBuildGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteBuildGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteBuildGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteBuildRequest$inboundSchema: z.ZodType<
  DeleteBuildRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  buildId: z.string(),
  orgId: z.string().optional(),
});

/** @internal */
export type DeleteBuildRequest$Outbound = {
  buildId: string;
  orgId?: string | undefined;
};

/** @internal */
export const DeleteBuildRequest$outboundSchema: z.ZodType<
  DeleteBuildRequest$Outbound,
  z.ZodTypeDef,
  DeleteBuildRequest
> = z.object({
  buildId: z.string(),
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBuildRequest$ {
  /** @deprecated use `DeleteBuildRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteBuildRequest$inboundSchema;
  /** @deprecated use `DeleteBuildRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteBuildRequest$outboundSchema;
  /** @deprecated use `DeleteBuildRequest$Outbound` instead. */
  export type Outbound = DeleteBuildRequest$Outbound;
}

export function deleteBuildRequestToJSON(
  deleteBuildRequest: DeleteBuildRequest,
): string {
  return JSON.stringify(
    DeleteBuildRequest$outboundSchema.parse(deleteBuildRequest),
  );
}

export function deleteBuildRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteBuildRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteBuildRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteBuildRequest' from JSON`,
  );
}
