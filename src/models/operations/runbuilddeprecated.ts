/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64.js";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import * as z from "zod";

export type RunBuildDeprecatedGlobals = {
    appId?: string | undefined;
};

export type FileT = {
    fileName: string;
    content: Uint8Array | string;
};

export type RunBuildDeprecatedRequestBody = {
    file: FileT | Blob;
};

export type RunBuildDeprecatedRequest = {
    appId?: string | undefined;
    buildId: number;
    requestBody: RunBuildDeprecatedRequestBody;
};

/** @internal */
export namespace RunBuildDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<RunBuildDeprecatedGlobals, z.ZodTypeDef, unknown> =
        z.object({
            appId: z.string().optional(),
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildDeprecatedGlobals> =
        z.object({
            appId: z.string().optional(),
        });
}

/** @internal */
export namespace FileT$ {
    export const inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z.object({
        fileName: z.string(),
        content: b64$.zodInbound,
    });

    export type Outbound = {
        fileName: string;
        content: Uint8Array;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileT> = z.object({
        fileName: z.string(),
        content: b64$.zodOutbound,
    });
}

/** @internal */
export namespace RunBuildDeprecatedRequestBody$ {
    export const inboundSchema: z.ZodType<RunBuildDeprecatedRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            file: z.lazy(() => FileT$.inboundSchema),
        });

    export type Outbound = {
        file: FileT$.Outbound | Blob;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildDeprecatedRequestBody> =
        z.object({
            file: z.lazy(() => FileT$.outboundSchema).or(blobLikeSchema),
        });
}

/** @internal */
export namespace RunBuildDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<RunBuildDeprecatedRequest, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
            buildId: z.number().int(),
            RequestBody: z.lazy(() => RunBuildDeprecatedRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        appId?: string | undefined;
        buildId: number;
        RequestBody: RunBuildDeprecatedRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildDeprecatedRequest> = z
        .object({
            appId: z.string().optional(),
            buildId: z.number().int(),
            requestBody: z.lazy(() => RunBuildDeprecatedRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}
