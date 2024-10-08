/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  OrgTokenStatus,
  OrgTokenStatus$inboundSchema,
  OrgTokenStatus$outboundSchema,
} from "./orgtokenstatus.js";

export type OrgToken = {
  createdAt: Date;
  createdBy: string;
  lastFourCharsOfKey: string;
  status: OrgTokenStatus;
  /**
   * Readable name for a token. Must be unique within an organization.
   */
  name: string;
  orgId: string;
  /**
   * System generated unique identifier for an organization token.
   */
  orgTokenId: string;
};

/** @internal */
export const OrgToken$inboundSchema: z.ZodType<
  OrgToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  createdBy: z.string(),
  lastFourCharsOfKey: z.string(),
  status: OrgTokenStatus$inboundSchema,
  name: z.string(),
  orgId: z.string(),
  orgTokenId: z.string(),
});

/** @internal */
export type OrgToken$Outbound = {
  createdAt: string;
  createdBy: string;
  lastFourCharsOfKey: string;
  status: string;
  name: string;
  orgId: string;
  orgTokenId: string;
};

/** @internal */
export const OrgToken$outboundSchema: z.ZodType<
  OrgToken$Outbound,
  z.ZodTypeDef,
  OrgToken
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  createdBy: z.string(),
  lastFourCharsOfKey: z.string(),
  status: OrgTokenStatus$outboundSchema,
  name: z.string(),
  orgId: z.string(),
  orgTokenId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrgToken$ {
  /** @deprecated use `OrgToken$inboundSchema` instead. */
  export const inboundSchema = OrgToken$inboundSchema;
  /** @deprecated use `OrgToken$outboundSchema` instead. */
  export const outboundSchema = OrgToken$outboundSchema;
  /** @deprecated use `OrgToken$Outbound` instead. */
  export type Outbound = OrgToken$Outbound;
}
