/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UsageLimits = {
  monthlyProcessVcpuHoursConsumed: number;
  monthlyProcessVcpuHoursLimit?: number | undefined;
  concurrentProcessVcpus7DayMax: number;
  concurrentProcessVcpusLimit?: number | undefined;
};

/** @internal */
export const UsageLimits$inboundSchema: z.ZodType<
  UsageLimits,
  z.ZodTypeDef,
  unknown
> = z.object({
  monthlyProcessVcpuHoursConsumed: z.number(),
  monthlyProcessVcpuHoursLimit: z.number().optional(),
  concurrentProcessVcpus7DayMax: z.number(),
  concurrentProcessVcpusLimit: z.number().optional(),
});

/** @internal */
export type UsageLimits$Outbound = {
  monthlyProcessVcpuHoursConsumed: number;
  monthlyProcessVcpuHoursLimit?: number | undefined;
  concurrentProcessVcpus7DayMax: number;
  concurrentProcessVcpusLimit?: number | undefined;
};

/** @internal */
export const UsageLimits$outboundSchema: z.ZodType<
  UsageLimits$Outbound,
  z.ZodTypeDef,
  UsageLimits
> = z.object({
  monthlyProcessVcpuHoursConsumed: z.number(),
  monthlyProcessVcpuHoursLimit: z.number().optional(),
  concurrentProcessVcpus7DayMax: z.number(),
  concurrentProcessVcpusLimit: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsageLimits$ {
  /** @deprecated use `UsageLimits$inboundSchema` instead. */
  export const inboundSchema = UsageLimits$inboundSchema;
  /** @deprecated use `UsageLimits$outboundSchema` instead. */
  export const outboundSchema = UsageLimits$outboundSchema;
  /** @deprecated use `UsageLimits$Outbound` instead. */
  export type Outbound = UsageLimits$Outbound;
}

export function usageLimitsToJSON(usageLimits: UsageLimits): string {
  return JSON.stringify(UsageLimits$outboundSchema.parse(usageLimits));
}

export function usageLimitsFromJSON(
  jsonString: string,
): SafeParseResult<UsageLimits, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsageLimits$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsageLimits' from JSON`,
  );
}