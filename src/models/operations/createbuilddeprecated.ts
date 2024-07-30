/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateBuildDeprecatedGlobals = {
    appId?: string | undefined;
};

export type CreateBuildDeprecatedRequest = {
    appId?: string | undefined;
    createBuildParams: components.CreateBuildParams;
};

/** @internal */
export const CreateBuildDeprecatedGlobals$inboundSchema: z.ZodType<
    CreateBuildDeprecatedGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type CreateBuildDeprecatedGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const CreateBuildDeprecatedGlobals$outboundSchema: z.ZodType<
    CreateBuildDeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    CreateBuildDeprecatedGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBuildDeprecatedGlobals$ {
    /** @deprecated use `CreateBuildDeprecatedGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateBuildDeprecatedGlobals$inboundSchema;
    /** @deprecated use `CreateBuildDeprecatedGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateBuildDeprecatedGlobals$outboundSchema;
    /** @deprecated use `CreateBuildDeprecatedGlobals$Outbound` instead. */
    export type Outbound = CreateBuildDeprecatedGlobals$Outbound;
}

/** @internal */
export const CreateBuildDeprecatedRequest$inboundSchema: z.ZodType<
    CreateBuildDeprecatedRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        appId: z.string().optional(),
        CreateBuildParams: components.CreateBuildParams$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            CreateBuildParams: "createBuildParams",
        });
    });

/** @internal */
export type CreateBuildDeprecatedRequest$Outbound = {
    appId?: string | undefined;
    CreateBuildParams: components.CreateBuildParams$Outbound;
};

/** @internal */
export const CreateBuildDeprecatedRequest$outboundSchema: z.ZodType<
    CreateBuildDeprecatedRequest$Outbound,
    z.ZodTypeDef,
    CreateBuildDeprecatedRequest
> = z
    .object({
        appId: z.string().optional(),
        createBuildParams: components.CreateBuildParams$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            createBuildParams: "CreateBuildParams",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBuildDeprecatedRequest$ {
    /** @deprecated use `CreateBuildDeprecatedRequest$inboundSchema` instead. */
    export const inboundSchema = CreateBuildDeprecatedRequest$inboundSchema;
    /** @deprecated use `CreateBuildDeprecatedRequest$outboundSchema` instead. */
    export const outboundSchema = CreateBuildDeprecatedRequest$outboundSchema;
    /** @deprecated use `CreateBuildDeprecatedRequest$Outbound` instead. */
    export type Outbound = CreateBuildDeprecatedRequest$Outbound;
}
