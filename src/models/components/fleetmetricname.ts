/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const FleetMetricName = {
  ProvisionedTotal: "provisionedTotal",
  ProvisionedBareMetal: "provisionedBareMetal",
  ProvisionedCloud: "provisionedCloud",
  Utilized: "utilized",
} as const;
export type FleetMetricName = OpenEnum<typeof FleetMetricName>;

/** @internal */
export const FleetMetricName$inboundSchema: z.ZodType<
  FleetMetricName,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(FleetMetricName),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const FleetMetricName$outboundSchema: z.ZodType<
  FleetMetricName,
  z.ZodTypeDef,
  FleetMetricName
> = z.union([
  z.nativeEnum(FleetMetricName),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FleetMetricName$ {
  /** @deprecated use `FleetMetricName$inboundSchema` instead. */
  export const inboundSchema = FleetMetricName$inboundSchema;
  /** @deprecated use `FleetMetricName$outboundSchema` instead. */
  export const outboundSchema = FleetMetricName$outboundSchema;
}
