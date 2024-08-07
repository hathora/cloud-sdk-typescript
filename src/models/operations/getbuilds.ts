/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetBuildsGlobals = {
    appId?: string | undefined;
};

export type GetBuildsRequest = {
    appId?: string | undefined;
};

/** @internal */
export const GetBuildsGlobals$inboundSchema: z.ZodType<GetBuildsGlobals, z.ZodTypeDef, unknown> =
    z.object({
        appId: z.string().optional(),
    });

/** @internal */
export type GetBuildsGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetBuildsGlobals$outboundSchema: z.ZodType<
    GetBuildsGlobals$Outbound,
    z.ZodTypeDef,
    GetBuildsGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBuildsGlobals$ {
    /** @deprecated use `GetBuildsGlobals$inboundSchema` instead. */
    export const inboundSchema = GetBuildsGlobals$inboundSchema;
    /** @deprecated use `GetBuildsGlobals$outboundSchema` instead. */
    export const outboundSchema = GetBuildsGlobals$outboundSchema;
    /** @deprecated use `GetBuildsGlobals$Outbound` instead. */
    export type Outbound = GetBuildsGlobals$Outbound;
}

/** @internal */
export const GetBuildsRequest$inboundSchema: z.ZodType<GetBuildsRequest, z.ZodTypeDef, unknown> =
    z.object({
        appId: z.string().optional(),
    });

/** @internal */
export type GetBuildsRequest$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetBuildsRequest$outboundSchema: z.ZodType<
    GetBuildsRequest$Outbound,
    z.ZodTypeDef,
    GetBuildsRequest
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBuildsRequest$ {
    /** @deprecated use `GetBuildsRequest$inboundSchema` instead. */
    export const inboundSchema = GetBuildsRequest$inboundSchema;
    /** @deprecated use `GetBuildsRequest$outboundSchema` instead. */
    export const outboundSchema = GetBuildsRequest$outboundSchema;
    /** @deprecated use `GetBuildsRequest$Outbound` instead. */
    export type Outbound = GetBuildsRequest$Outbound;
}
