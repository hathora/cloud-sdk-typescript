/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLatestDeploymentDeprecatedGlobals = {
    appId?: string | undefined;
};

export type GetLatestDeploymentDeprecatedRequest = {
    appId?: string | undefined;
};

/** @internal */
export const GetLatestDeploymentDeprecatedGlobals$inboundSchema: z.ZodType<
    GetLatestDeploymentDeprecatedGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetLatestDeploymentDeprecatedGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetLatestDeploymentDeprecatedGlobals$outboundSchema: z.ZodType<
    GetLatestDeploymentDeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    GetLatestDeploymentDeprecatedGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestDeploymentDeprecatedGlobals$ {
    /** @deprecated use `GetLatestDeploymentDeprecatedGlobals$inboundSchema` instead. */
    export const inboundSchema = GetLatestDeploymentDeprecatedGlobals$inboundSchema;
    /** @deprecated use `GetLatestDeploymentDeprecatedGlobals$outboundSchema` instead. */
    export const outboundSchema = GetLatestDeploymentDeprecatedGlobals$outboundSchema;
    /** @deprecated use `GetLatestDeploymentDeprecatedGlobals$Outbound` instead. */
    export type Outbound = GetLatestDeploymentDeprecatedGlobals$Outbound;
}

/** @internal */
export const GetLatestDeploymentDeprecatedRequest$inboundSchema: z.ZodType<
    GetLatestDeploymentDeprecatedRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetLatestDeploymentDeprecatedRequest$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetLatestDeploymentDeprecatedRequest$outboundSchema: z.ZodType<
    GetLatestDeploymentDeprecatedRequest$Outbound,
    z.ZodTypeDef,
    GetLatestDeploymentDeprecatedRequest
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestDeploymentDeprecatedRequest$ {
    /** @deprecated use `GetLatestDeploymentDeprecatedRequest$inboundSchema` instead. */
    export const inboundSchema = GetLatestDeploymentDeprecatedRequest$inboundSchema;
    /** @deprecated use `GetLatestDeploymentDeprecatedRequest$outboundSchema` instead. */
    export const outboundSchema = GetLatestDeploymentDeprecatedRequest$outboundSchema;
    /** @deprecated use `GetLatestDeploymentDeprecatedRequest$Outbound` instead. */
    export type Outbound = GetLatestDeploymentDeprecatedRequest$Outbound;
}
