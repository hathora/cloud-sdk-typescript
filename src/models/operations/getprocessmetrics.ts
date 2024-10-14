/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type GetProcessMetricsGlobals = {
  appId?: string | undefined;
};

export type GetProcessMetricsRequest = {
  appId?: string | undefined;
  processId: string;
  /**
   * Available metrics to query over time.
   */
  metrics?: Array<components.ProcessMetricName> | undefined;
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
export const GetProcessMetricsGlobals$inboundSchema: z.ZodType<
  GetProcessMetricsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetProcessMetricsGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetProcessMetricsGlobals$outboundSchema: z.ZodType<
  GetProcessMetricsGlobals$Outbound,
  z.ZodTypeDef,
  GetProcessMetricsGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessMetricsGlobals$ {
  /** @deprecated use `GetProcessMetricsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetProcessMetricsGlobals$inboundSchema;
  /** @deprecated use `GetProcessMetricsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetProcessMetricsGlobals$outboundSchema;
  /** @deprecated use `GetProcessMetricsGlobals$Outbound` instead. */
  export type Outbound = GetProcessMetricsGlobals$Outbound;
}

/** @internal */
export const GetProcessMetricsRequest$inboundSchema: z.ZodType<
  GetProcessMetricsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
  metrics: z.array(components.ProcessMetricName$inboundSchema).optional(),
  end: z.number().optional(),
  start: z.number().optional(),
  step: z.number().int().default(60),
});

/** @internal */
export type GetProcessMetricsRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
  metrics?: Array<string> | undefined;
  end?: number | undefined;
  start?: number | undefined;
  step: number;
};

/** @internal */
export const GetProcessMetricsRequest$outboundSchema: z.ZodType<
  GetProcessMetricsRequest$Outbound,
  z.ZodTypeDef,
  GetProcessMetricsRequest
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
  metrics: z.array(components.ProcessMetricName$outboundSchema).optional(),
  end: z.number().optional(),
  start: z.number().optional(),
  step: z.number().int().default(60),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessMetricsRequest$ {
  /** @deprecated use `GetProcessMetricsRequest$inboundSchema` instead. */
  export const inboundSchema = GetProcessMetricsRequest$inboundSchema;
  /** @deprecated use `GetProcessMetricsRequest$outboundSchema` instead. */
  export const outboundSchema = GetProcessMetricsRequest$outboundSchema;
  /** @deprecated use `GetProcessMetricsRequest$Outbound` instead. */
  export type Outbound = GetProcessMetricsRequest$Outbound;
}
