/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBalanceGlobals = {
  orgId?: string | undefined;
};

export type GetBalanceRequest = {
  orgId?: string | undefined;
};

/** @internal */
export const GetBalanceGlobals$inboundSchema: z.ZodType<
  GetBalanceGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetBalanceGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetBalanceGlobals$outboundSchema: z.ZodType<
  GetBalanceGlobals$Outbound,
  z.ZodTypeDef,
  GetBalanceGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalanceGlobals$ {
  /** @deprecated use `GetBalanceGlobals$inboundSchema` instead. */
  export const inboundSchema = GetBalanceGlobals$inboundSchema;
  /** @deprecated use `GetBalanceGlobals$outboundSchema` instead. */
  export const outboundSchema = GetBalanceGlobals$outboundSchema;
  /** @deprecated use `GetBalanceGlobals$Outbound` instead. */
  export type Outbound = GetBalanceGlobals$Outbound;
}

export function getBalanceGlobalsToJSON(
  getBalanceGlobals: GetBalanceGlobals,
): string {
  return JSON.stringify(
    GetBalanceGlobals$outboundSchema.parse(getBalanceGlobals),
  );
}

export function getBalanceGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetBalanceGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalanceGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalanceGlobals' from JSON`,
  );
}

/** @internal */
export const GetBalanceRequest$inboundSchema: z.ZodType<
  GetBalanceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetBalanceRequest$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetBalanceRequest$outboundSchema: z.ZodType<
  GetBalanceRequest$Outbound,
  z.ZodTypeDef,
  GetBalanceRequest
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalanceRequest$ {
  /** @deprecated use `GetBalanceRequest$inboundSchema` instead. */
  export const inboundSchema = GetBalanceRequest$inboundSchema;
  /** @deprecated use `GetBalanceRequest$outboundSchema` instead. */
  export const outboundSchema = GetBalanceRequest$outboundSchema;
  /** @deprecated use `GetBalanceRequest$Outbound` instead. */
  export type Outbound = GetBalanceRequest$Outbound;
}

export function getBalanceRequestToJSON(
  getBalanceRequest: GetBalanceRequest,
): string {
  return JSON.stringify(
    GetBalanceRequest$outboundSchema.parse(getBalanceRequest),
  );
}

export function getBalanceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBalanceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalanceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalanceRequest' from JSON`,
  );
}