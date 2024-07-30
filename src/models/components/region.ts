/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export const Region = {
    Seattle: "Seattle",
    LosAngeles: "Los_Angeles",
    WashingtonDC: "Washington_DC",
    Chicago: "Chicago",
    London: "London",
    Frankfurt: "Frankfurt",
    Mumbai: "Mumbai",
    Singapore: "Singapore",
    Tokyo: "Tokyo",
    Sydney: "Sydney",
    SaoPaulo: "Sao_Paulo",
    Dallas: "Dallas",
} as const;
export type Region = OpenEnum<typeof Region>;

/** @internal */
export const Region$inboundSchema: z.ZodType<Region, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(Region),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const Region$outboundSchema: z.ZodType<Region, z.ZodTypeDef, Region> = z.union([
    z.nativeEnum(Region),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Region$ {
    /** @deprecated use `Region$inboundSchema` instead. */
    export const inboundSchema = Region$inboundSchema;
    /** @deprecated use `Region$outboundSchema` instead. */
    export const outboundSchema = Region$outboundSchema;
}
