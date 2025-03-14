/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Scope, Scope$inboundSchema, Scope$outboundSchema } from "./scope.js";

export type Organization = {
  /**
   * The maximum lifespan in hours of a pod.
   */
  podMaxLifespanHrs?: number | undefined;
  /**
   * The maximum number of monthly process vcpu hours that can be run by the organization
   *
   * @remarks
   * If undefined, the organization has no limit.
   */
  monthlyProcessVcpuHoursLimit?: number | undefined;
  /**
   * The maximum number of concurrent processes that can be run by the organization
   *
   * @remarks
   * If undefined, the organization has no limit.
   */
  concurrentProcessVcpusLimit?: number | undefined;
  /**
   * The features enabled for this org and user.
   */
  enabledFeatureFlags?: Array<string> | undefined;
  /**
   * The maximum memory in MB that can be used by any process in this org.
   */
  maxRequestedMemoryMB: number;
  /**
   * The scopes the user who loaded this has on this org.
   */
  scopes: Array<Scope>;
  isSingleTenant: boolean;
  stripeCustomerId: string;
  /**
   * The name of an organization.
   */
  name?: string | undefined;
  /**
   * System generated unique identifier for an organization. Not guaranteed to have a specific format.
   */
  orgId: string;
};

/** @internal */
export const Organization$inboundSchema: z.ZodType<
  Organization,
  z.ZodTypeDef,
  unknown
> = z.object({
  podMaxLifespanHrs: z.number().optional(),
  monthlyProcessVcpuHoursLimit: z.number().optional(),
  concurrentProcessVcpusLimit: z.number().optional(),
  enabledFeatureFlags: z.array(z.string()).optional(),
  maxRequestedMemoryMB: z.number(),
  scopes: z.array(Scope$inboundSchema),
  isSingleTenant: z.boolean(),
  stripeCustomerId: z.string(),
  name: z.string().optional(),
  orgId: z.string(),
});

/** @internal */
export type Organization$Outbound = {
  podMaxLifespanHrs?: number | undefined;
  monthlyProcessVcpuHoursLimit?: number | undefined;
  concurrentProcessVcpusLimit?: number | undefined;
  enabledFeatureFlags?: Array<string> | undefined;
  maxRequestedMemoryMB: number;
  scopes: Array<string>;
  isSingleTenant: boolean;
  stripeCustomerId: string;
  name?: string | undefined;
  orgId: string;
};

/** @internal */
export const Organization$outboundSchema: z.ZodType<
  Organization$Outbound,
  z.ZodTypeDef,
  Organization
> = z.object({
  podMaxLifespanHrs: z.number().optional(),
  monthlyProcessVcpuHoursLimit: z.number().optional(),
  concurrentProcessVcpusLimit: z.number().optional(),
  enabledFeatureFlags: z.array(z.string()).optional(),
  maxRequestedMemoryMB: z.number(),
  scopes: z.array(Scope$outboundSchema),
  isSingleTenant: z.boolean(),
  stripeCustomerId: z.string(),
  name: z.string().optional(),
  orgId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Organization$ {
  /** @deprecated use `Organization$inboundSchema` instead. */
  export const inboundSchema = Organization$inboundSchema;
  /** @deprecated use `Organization$outboundSchema` instead. */
  export const outboundSchema = Organization$outboundSchema;
  /** @deprecated use `Organization$Outbound` instead. */
  export type Outbound = Organization$Outbound;
}

export function organizationToJSON(organization: Organization): string {
  return JSON.stringify(Organization$outboundSchema.parse(organization));
}

export function organizationFromJSON(
  jsonString: string,
): SafeParseResult<Organization, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Organization$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Organization' from JSON`,
  );
}
