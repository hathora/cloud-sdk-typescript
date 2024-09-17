/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type GetProcessesCountExperimentalV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetProcessesCountExperimentalV2DeprecatedRequest = {
  appId?: string | undefined;
  status?: Array<components.ProcessStatus> | undefined;
  region?: Array<components.Region> | undefined;
};

/**
 * Ok
 */
export type GetProcessesCountExperimentalV2DeprecatedResponseBody = {
  count: number;
};

/** @internal */
export const GetProcessesCountExperimentalV2DeprecatedGlobals$inboundSchema:
  z.ZodType<
    GetProcessesCountExperimentalV2DeprecatedGlobals,
    z.ZodTypeDef,
    unknown
  > = z.object({
    appId: z.string().optional(),
  });

/** @internal */
export type GetProcessesCountExperimentalV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetProcessesCountExperimentalV2DeprecatedGlobals$outboundSchema:
  z.ZodType<
    GetProcessesCountExperimentalV2DeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    GetProcessesCountExperimentalV2DeprecatedGlobals
  > = z.object({
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessesCountExperimentalV2DeprecatedGlobals$ {
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetProcessesCountExperimentalV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetProcessesCountExperimentalV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound =
    GetProcessesCountExperimentalV2DeprecatedGlobals$Outbound;
}

/** @internal */
export const GetProcessesCountExperimentalV2DeprecatedRequest$inboundSchema:
  z.ZodType<
    GetProcessesCountExperimentalV2DeprecatedRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    appId: z.string().optional(),
    status: z.array(components.ProcessStatus$inboundSchema).optional(),
    region: z.array(components.Region$inboundSchema).optional(),
  });

/** @internal */
export type GetProcessesCountExperimentalV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  status?: Array<string> | undefined;
  region?: Array<string> | undefined;
};

/** @internal */
export const GetProcessesCountExperimentalV2DeprecatedRequest$outboundSchema:
  z.ZodType<
    GetProcessesCountExperimentalV2DeprecatedRequest$Outbound,
    z.ZodTypeDef,
    GetProcessesCountExperimentalV2DeprecatedRequest
  > = z.object({
    appId: z.string().optional(),
    status: z.array(components.ProcessStatus$outboundSchema).optional(),
    region: z.array(components.Region$outboundSchema).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessesCountExperimentalV2DeprecatedRequest$ {
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetProcessesCountExperimentalV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetProcessesCountExperimentalV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedRequest$Outbound` instead. */
  export type Outbound =
    GetProcessesCountExperimentalV2DeprecatedRequest$Outbound;
}

/** @internal */
export const GetProcessesCountExperimentalV2DeprecatedResponseBody$inboundSchema:
  z.ZodType<
    GetProcessesCountExperimentalV2DeprecatedResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    count: z.number(),
  });

/** @internal */
export type GetProcessesCountExperimentalV2DeprecatedResponseBody$Outbound = {
  count: number;
};

/** @internal */
export const GetProcessesCountExperimentalV2DeprecatedResponseBody$outboundSchema:
  z.ZodType<
    GetProcessesCountExperimentalV2DeprecatedResponseBody$Outbound,
    z.ZodTypeDef,
    GetProcessesCountExperimentalV2DeprecatedResponseBody
  > = z.object({
    count: z.number(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessesCountExperimentalV2DeprecatedResponseBody$ {
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetProcessesCountExperimentalV2DeprecatedResponseBody$inboundSchema;
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetProcessesCountExperimentalV2DeprecatedResponseBody$outboundSchema;
  /** @deprecated use `GetProcessesCountExperimentalV2DeprecatedResponseBody$Outbound` instead. */
  export type Outbound =
    GetProcessesCountExperimentalV2DeprecatedResponseBody$Outbound;
}