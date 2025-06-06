/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUsageLimitsGlobals = {
  orgId?: string | undefined;
};

export type GetUsageLimitsRequest = {
  orgId?: string | undefined;
};

/** @internal */
export const GetUsageLimitsGlobals$inboundSchema: z.ZodType<
  GetUsageLimitsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetUsageLimitsGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetUsageLimitsGlobals$outboundSchema: z.ZodType<
  GetUsageLimitsGlobals$Outbound,
  z.ZodTypeDef,
  GetUsageLimitsGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUsageLimitsGlobals$ {
  /** @deprecated use `GetUsageLimitsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetUsageLimitsGlobals$inboundSchema;
  /** @deprecated use `GetUsageLimitsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetUsageLimitsGlobals$outboundSchema;
  /** @deprecated use `GetUsageLimitsGlobals$Outbound` instead. */
  export type Outbound = GetUsageLimitsGlobals$Outbound;
}

export function getUsageLimitsGlobalsToJSON(
  getUsageLimitsGlobals: GetUsageLimitsGlobals,
): string {
  return JSON.stringify(
    GetUsageLimitsGlobals$outboundSchema.parse(getUsageLimitsGlobals),
  );
}

export function getUsageLimitsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetUsageLimitsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUsageLimitsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUsageLimitsGlobals' from JSON`,
  );
}

/** @internal */
export const GetUsageLimitsRequest$inboundSchema: z.ZodType<
  GetUsageLimitsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetUsageLimitsRequest$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetUsageLimitsRequest$outboundSchema: z.ZodType<
  GetUsageLimitsRequest$Outbound,
  z.ZodTypeDef,
  GetUsageLimitsRequest
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUsageLimitsRequest$ {
  /** @deprecated use `GetUsageLimitsRequest$inboundSchema` instead. */
  export const inboundSchema = GetUsageLimitsRequest$inboundSchema;
  /** @deprecated use `GetUsageLimitsRequest$outboundSchema` instead. */
  export const outboundSchema = GetUsageLimitsRequest$outboundSchema;
  /** @deprecated use `GetUsageLimitsRequest$Outbound` instead. */
  export type Outbound = GetUsageLimitsRequest$Outbound;
}

export function getUsageLimitsRequestToJSON(
  getUsageLimitsRequest: GetUsageLimitsRequest,
): string {
  return JSON.stringify(
    GetUsageLimitsRequest$outboundSchema.parse(getUsageLimitsRequest),
  );
}

export function getUsageLimitsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUsageLimitsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUsageLimitsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUsageLimitsRequest' from JSON`,
  );
}
