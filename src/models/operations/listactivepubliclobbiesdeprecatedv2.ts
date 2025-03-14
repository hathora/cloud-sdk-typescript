/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListActivePublicLobbiesDeprecatedV2Globals = {
  appId?: string | undefined;
};

export type ListActivePublicLobbiesDeprecatedV2Request = {
  appId?: string | undefined;
  /**
   * Region to filter by. If omitted, active public lobbies in all regions will be returned.
   */
  region?: components.Region | undefined;
};

/** @internal */
export const ListActivePublicLobbiesDeprecatedV2Globals$inboundSchema:
  z.ZodType<ListActivePublicLobbiesDeprecatedV2Globals, z.ZodTypeDef, unknown> =
    z.object({
      appId: z.string().optional(),
    });

/** @internal */
export type ListActivePublicLobbiesDeprecatedV2Globals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const ListActivePublicLobbiesDeprecatedV2Globals$outboundSchema:
  z.ZodType<
    ListActivePublicLobbiesDeprecatedV2Globals$Outbound,
    z.ZodTypeDef,
    ListActivePublicLobbiesDeprecatedV2Globals
  > = z.object({
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePublicLobbiesDeprecatedV2Globals$ {
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV2Globals$inboundSchema` instead. */
  export const inboundSchema =
    ListActivePublicLobbiesDeprecatedV2Globals$inboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV2Globals$outboundSchema` instead. */
  export const outboundSchema =
    ListActivePublicLobbiesDeprecatedV2Globals$outboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV2Globals$Outbound` instead. */
  export type Outbound = ListActivePublicLobbiesDeprecatedV2Globals$Outbound;
}

export function listActivePublicLobbiesDeprecatedV2GlobalsToJSON(
  listActivePublicLobbiesDeprecatedV2Globals:
    ListActivePublicLobbiesDeprecatedV2Globals,
): string {
  return JSON.stringify(
    ListActivePublicLobbiesDeprecatedV2Globals$outboundSchema.parse(
      listActivePublicLobbiesDeprecatedV2Globals,
    ),
  );
}

export function listActivePublicLobbiesDeprecatedV2GlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  ListActivePublicLobbiesDeprecatedV2Globals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListActivePublicLobbiesDeprecatedV2Globals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListActivePublicLobbiesDeprecatedV2Globals' from JSON`,
  );
}

/** @internal */
export const ListActivePublicLobbiesDeprecatedV2Request$inboundSchema:
  z.ZodType<ListActivePublicLobbiesDeprecatedV2Request, z.ZodTypeDef, unknown> =
    z.object({
      appId: z.string().optional(),
      region: components.Region$inboundSchema.optional(),
    });

/** @internal */
export type ListActivePublicLobbiesDeprecatedV2Request$Outbound = {
  appId?: string | undefined;
  region?: string | undefined;
};

/** @internal */
export const ListActivePublicLobbiesDeprecatedV2Request$outboundSchema:
  z.ZodType<
    ListActivePublicLobbiesDeprecatedV2Request$Outbound,
    z.ZodTypeDef,
    ListActivePublicLobbiesDeprecatedV2Request
  > = z.object({
    appId: z.string().optional(),
    region: components.Region$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePublicLobbiesDeprecatedV2Request$ {
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV2Request$inboundSchema` instead. */
  export const inboundSchema =
    ListActivePublicLobbiesDeprecatedV2Request$inboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV2Request$outboundSchema` instead. */
  export const outboundSchema =
    ListActivePublicLobbiesDeprecatedV2Request$outboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV2Request$Outbound` instead. */
  export type Outbound = ListActivePublicLobbiesDeprecatedV2Request$Outbound;
}

export function listActivePublicLobbiesDeprecatedV2RequestToJSON(
  listActivePublicLobbiesDeprecatedV2Request:
    ListActivePublicLobbiesDeprecatedV2Request,
): string {
  return JSON.stringify(
    ListActivePublicLobbiesDeprecatedV2Request$outboundSchema.parse(
      listActivePublicLobbiesDeprecatedV2Request,
    ),
  );
}

export function listActivePublicLobbiesDeprecatedV2RequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListActivePublicLobbiesDeprecatedV2Request,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListActivePublicLobbiesDeprecatedV2Request$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListActivePublicLobbiesDeprecatedV2Request' from JSON`,
  );
}
