/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const CardBrand = {
  Amex: "amex",
  CartesBancaires: "cartes_bancaires",
  Diners: "diners",
  Discover: "discover",
  Jcb: "jcb",
  Mastercard: "mastercard",
  Visa: "visa",
  Unionpay: "unionpay",
  Card: "card",
} as const;
export type CardBrand = OpenEnum<typeof CardBrand>;

/** @internal */
export const CardBrand$inboundSchema: z.ZodType<
  CardBrand,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CardBrand),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CardBrand$outboundSchema: z.ZodType<
  CardBrand,
  z.ZodTypeDef,
  CardBrand
> = z.union([
  z.nativeEnum(CardBrand),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardBrand$ {
  /** @deprecated use `CardBrand$inboundSchema` instead. */
  export const inboundSchema = CardBrand$inboundSchema;
  /** @deprecated use `CardBrand$outboundSchema` instead. */
  export const outboundSchema = CardBrand$outboundSchema;
}
