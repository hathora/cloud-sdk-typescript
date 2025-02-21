/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMetricsDeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetMetricsDeprecatedRequest = {
  appId?: string | undefined;
  processId: string;
  /**
   * Available metrics to query over time.
   */
  metrics?: Array<components.DeprecatedProcessMetricName> | undefined;
  /**
   * Unix timestamp. Default is current time.
   */
  end?: number | undefined;
  /**
   * Unix timestamp. Default is -1 hour from `end`.
   */
  start?: number | undefined;
  step?: number | undefined;
};

/** @internal */
export const GetMetricsDeprecatedGlobals$inboundSchema: z.ZodType<
  GetMetricsDeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetMetricsDeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetMetricsDeprecatedGlobals$outboundSchema: z.ZodType<
  GetMetricsDeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  GetMetricsDeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMetricsDeprecatedGlobals$ {
  /** @deprecated use `GetMetricsDeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = GetMetricsDeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetMetricsDeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = GetMetricsDeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetMetricsDeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetMetricsDeprecatedGlobals$Outbound;
}

export function getMetricsDeprecatedGlobalsToJSON(
  getMetricsDeprecatedGlobals: GetMetricsDeprecatedGlobals,
): string {
  return JSON.stringify(
    GetMetricsDeprecatedGlobals$outboundSchema.parse(
      getMetricsDeprecatedGlobals,
    ),
  );
}

export function getMetricsDeprecatedGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetMetricsDeprecatedGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMetricsDeprecatedGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMetricsDeprecatedGlobals' from JSON`,
  );
}

/** @internal */
export const GetMetricsDeprecatedRequest$inboundSchema: z.ZodType<
  GetMetricsDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
  metrics: z.array(components.DeprecatedProcessMetricName$inboundSchema)
    .optional(),
  end: z.number().optional(),
  start: z.number().optional(),
  step: z.number().int().default(60),
});

/** @internal */
export type GetMetricsDeprecatedRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
  metrics?: Array<string> | undefined;
  end?: number | undefined;
  start?: number | undefined;
  step: number;
};

/** @internal */
export const GetMetricsDeprecatedRequest$outboundSchema: z.ZodType<
  GetMetricsDeprecatedRequest$Outbound,
  z.ZodTypeDef,
  GetMetricsDeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
  metrics: z.array(components.DeprecatedProcessMetricName$outboundSchema)
    .optional(),
  end: z.number().optional(),
  start: z.number().optional(),
  step: z.number().int().default(60),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMetricsDeprecatedRequest$ {
  /** @deprecated use `GetMetricsDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = GetMetricsDeprecatedRequest$inboundSchema;
  /** @deprecated use `GetMetricsDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = GetMetricsDeprecatedRequest$outboundSchema;
  /** @deprecated use `GetMetricsDeprecatedRequest$Outbound` instead. */
  export type Outbound = GetMetricsDeprecatedRequest$Outbound;
}

export function getMetricsDeprecatedRequestToJSON(
  getMetricsDeprecatedRequest: GetMetricsDeprecatedRequest,
): string {
  return JSON.stringify(
    GetMetricsDeprecatedRequest$outboundSchema.parse(
      getMetricsDeprecatedRequest,
    ),
  );
}

export function getMetricsDeprecatedRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMetricsDeprecatedRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMetricsDeprecatedRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMetricsDeprecatedRequest' from JSON`,
  );
}
