/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type CreateProcessGlobals = {
  appId?: string | undefined;
};

export type CreateProcessRequest = {
  appId?: string | undefined;
  region: components.Region;
};

/** @internal */
export const CreateProcessGlobals$inboundSchema: z.ZodType<
  CreateProcessGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type CreateProcessGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const CreateProcessGlobals$outboundSchema: z.ZodType<
  CreateProcessGlobals$Outbound,
  z.ZodTypeDef,
  CreateProcessGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProcessGlobals$ {
  /** @deprecated use `CreateProcessGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateProcessGlobals$inboundSchema;
  /** @deprecated use `CreateProcessGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateProcessGlobals$outboundSchema;
  /** @deprecated use `CreateProcessGlobals$Outbound` instead. */
  export type Outbound = CreateProcessGlobals$Outbound;
}

/** @internal */
export const CreateProcessRequest$inboundSchema: z.ZodType<
  CreateProcessRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  region: components.Region$inboundSchema,
});

/** @internal */
export type CreateProcessRequest$Outbound = {
  appId?: string | undefined;
  region: string;
};

/** @internal */
export const CreateProcessRequest$outboundSchema: z.ZodType<
  CreateProcessRequest$Outbound,
  z.ZodTypeDef,
  CreateProcessRequest
> = z.object({
  appId: z.string().optional(),
  region: components.Region$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProcessRequest$ {
  /** @deprecated use `CreateProcessRequest$inboundSchema` instead. */
  export const inboundSchema = CreateProcessRequest$inboundSchema;
  /** @deprecated use `CreateProcessRequest$outboundSchema` instead. */
  export const outboundSchema = CreateProcessRequest$outboundSchema;
  /** @deprecated use `CreateProcessRequest$Outbound` instead. */
  export type Outbound = CreateProcessRequest$Outbound;
}
