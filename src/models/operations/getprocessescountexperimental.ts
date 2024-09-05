/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetProcessesCountExperimentalGlobals = {
    appId?: string | undefined;
};

export type GetProcessesCountExperimentalRequest = {
    appId?: string | undefined;
    status?: Array<components.ProcessStatus> | undefined;
    region?: Array<components.Region> | undefined;
};

/**
 * Ok
 */
export type GetProcessesCountExperimentalResponseBody = {
    count: number;
};

/** @internal */
export const GetProcessesCountExperimentalGlobals$inboundSchema: z.ZodType<
    GetProcessesCountExperimentalGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetProcessesCountExperimentalGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetProcessesCountExperimentalGlobals$outboundSchema: z.ZodType<
    GetProcessesCountExperimentalGlobals$Outbound,
    z.ZodTypeDef,
    GetProcessesCountExperimentalGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessesCountExperimentalGlobals$ {
    /** @deprecated use `GetProcessesCountExperimentalGlobals$inboundSchema` instead. */
    export const inboundSchema = GetProcessesCountExperimentalGlobals$inboundSchema;
    /** @deprecated use `GetProcessesCountExperimentalGlobals$outboundSchema` instead. */
    export const outboundSchema = GetProcessesCountExperimentalGlobals$outboundSchema;
    /** @deprecated use `GetProcessesCountExperimentalGlobals$Outbound` instead. */
    export type Outbound = GetProcessesCountExperimentalGlobals$Outbound;
}

/** @internal */
export const GetProcessesCountExperimentalRequest$inboundSchema: z.ZodType<
    GetProcessesCountExperimentalRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    status: z.array(components.ProcessStatus$inboundSchema).optional(),
    region: z.array(components.Region$inboundSchema).optional(),
});

/** @internal */
export type GetProcessesCountExperimentalRequest$Outbound = {
    appId?: string | undefined;
    status?: Array<string> | undefined;
    region?: Array<string> | undefined;
};

/** @internal */
export const GetProcessesCountExperimentalRequest$outboundSchema: z.ZodType<
    GetProcessesCountExperimentalRequest$Outbound,
    z.ZodTypeDef,
    GetProcessesCountExperimentalRequest
> = z.object({
    appId: z.string().optional(),
    status: z.array(components.ProcessStatus$outboundSchema).optional(),
    region: z.array(components.Region$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessesCountExperimentalRequest$ {
    /** @deprecated use `GetProcessesCountExperimentalRequest$inboundSchema` instead. */
    export const inboundSchema = GetProcessesCountExperimentalRequest$inboundSchema;
    /** @deprecated use `GetProcessesCountExperimentalRequest$outboundSchema` instead. */
    export const outboundSchema = GetProcessesCountExperimentalRequest$outboundSchema;
    /** @deprecated use `GetProcessesCountExperimentalRequest$Outbound` instead. */
    export type Outbound = GetProcessesCountExperimentalRequest$Outbound;
}

/** @internal */
export const GetProcessesCountExperimentalResponseBody$inboundSchema: z.ZodType<
    GetProcessesCountExperimentalResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    count: z.number(),
});

/** @internal */
export type GetProcessesCountExperimentalResponseBody$Outbound = {
    count: number;
};

/** @internal */
export const GetProcessesCountExperimentalResponseBody$outboundSchema: z.ZodType<
    GetProcessesCountExperimentalResponseBody$Outbound,
    z.ZodTypeDef,
    GetProcessesCountExperimentalResponseBody
> = z.object({
    count: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessesCountExperimentalResponseBody$ {
    /** @deprecated use `GetProcessesCountExperimentalResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetProcessesCountExperimentalResponseBody$inboundSchema;
    /** @deprecated use `GetProcessesCountExperimentalResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetProcessesCountExperimentalResponseBody$outboundSchema;
    /** @deprecated use `GetProcessesCountExperimentalResponseBody$Outbound` instead. */
    export type Outbound = GetProcessesCountExperimentalResponseBody$Outbound;
}
