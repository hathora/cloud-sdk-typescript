/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUpcomingInvoiceTotalGlobals = {
  orgId?: string | undefined;
};

export type GetUpcomingInvoiceTotalRequest = {
  orgId?: string | undefined;
};

/**
 * Ok
 */
export type GetUpcomingInvoiceTotalResponseBody = {
  value: number;
};

/** @internal */
export const GetUpcomingInvoiceTotalGlobals$inboundSchema: z.ZodType<
  GetUpcomingInvoiceTotalGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetUpcomingInvoiceTotalGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetUpcomingInvoiceTotalGlobals$outboundSchema: z.ZodType<
  GetUpcomingInvoiceTotalGlobals$Outbound,
  z.ZodTypeDef,
  GetUpcomingInvoiceTotalGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUpcomingInvoiceTotalGlobals$ {
  /** @deprecated use `GetUpcomingInvoiceTotalGlobals$inboundSchema` instead. */
  export const inboundSchema = GetUpcomingInvoiceTotalGlobals$inboundSchema;
  /** @deprecated use `GetUpcomingInvoiceTotalGlobals$outboundSchema` instead. */
  export const outboundSchema = GetUpcomingInvoiceTotalGlobals$outboundSchema;
  /** @deprecated use `GetUpcomingInvoiceTotalGlobals$Outbound` instead. */
  export type Outbound = GetUpcomingInvoiceTotalGlobals$Outbound;
}

export function getUpcomingInvoiceTotalGlobalsToJSON(
  getUpcomingInvoiceTotalGlobals: GetUpcomingInvoiceTotalGlobals,
): string {
  return JSON.stringify(
    GetUpcomingInvoiceTotalGlobals$outboundSchema.parse(
      getUpcomingInvoiceTotalGlobals,
    ),
  );
}

export function getUpcomingInvoiceTotalGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetUpcomingInvoiceTotalGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUpcomingInvoiceTotalGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUpcomingInvoiceTotalGlobals' from JSON`,
  );
}

/** @internal */
export const GetUpcomingInvoiceTotalRequest$inboundSchema: z.ZodType<
  GetUpcomingInvoiceTotalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetUpcomingInvoiceTotalRequest$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetUpcomingInvoiceTotalRequest$outboundSchema: z.ZodType<
  GetUpcomingInvoiceTotalRequest$Outbound,
  z.ZodTypeDef,
  GetUpcomingInvoiceTotalRequest
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUpcomingInvoiceTotalRequest$ {
  /** @deprecated use `GetUpcomingInvoiceTotalRequest$inboundSchema` instead. */
  export const inboundSchema = GetUpcomingInvoiceTotalRequest$inboundSchema;
  /** @deprecated use `GetUpcomingInvoiceTotalRequest$outboundSchema` instead. */
  export const outboundSchema = GetUpcomingInvoiceTotalRequest$outboundSchema;
  /** @deprecated use `GetUpcomingInvoiceTotalRequest$Outbound` instead. */
  export type Outbound = GetUpcomingInvoiceTotalRequest$Outbound;
}

export function getUpcomingInvoiceTotalRequestToJSON(
  getUpcomingInvoiceTotalRequest: GetUpcomingInvoiceTotalRequest,
): string {
  return JSON.stringify(
    GetUpcomingInvoiceTotalRequest$outboundSchema.parse(
      getUpcomingInvoiceTotalRequest,
    ),
  );
}

export function getUpcomingInvoiceTotalRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUpcomingInvoiceTotalRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUpcomingInvoiceTotalRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUpcomingInvoiceTotalRequest' from JSON`,
  );
}

/** @internal */
export const GetUpcomingInvoiceTotalResponseBody$inboundSchema: z.ZodType<
  GetUpcomingInvoiceTotalResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.number(),
});

/** @internal */
export type GetUpcomingInvoiceTotalResponseBody$Outbound = {
  value: number;
};

/** @internal */
export const GetUpcomingInvoiceTotalResponseBody$outboundSchema: z.ZodType<
  GetUpcomingInvoiceTotalResponseBody$Outbound,
  z.ZodTypeDef,
  GetUpcomingInvoiceTotalResponseBody
> = z.object({
  value: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUpcomingInvoiceTotalResponseBody$ {
  /** @deprecated use `GetUpcomingInvoiceTotalResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetUpcomingInvoiceTotalResponseBody$inboundSchema;
  /** @deprecated use `GetUpcomingInvoiceTotalResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetUpcomingInvoiceTotalResponseBody$outboundSchema;
  /** @deprecated use `GetUpcomingInvoiceTotalResponseBody$Outbound` instead. */
  export type Outbound = GetUpcomingInvoiceTotalResponseBody$Outbound;
}

export function getUpcomingInvoiceTotalResponseBodyToJSON(
  getUpcomingInvoiceTotalResponseBody: GetUpcomingInvoiceTotalResponseBody,
): string {
  return JSON.stringify(
    GetUpcomingInvoiceTotalResponseBody$outboundSchema.parse(
      getUpcomingInvoiceTotalResponseBody,
    ),
  );
}

export function getUpcomingInvoiceTotalResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetUpcomingInvoiceTotalResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetUpcomingInvoiceTotalResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUpcomingInvoiceTotalResponseBody' from JSON`,
  );
}
