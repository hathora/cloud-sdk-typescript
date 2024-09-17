/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type CreateProcessV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type CreateProcessV2DeprecatedRequest = {
  appId?: string | undefined;
  region: components.Region;
};

/** @internal */
export const CreateProcessV2DeprecatedGlobals$inboundSchema: z.ZodType<
  CreateProcessV2DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type CreateProcessV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const CreateProcessV2DeprecatedGlobals$outboundSchema: z.ZodType<
  CreateProcessV2DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  CreateProcessV2DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProcessV2DeprecatedGlobals$ {
  /** @deprecated use `CreateProcessV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateProcessV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `CreateProcessV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateProcessV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `CreateProcessV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound = CreateProcessV2DeprecatedGlobals$Outbound;
}

/** @internal */
export const CreateProcessV2DeprecatedRequest$inboundSchema: z.ZodType<
  CreateProcessV2DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  region: components.Region$inboundSchema,
});

/** @internal */
export type CreateProcessV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  region: string;
};

/** @internal */
export const CreateProcessV2DeprecatedRequest$outboundSchema: z.ZodType<
  CreateProcessV2DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  CreateProcessV2DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  region: components.Region$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProcessV2DeprecatedRequest$ {
  /** @deprecated use `CreateProcessV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = CreateProcessV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `CreateProcessV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = CreateProcessV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `CreateProcessV2DeprecatedRequest$Outbound` instead. */
  export type Outbound = CreateProcessV2DeprecatedRequest$Outbound;
}