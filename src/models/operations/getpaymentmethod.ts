/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPaymentMethodGlobals = {
  orgId?: string | undefined;
};

export type GetPaymentMethodRequest = {
  orgId?: string | undefined;
};

/** @internal */
export const GetPaymentMethodGlobals$inboundSchema: z.ZodType<
  GetPaymentMethodGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetPaymentMethodGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetPaymentMethodGlobals$outboundSchema: z.ZodType<
  GetPaymentMethodGlobals$Outbound,
  z.ZodTypeDef,
  GetPaymentMethodGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPaymentMethodGlobals$ {
  /** @deprecated use `GetPaymentMethodGlobals$inboundSchema` instead. */
  export const inboundSchema = GetPaymentMethodGlobals$inboundSchema;
  /** @deprecated use `GetPaymentMethodGlobals$outboundSchema` instead. */
  export const outboundSchema = GetPaymentMethodGlobals$outboundSchema;
  /** @deprecated use `GetPaymentMethodGlobals$Outbound` instead. */
  export type Outbound = GetPaymentMethodGlobals$Outbound;
}

export function getPaymentMethodGlobalsToJSON(
  getPaymentMethodGlobals: GetPaymentMethodGlobals,
): string {
  return JSON.stringify(
    GetPaymentMethodGlobals$outboundSchema.parse(getPaymentMethodGlobals),
  );
}

export function getPaymentMethodGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetPaymentMethodGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPaymentMethodGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPaymentMethodGlobals' from JSON`,
  );
}

/** @internal */
export const GetPaymentMethodRequest$inboundSchema: z.ZodType<
  GetPaymentMethodRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetPaymentMethodRequest$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetPaymentMethodRequest$outboundSchema: z.ZodType<
  GetPaymentMethodRequest$Outbound,
  z.ZodTypeDef,
  GetPaymentMethodRequest
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPaymentMethodRequest$ {
  /** @deprecated use `GetPaymentMethodRequest$inboundSchema` instead. */
  export const inboundSchema = GetPaymentMethodRequest$inboundSchema;
  /** @deprecated use `GetPaymentMethodRequest$outboundSchema` instead. */
  export const outboundSchema = GetPaymentMethodRequest$outboundSchema;
  /** @deprecated use `GetPaymentMethodRequest$Outbound` instead. */
  export type Outbound = GetPaymentMethodRequest$Outbound;
}

export function getPaymentMethodRequestToJSON(
  getPaymentMethodRequest: GetPaymentMethodRequest,
): string {
  return JSON.stringify(
    GetPaymentMethodRequest$outboundSchema.parse(getPaymentMethodRequest),
  );
}

export function getPaymentMethodRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPaymentMethodRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPaymentMethodRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPaymentMethodRequest' from JSON`,
  );
}