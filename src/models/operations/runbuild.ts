/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64.js";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import * as z from "zod";

export type RunBuildGlobals = {
    appId?: string | undefined;
};

export type RunBuildFile = {
    fileName: string;
    content: Uint8Array | string;
};

export type RunBuildRequestBody = {
    file?: RunBuildFile | Blob | undefined;
};

export type RunBuildRequest = {
    appId?: string | undefined;
    buildId: number;
    requestBody: RunBuildRequestBody;
};

/** @internal */
export const RunBuildGlobals$inboundSchema: z.ZodType<RunBuildGlobals, z.ZodTypeDef, unknown> =
    z.object({
        appId: z.string().optional(),
    });

/** @internal */
export type RunBuildGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const RunBuildGlobals$outboundSchema: z.ZodType<
    RunBuildGlobals$Outbound,
    z.ZodTypeDef,
    RunBuildGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildGlobals$ {
    /** @deprecated use `RunBuildGlobals$inboundSchema` instead. */
    export const inboundSchema = RunBuildGlobals$inboundSchema;
    /** @deprecated use `RunBuildGlobals$outboundSchema` instead. */
    export const outboundSchema = RunBuildGlobals$outboundSchema;
    /** @deprecated use `RunBuildGlobals$Outbound` instead. */
    export type Outbound = RunBuildGlobals$Outbound;
}

/** @internal */
export const RunBuildFile$inboundSchema: z.ZodType<RunBuildFile, z.ZodTypeDef, unknown> = z.object({
    fileName: z.string(),
    content: b64$.zodInbound,
});

/** @internal */
export type RunBuildFile$Outbound = {
    fileName: string;
    content: Uint8Array;
};

/** @internal */
export const RunBuildFile$outboundSchema: z.ZodType<
    RunBuildFile$Outbound,
    z.ZodTypeDef,
    RunBuildFile
> = z.object({
    fileName: z.string(),
    content: b64$.zodOutbound,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildFile$ {
    /** @deprecated use `RunBuildFile$inboundSchema` instead. */
    export const inboundSchema = RunBuildFile$inboundSchema;
    /** @deprecated use `RunBuildFile$outboundSchema` instead. */
    export const outboundSchema = RunBuildFile$outboundSchema;
    /** @deprecated use `RunBuildFile$Outbound` instead. */
    export type Outbound = RunBuildFile$Outbound;
}

/** @internal */
export const RunBuildRequestBody$inboundSchema: z.ZodType<
    RunBuildRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    file: z.lazy(() => RunBuildFile$inboundSchema).optional(),
});

/** @internal */
export type RunBuildRequestBody$Outbound = {
    file?: RunBuildFile$Outbound | Blob | undefined;
};

/** @internal */
export const RunBuildRequestBody$outboundSchema: z.ZodType<
    RunBuildRequestBody$Outbound,
    z.ZodTypeDef,
    RunBuildRequestBody
> = z.object({
    file: z
        .lazy(() => RunBuildFile$outboundSchema)
        .or(blobLikeSchema)
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildRequestBody$ {
    /** @deprecated use `RunBuildRequestBody$inboundSchema` instead. */
    export const inboundSchema = RunBuildRequestBody$inboundSchema;
    /** @deprecated use `RunBuildRequestBody$outboundSchema` instead. */
    export const outboundSchema = RunBuildRequestBody$outboundSchema;
    /** @deprecated use `RunBuildRequestBody$Outbound` instead. */
    export type Outbound = RunBuildRequestBody$Outbound;
}

/** @internal */
export const RunBuildRequest$inboundSchema: z.ZodType<RunBuildRequest, z.ZodTypeDef, unknown> = z
    .object({
        appId: z.string().optional(),
        buildId: z.number().int(),
        RequestBody: z.lazy(() => RunBuildRequestBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type RunBuildRequest$Outbound = {
    appId?: string | undefined;
    buildId: number;
    RequestBody: RunBuildRequestBody$Outbound;
};

/** @internal */
export const RunBuildRequest$outboundSchema: z.ZodType<
    RunBuildRequest$Outbound,
    z.ZodTypeDef,
    RunBuildRequest
> = z
    .object({
        appId: z.string().optional(),
        buildId: z.number().int(),
        requestBody: z.lazy(() => RunBuildRequestBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildRequest$ {
    /** @deprecated use `RunBuildRequest$inboundSchema` instead. */
    export const inboundSchema = RunBuildRequest$inboundSchema;
    /** @deprecated use `RunBuildRequest$outboundSchema` instead. */
    export const outboundSchema = RunBuildRequest$outboundSchema;
    /** @deprecated use `RunBuildRequest$Outbound` instead. */
    export type Outbound = RunBuildRequest$Outbound;
}
