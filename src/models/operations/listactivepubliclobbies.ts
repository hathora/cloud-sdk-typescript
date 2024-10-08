/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

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
