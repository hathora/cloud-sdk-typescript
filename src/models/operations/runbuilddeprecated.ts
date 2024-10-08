/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";

export type RunBuildDeprecatedGlobals = {
  appId?: string | undefined;
};

export type FileT = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
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
export const RunBuildDeprecatedGlobals$inboundSchema: z.ZodType<
  RunBuildDeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type RunBuildDeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const RunBuildDeprecatedGlobals$outboundSchema: z.ZodType<
  RunBuildDeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  RunBuildDeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildDeprecatedGlobals$ {
  /** @deprecated use `RunBuildDeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = RunBuildDeprecatedGlobals$inboundSchema;
  /** @deprecated use `RunBuildDeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = RunBuildDeprecatedGlobals$outboundSchema;
  /** @deprecated use `RunBuildDeprecatedGlobals$Outbound` instead. */
  export type Outbound = RunBuildDeprecatedGlobals$Outbound;
}

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type FileT$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

/** @internal */
export const RunBuildDeprecatedRequestBody$inboundSchema: z.ZodType<
  RunBuildDeprecatedRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileT$inboundSchema),
});

/** @internal */
export type RunBuildDeprecatedRequestBody$Outbound = {
  file: FileT$Outbound | Blob;
};

/** @internal */
export const RunBuildDeprecatedRequestBody$outboundSchema: z.ZodType<
  RunBuildDeprecatedRequestBody$Outbound,
  z.ZodTypeDef,
  RunBuildDeprecatedRequestBody
> = z.object({
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildDeprecatedRequestBody$ {
  /** @deprecated use `RunBuildDeprecatedRequestBody$inboundSchema` instead. */
  export const inboundSchema = RunBuildDeprecatedRequestBody$inboundSchema;
  /** @deprecated use `RunBuildDeprecatedRequestBody$outboundSchema` instead. */
  export const outboundSchema = RunBuildDeprecatedRequestBody$outboundSchema;
  /** @deprecated use `RunBuildDeprecatedRequestBody$Outbound` instead. */
  export type Outbound = RunBuildDeprecatedRequestBody$Outbound;
}

/** @internal */
export const RunBuildDeprecatedRequest$inboundSchema: z.ZodType<
  RunBuildDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  buildId: z.number().int(),
  RequestBody: z.lazy(() => RunBuildDeprecatedRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type RunBuildDeprecatedRequest$Outbound = {
  appId?: string | undefined;
  buildId: number;
  RequestBody: RunBuildDeprecatedRequestBody$Outbound;
};

/** @internal */
export const RunBuildDeprecatedRequest$outboundSchema: z.ZodType<
  RunBuildDeprecatedRequest$Outbound,
  z.ZodTypeDef,
  RunBuildDeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  buildId: z.number().int(),
  requestBody: z.lazy(() => RunBuildDeprecatedRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunBuildDeprecatedRequest$ {
  /** @deprecated use `RunBuildDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = RunBuildDeprecatedRequest$inboundSchema;
  /** @deprecated use `RunBuildDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = RunBuildDeprecatedRequest$outboundSchema;
  /** @deprecated use `RunBuildDeprecatedRequest$Outbound` instead. */
  export type Outbound = RunBuildDeprecatedRequest$Outbound;
}
