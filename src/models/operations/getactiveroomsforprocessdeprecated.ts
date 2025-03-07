/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetActiveRoomsForProcessDeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetActiveRoomsForProcessDeprecatedRequest = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema: z.ZodType<
  GetActiveRoomsForProcessDeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetActiveRoomsForProcessDeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema:
  z.ZodType<
    GetActiveRoomsForProcessDeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    GetActiveRoomsForProcessDeprecatedGlobals
  > = z.object({
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveRoomsForProcessDeprecatedGlobals$ {
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetActiveRoomsForProcessDeprecatedGlobals$Outbound;
}

export function getActiveRoomsForProcessDeprecatedGlobalsToJSON(
  getActiveRoomsForProcessDeprecatedGlobals:
    GetActiveRoomsForProcessDeprecatedGlobals,
): string {
  return JSON.stringify(
    GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema.parse(
      getActiveRoomsForProcessDeprecatedGlobals,
    ),
  );
}

export function getActiveRoomsForProcessDeprecatedGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  GetActiveRoomsForProcessDeprecatedGlobals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetActiveRoomsForProcessDeprecatedGlobals' from JSON`,
  );
}

/** @internal */
export const GetActiveRoomsForProcessDeprecatedRequest$inboundSchema: z.ZodType<
  GetActiveRoomsForProcessDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/** @internal */
export type GetActiveRoomsForProcessDeprecatedRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const GetActiveRoomsForProcessDeprecatedRequest$outboundSchema:
  z.ZodType<
    GetActiveRoomsForProcessDeprecatedRequest$Outbound,
    z.ZodTypeDef,
    GetActiveRoomsForProcessDeprecatedRequest
  > = z.object({
    appId: z.string().optional(),
    processId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveRoomsForProcessDeprecatedRequest$ {
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetActiveRoomsForProcessDeprecatedRequest$inboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetActiveRoomsForProcessDeprecatedRequest$outboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedRequest$Outbound` instead. */
  export type Outbound = GetActiveRoomsForProcessDeprecatedRequest$Outbound;
}

export function getActiveRoomsForProcessDeprecatedRequestToJSON(
  getActiveRoomsForProcessDeprecatedRequest:
    GetActiveRoomsForProcessDeprecatedRequest,
): string {
  return JSON.stringify(
    GetActiveRoomsForProcessDeprecatedRequest$outboundSchema.parse(
      getActiveRoomsForProcessDeprecatedRequest,
    ),
  );
}

export function getActiveRoomsForProcessDeprecatedRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetActiveRoomsForProcessDeprecatedRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetActiveRoomsForProcessDeprecatedRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetActiveRoomsForProcessDeprecatedRequest' from JSON`,
  );
}
