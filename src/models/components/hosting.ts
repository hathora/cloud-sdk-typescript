/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const Hosting = {
  Metal: "metal",
  Cloud: "cloud",
  Shared: "shared",
} as const;
export type Hosting = OpenEnum<typeof Hosting>;

/** @internal */
export const Hosting$inboundSchema: z.ZodType<Hosting, z.ZodTypeDef, unknown> =
  z
    .union([
      z.nativeEnum(Hosting),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const Hosting$outboundSchema: z.ZodType<Hosting, z.ZodTypeDef, Hosting> =
  z.union([
    z.nativeEnum(Hosting),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Hosting$ {
  /** @deprecated use `Hosting$inboundSchema` instead. */
  export const inboundSchema = Hosting$inboundSchema;
  /** @deprecated use `Hosting$outboundSchema` instead. */
  export const outboundSchema = Hosting$outboundSchema;
}
