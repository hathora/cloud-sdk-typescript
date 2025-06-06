/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBuildsGlobals = {
  orgId?: string | undefined;
};

export type GetBuildsRequest = {
  orgId?: string | undefined;
};

/** @internal */
export const GetBuildsGlobals$inboundSchema: z.ZodType<
  GetBuildsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetBuildsGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetBuildsGlobals$outboundSchema: z.ZodType<
  GetBuildsGlobals$Outbound,
  z.ZodTypeDef,
  GetBuildsGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBuildsGlobals$ {
  /** @deprecated use `GetBuildsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetBuildsGlobals$inboundSchema;
  /** @deprecated use `GetBuildsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetBuildsGlobals$outboundSchema;
  /** @deprecated use `GetBuildsGlobals$Outbound` instead. */
  export type Outbound = GetBuildsGlobals$Outbound;
}

export function getBuildsGlobalsToJSON(
  getBuildsGlobals: GetBuildsGlobals,
): string {
  return JSON.stringify(
    GetBuildsGlobals$outboundSchema.parse(getBuildsGlobals),
  );
}

export function getBuildsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetBuildsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBuildsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBuildsGlobals' from JSON`,
  );
}

/** @internal */
export const GetBuildsRequest$inboundSchema: z.ZodType<
  GetBuildsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetBuildsRequest$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetBuildsRequest$outboundSchema: z.ZodType<
  GetBuildsRequest$Outbound,
  z.ZodTypeDef,
  GetBuildsRequest
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBuildsRequest$ {
  /** @deprecated use `GetBuildsRequest$inboundSchema` instead. */
  export const inboundSchema = GetBuildsRequest$inboundSchema;
  /** @deprecated use `GetBuildsRequest$outboundSchema` instead. */
  export const outboundSchema = GetBuildsRequest$outboundSchema;
  /** @deprecated use `GetBuildsRequest$Outbound` instead. */
  export type Outbound = GetBuildsRequest$Outbound;
}

export function getBuildsRequestToJSON(
  getBuildsRequest: GetBuildsRequest,
): string {
  return JSON.stringify(
    GetBuildsRequest$outboundSchema.parse(getBuildsRequest),
  );
}

export function getBuildsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBuildsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBuildsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBuildsRequest' from JSON`,
  );
}
