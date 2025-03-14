/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListActivePublicLobbiesGlobals = {
  appId?: string | undefined;
};

export type ListActivePublicLobbiesRequest = {
  appId?: string | undefined;
  /**
   * If omitted, active public lobbies in all regions will be returned.
   */
  region?: components.Region | undefined;
};

/** @internal */
export const ListActivePublicLobbiesGlobals$inboundSchema: z.ZodType<
  ListActivePublicLobbiesGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type ListActivePublicLobbiesGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const ListActivePublicLobbiesGlobals$outboundSchema: z.ZodType<
  ListActivePublicLobbiesGlobals$Outbound,
  z.ZodTypeDef,
  ListActivePublicLobbiesGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePublicLobbiesGlobals$ {
  /** @deprecated use `ListActivePublicLobbiesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListActivePublicLobbiesGlobals$inboundSchema;
  /** @deprecated use `ListActivePublicLobbiesGlobals$outboundSchema` instead. */
  export const outboundSchema = ListActivePublicLobbiesGlobals$outboundSchema;
  /** @deprecated use `ListActivePublicLobbiesGlobals$Outbound` instead. */
  export type Outbound = ListActivePublicLobbiesGlobals$Outbound;
}

export function listActivePublicLobbiesGlobalsToJSON(
  listActivePublicLobbiesGlobals: ListActivePublicLobbiesGlobals,
): string {
  return JSON.stringify(
    ListActivePublicLobbiesGlobals$outboundSchema.parse(
      listActivePublicLobbiesGlobals,
    ),
  );
}

export function listActivePublicLobbiesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListActivePublicLobbiesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListActivePublicLobbiesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListActivePublicLobbiesGlobals' from JSON`,
  );
}

/** @internal */
export const ListActivePublicLobbiesRequest$inboundSchema: z.ZodType<
  ListActivePublicLobbiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  region: components.Region$inboundSchema.optional(),
});

/** @internal */
export type ListActivePublicLobbiesRequest$Outbound = {
  appId?: string | undefined;
  region?: string | undefined;
};

/** @internal */
export const ListActivePublicLobbiesRequest$outboundSchema: z.ZodType<
  ListActivePublicLobbiesRequest$Outbound,
  z.ZodTypeDef,
  ListActivePublicLobbiesRequest
> = z.object({
  appId: z.string().optional(),
  region: components.Region$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePublicLobbiesRequest$ {
  /** @deprecated use `ListActivePublicLobbiesRequest$inboundSchema` instead. */
  export const inboundSchema = ListActivePublicLobbiesRequest$inboundSchema;
  /** @deprecated use `ListActivePublicLobbiesRequest$outboundSchema` instead. */
  export const outboundSchema = ListActivePublicLobbiesRequest$outboundSchema;
  /** @deprecated use `ListActivePublicLobbiesRequest$Outbound` instead. */
  export type Outbound = ListActivePublicLobbiesRequest$Outbound;
}

export function listActivePublicLobbiesRequestToJSON(
  listActivePublicLobbiesRequest: ListActivePublicLobbiesRequest,
): string {
  return JSON.stringify(
    ListActivePublicLobbiesRequest$outboundSchema.parse(
      listActivePublicLobbiesRequest,
    ),
  );
}

export function listActivePublicLobbiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListActivePublicLobbiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListActivePublicLobbiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListActivePublicLobbiesRequest' from JSON`,
  );
}
