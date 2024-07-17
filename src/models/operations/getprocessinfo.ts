/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetProcessInfoGlobals = {
    appId?: string | undefined;
};

export type GetProcessInfoRequest = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export const GetProcessInfoGlobals$inboundSchema: z.ZodType<
    GetProcessInfoGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetProcessInfoGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetProcessInfoGlobals$outboundSchema: z.ZodType<
    GetProcessInfoGlobals$Outbound,
    z.ZodTypeDef,
    GetProcessInfoGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessInfoGlobals$ {
    /** @deprecated use `GetProcessInfoGlobals$inboundSchema` instead. */
    export const inboundSchema = GetProcessInfoGlobals$inboundSchema;
    /** @deprecated use `GetProcessInfoGlobals$outboundSchema` instead. */
    export const outboundSchema = GetProcessInfoGlobals$outboundSchema;
    /** @deprecated use `GetProcessInfoGlobals$Outbound` instead. */
    export type Outbound = GetProcessInfoGlobals$Outbound;
}

/** @internal */
export const GetProcessInfoRequest$inboundSchema: z.ZodType<
    GetProcessInfoRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    processId: z.string(),
});

/** @internal */
export type GetProcessInfoRequest$Outbound = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export const GetProcessInfoRequest$outboundSchema: z.ZodType<
    GetProcessInfoRequest$Outbound,
    z.ZodTypeDef,
    GetProcessInfoRequest
> = z.object({
    appId: z.string().optional(),
    processId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessInfoRequest$ {
    /** @deprecated use `GetProcessInfoRequest$inboundSchema` instead. */
    export const inboundSchema = GetProcessInfoRequest$inboundSchema;
    /** @deprecated use `GetProcessInfoRequest$outboundSchema` instead. */
    export const outboundSchema = GetProcessInfoRequest$outboundSchema;
    /** @deprecated use `GetProcessInfoRequest$Outbound` instead. */
    export type Outbound = GetProcessInfoRequest$Outbound;
}
