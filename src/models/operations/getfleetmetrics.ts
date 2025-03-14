/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetFleetMetricsGlobals = {
  orgId?: string | undefined;
};

export type GetFleetMetricsRequest = {
  fleetId: string;
  region: components.Region;
  /**
   * Available metrics to query over time.
   */
  metrics?: Array<components.FleetMetricName> | undefined;
  end?: number | undefined;
  /**
   * Unix timestamp. Default is -1 hour from `end`.
   */
  start?: number | undefined;
  step?: number | undefined;
  orgId?: string | undefined;
};

/** @internal */
export const GetFleetMetricsGlobals$inboundSchema: z.ZodType<
  GetFleetMetricsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
});

/** @internal */
export type GetFleetMetricsGlobals$Outbound = {
  orgId?: string | undefined;
};

/** @internal */
export const GetFleetMetricsGlobals$outboundSchema: z.ZodType<
  GetFleetMetricsGlobals$Outbound,
  z.ZodTypeDef,
  GetFleetMetricsGlobals
> = z.object({
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFleetMetricsGlobals$ {
  /** @deprecated use `GetFleetMetricsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetFleetMetricsGlobals$inboundSchema;
  /** @deprecated use `GetFleetMetricsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetFleetMetricsGlobals$outboundSchema;
  /** @deprecated use `GetFleetMetricsGlobals$Outbound` instead. */
  export type Outbound = GetFleetMetricsGlobals$Outbound;
}

export function getFleetMetricsGlobalsToJSON(
  getFleetMetricsGlobals: GetFleetMetricsGlobals,
): string {
  return JSON.stringify(
    GetFleetMetricsGlobals$outboundSchema.parse(getFleetMetricsGlobals),
  );
}

export function getFleetMetricsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetFleetMetricsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFleetMetricsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFleetMetricsGlobals' from JSON`,
  );
}

/** @internal */
export const GetFleetMetricsRequest$inboundSchema: z.ZodType<
  GetFleetMetricsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fleetId: z.string(),
  region: components.Region$inboundSchema,
  metrics: z.array(components.FleetMetricName$inboundSchema).optional(),
  end: z.number().optional(),
  start: z.number().optional(),
  step: z.number().int().default(60),
  orgId: z.string().optional(),
});

/** @internal */
export type GetFleetMetricsRequest$Outbound = {
  fleetId: string;
  region: string;
  metrics?: Array<string> | undefined;
  end?: number | undefined;
  start?: number | undefined;
  step: number;
  orgId?: string | undefined;
};

/** @internal */
export const GetFleetMetricsRequest$outboundSchema: z.ZodType<
  GetFleetMetricsRequest$Outbound,
  z.ZodTypeDef,
  GetFleetMetricsRequest
> = z.object({
  fleetId: z.string(),
  region: components.Region$outboundSchema,
  metrics: z.array(components.FleetMetricName$outboundSchema).optional(),
  end: z.number().optional(),
  start: z.number().optional(),
  step: z.number().int().default(60),
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFleetMetricsRequest$ {
  /** @deprecated use `GetFleetMetricsRequest$inboundSchema` instead. */
  export const inboundSchema = GetFleetMetricsRequest$inboundSchema;
  /** @deprecated use `GetFleetMetricsRequest$outboundSchema` instead. */
  export const outboundSchema = GetFleetMetricsRequest$outboundSchema;
  /** @deprecated use `GetFleetMetricsRequest$Outbound` instead. */
  export type Outbound = GetFleetMetricsRequest$Outbound;
}

export function getFleetMetricsRequestToJSON(
  getFleetMetricsRequest: GetFleetMetricsRequest,
): string {
  return JSON.stringify(
    GetFleetMetricsRequest$outboundSchema.parse(getFleetMetricsRequest),
  );
}

export function getFleetMetricsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetFleetMetricsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFleetMetricsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFleetMetricsRequest' from JSON`,
  );
}
