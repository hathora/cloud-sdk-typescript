/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDeploymentGlobals = {
  appId?: string | undefined;
};

export type GetDeploymentRequest = {
  appId?: string | undefined;
  deploymentId: string;
};

/** @internal */
export const GetDeploymentGlobals$inboundSchema: z.ZodType<
  GetDeploymentGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetDeploymentGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetDeploymentGlobals$outboundSchema: z.ZodType<
  GetDeploymentGlobals$Outbound,
  z.ZodTypeDef,
  GetDeploymentGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentGlobals$ {
  /** @deprecated use `GetDeploymentGlobals$inboundSchema` instead. */
  export const inboundSchema = GetDeploymentGlobals$inboundSchema;
  /** @deprecated use `GetDeploymentGlobals$outboundSchema` instead. */
  export const outboundSchema = GetDeploymentGlobals$outboundSchema;
  /** @deprecated use `GetDeploymentGlobals$Outbound` instead. */
  export type Outbound = GetDeploymentGlobals$Outbound;
}

/** @internal */
export const GetDeploymentRequest$inboundSchema: z.ZodType<
  GetDeploymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  deploymentId: z.string(),
});

/** @internal */
export type GetDeploymentRequest$Outbound = {
  appId?: string | undefined;
  deploymentId: string;
};

/** @internal */
export const GetDeploymentRequest$outboundSchema: z.ZodType<
  GetDeploymentRequest$Outbound,
  z.ZodTypeDef,
  GetDeploymentRequest
> = z.object({
  appId: z.string().optional(),
  deploymentId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentRequest$ {
  /** @deprecated use `GetDeploymentRequest$inboundSchema` instead. */
  export const inboundSchema = GetDeploymentRequest$inboundSchema;
  /** @deprecated use `GetDeploymentRequest$outboundSchema` instead. */
  export const outboundSchema = GetDeploymentRequest$outboundSchema;
  /** @deprecated use `GetDeploymentRequest$Outbound` instead. */
  export type Outbound = GetDeploymentRequest$Outbound;
}