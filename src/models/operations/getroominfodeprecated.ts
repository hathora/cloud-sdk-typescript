/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetRoomInfoDeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetRoomInfoDeprecatedRequest = {
  appId?: string | undefined;
  roomId: string;
};

/** @internal */
export const GetRoomInfoDeprecatedGlobals$inboundSchema: z.ZodType<
  GetRoomInfoDeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetRoomInfoDeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetRoomInfoDeprecatedGlobals$outboundSchema: z.ZodType<
  GetRoomInfoDeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  GetRoomInfoDeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRoomInfoDeprecatedGlobals$ {
  /** @deprecated use `GetRoomInfoDeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = GetRoomInfoDeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetRoomInfoDeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = GetRoomInfoDeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetRoomInfoDeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetRoomInfoDeprecatedGlobals$Outbound;
}

/** @internal */
export const GetRoomInfoDeprecatedRequest$inboundSchema: z.ZodType<
  GetRoomInfoDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  roomId: z.string(),
});

/** @internal */
export type GetRoomInfoDeprecatedRequest$Outbound = {
  appId?: string | undefined;
  roomId: string;
};

/** @internal */
export const GetRoomInfoDeprecatedRequest$outboundSchema: z.ZodType<
  GetRoomInfoDeprecatedRequest$Outbound,
  z.ZodTypeDef,
  GetRoomInfoDeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  roomId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRoomInfoDeprecatedRequest$ {
  /** @deprecated use `GetRoomInfoDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = GetRoomInfoDeprecatedRequest$inboundSchema;
  /** @deprecated use `GetRoomInfoDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = GetRoomInfoDeprecatedRequest$outboundSchema;
  /** @deprecated use `GetRoomInfoDeprecatedRequest$Outbound` instead. */
  export type Outbound = GetRoomInfoDeprecatedRequest$Outbound;
}
