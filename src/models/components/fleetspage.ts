/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Fleet,
  Fleet$inboundSchema,
  Fleet$Outbound,
  Fleet$outboundSchema,
} from "./fleet.js";

export type FleetsPage = {
  fleets: Array<Fleet>;
};

/** @internal */
export const FleetsPage$inboundSchema: z.ZodType<
  FleetsPage,
  z.ZodTypeDef,
  unknown
> = z.object({
  fleets: z.array(Fleet$inboundSchema),
});

/** @internal */
export type FleetsPage$Outbound = {
  fleets: Array<Fleet$Outbound>;
};

/** @internal */
export const FleetsPage$outboundSchema: z.ZodType<
  FleetsPage$Outbound,
  z.ZodTypeDef,
  FleetsPage
> = z.object({
  fleets: z.array(Fleet$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FleetsPage$ {
  /** @deprecated use `FleetsPage$inboundSchema` instead. */
  export const inboundSchema = FleetsPage$inboundSchema;
  /** @deprecated use `FleetsPage$outboundSchema` instead. */
  export const outboundSchema = FleetsPage$outboundSchema;
  /** @deprecated use `FleetsPage$Outbound` instead. */
  export type Outbound = FleetsPage$Outbound;
}

export function fleetsPageToJSON(fleetsPage: FleetsPage): string {
  return JSON.stringify(FleetsPage$outboundSchema.parse(fleetsPage));
}

export function fleetsPageFromJSON(
  jsonString: string,
): SafeParseResult<FleetsPage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FleetsPage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FleetsPage' from JSON`,
  );
}
