/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AutoscalerConfig,
  AutoscalerConfig$inboundSchema,
  AutoscalerConfig$Outbound,
  AutoscalerConfig$outboundSchema,
} from "./autoscalerconfig.js";

export type UpdateFleet = {
  autoscalerConfig: AutoscalerConfig;
};

/** @internal */
export const UpdateFleet$inboundSchema: z.ZodType<
  UpdateFleet,
  z.ZodTypeDef,
  unknown
> = z.object({
  autoscalerConfig: AutoscalerConfig$inboundSchema,
});

/** @internal */
export type UpdateFleet$Outbound = {
  autoscalerConfig: AutoscalerConfig$Outbound;
};

/** @internal */
export const UpdateFleet$outboundSchema: z.ZodType<
  UpdateFleet$Outbound,
  z.ZodTypeDef,
  UpdateFleet
> = z.object({
  autoscalerConfig: AutoscalerConfig$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateFleet$ {
  /** @deprecated use `UpdateFleet$inboundSchema` instead. */
  export const inboundSchema = UpdateFleet$inboundSchema;
  /** @deprecated use `UpdateFleet$outboundSchema` instead. */
  export const outboundSchema = UpdateFleet$outboundSchema;
  /** @deprecated use `UpdateFleet$Outbound` instead. */
  export type Outbound = UpdateFleet$Outbound;
}

export function updateFleetToJSON(updateFleet: UpdateFleet): string {
  return JSON.stringify(UpdateFleet$outboundSchema.parse(updateFleet));
}

export function updateFleetFromJSON(
  jsonString: string,
): SafeParseResult<UpdateFleet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateFleet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateFleet' from JSON`,
  );
}
