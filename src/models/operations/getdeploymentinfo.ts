/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDeploymentInfoGlobals = {
    appId?: string | undefined;
};

export type GetDeploymentInfoRequest = {
    appId?: string | undefined;
    deploymentId: number;
};

/** @internal */
export const GetDeploymentInfoGlobals$inboundSchema: z.ZodType<
    GetDeploymentInfoGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetDeploymentInfoGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetDeploymentInfoGlobals$outboundSchema: z.ZodType<
    GetDeploymentInfoGlobals$Outbound,
    z.ZodTypeDef,
    GetDeploymentInfoGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentInfoGlobals$ {
    /** @deprecated use `GetDeploymentInfoGlobals$inboundSchema` instead. */
    export const inboundSchema = GetDeploymentInfoGlobals$inboundSchema;
    /** @deprecated use `GetDeploymentInfoGlobals$outboundSchema` instead. */
    export const outboundSchema = GetDeploymentInfoGlobals$outboundSchema;
    /** @deprecated use `GetDeploymentInfoGlobals$Outbound` instead. */
    export type Outbound = GetDeploymentInfoGlobals$Outbound;
}

/** @internal */
export const GetDeploymentInfoRequest$inboundSchema: z.ZodType<
    GetDeploymentInfoRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    deploymentId: z.number().int(),
});

/** @internal */
export type GetDeploymentInfoRequest$Outbound = {
    appId?: string | undefined;
    deploymentId: number;
};

/** @internal */
export const GetDeploymentInfoRequest$outboundSchema: z.ZodType<
    GetDeploymentInfoRequest$Outbound,
    z.ZodTypeDef,
    GetDeploymentInfoRequest
> = z.object({
    appId: z.string().optional(),
    deploymentId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentInfoRequest$ {
    /** @deprecated use `GetDeploymentInfoRequest$inboundSchema` instead. */
    export const inboundSchema = GetDeploymentInfoRequest$inboundSchema;
    /** @deprecated use `GetDeploymentInfoRequest$outboundSchema` instead. */
    export const outboundSchema = GetDeploymentInfoRequest$outboundSchema;
    /** @deprecated use `GetDeploymentInfoRequest$Outbound` instead. */
    export type Outbound = GetDeploymentInfoRequest$Outbound;
}
