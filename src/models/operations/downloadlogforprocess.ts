/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DownloadLogForProcessGlobals = {
  appId?: string | undefined;
};

export type DownloadLogForProcessRequest = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const DownloadLogForProcessGlobals$inboundSchema: z.ZodType<
  DownloadLogForProcessGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type DownloadLogForProcessGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const DownloadLogForProcessGlobals$outboundSchema: z.ZodType<
  DownloadLogForProcessGlobals$Outbound,
  z.ZodTypeDef,
  DownloadLogForProcessGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadLogForProcessGlobals$ {
  /** @deprecated use `DownloadLogForProcessGlobals$inboundSchema` instead. */
  export const inboundSchema = DownloadLogForProcessGlobals$inboundSchema;
  /** @deprecated use `DownloadLogForProcessGlobals$outboundSchema` instead. */
  export const outboundSchema = DownloadLogForProcessGlobals$outboundSchema;
  /** @deprecated use `DownloadLogForProcessGlobals$Outbound` instead. */
  export type Outbound = DownloadLogForProcessGlobals$Outbound;
}

export function downloadLogForProcessGlobalsToJSON(
  downloadLogForProcessGlobals: DownloadLogForProcessGlobals,
): string {
  return JSON.stringify(
    DownloadLogForProcessGlobals$outboundSchema.parse(
      downloadLogForProcessGlobals,
    ),
  );
}

export function downloadLogForProcessGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DownloadLogForProcessGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DownloadLogForProcessGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DownloadLogForProcessGlobals' from JSON`,
  );
}

/** @internal */
export const DownloadLogForProcessRequest$inboundSchema: z.ZodType<
  DownloadLogForProcessRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/** @internal */
export type DownloadLogForProcessRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const DownloadLogForProcessRequest$outboundSchema: z.ZodType<
  DownloadLogForProcessRequest$Outbound,
  z.ZodTypeDef,
  DownloadLogForProcessRequest
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadLogForProcessRequest$ {
  /** @deprecated use `DownloadLogForProcessRequest$inboundSchema` instead. */
  export const inboundSchema = DownloadLogForProcessRequest$inboundSchema;
  /** @deprecated use `DownloadLogForProcessRequest$outboundSchema` instead. */
  export const outboundSchema = DownloadLogForProcessRequest$outboundSchema;
  /** @deprecated use `DownloadLogForProcessRequest$Outbound` instead. */
  export type Outbound = DownloadLogForProcessRequest$Outbound;
}

export function downloadLogForProcessRequestToJSON(
  downloadLogForProcessRequest: DownloadLogForProcessRequest,
): string {
  return JSON.stringify(
    DownloadLogForProcessRequest$outboundSchema.parse(
      downloadLogForProcessRequest,
    ),
  );
}

export function downloadLogForProcessRequestFromJSON(
  jsonString: string,
): SafeParseResult<DownloadLogForProcessRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DownloadLogForProcessRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DownloadLogForProcessRequest' from JSON`,
  );
}
