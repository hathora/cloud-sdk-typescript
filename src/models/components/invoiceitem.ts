/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type InvoiceItem = {
    amount: number;
    unitPrice: number;
    quantity: number;
    unit: string;
    productName: string;
};

/** @internal */
export const InvoiceItem$inboundSchema: z.ZodType<InvoiceItem, z.ZodTypeDef, unknown> = z.object({
    amount: z.number(),
    unitPrice: z.number(),
    quantity: z.number(),
    unit: z.string(),
    productName: z.string(),
});

/** @internal */
export type InvoiceItem$Outbound = {
    amount: number;
    unitPrice: number;
    quantity: number;
    unit: string;
    productName: string;
};

/** @internal */
export const InvoiceItem$outboundSchema: z.ZodType<
    InvoiceItem$Outbound,
    z.ZodTypeDef,
    InvoiceItem
> = z.object({
    amount: z.number(),
    unitPrice: z.number(),
    quantity: z.number(),
    unit: z.string(),
    productName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItem$ {
    /** @deprecated use `InvoiceItem$inboundSchema` instead. */
    export const inboundSchema = InvoiceItem$inboundSchema;
    /** @deprecated use `InvoiceItem$outboundSchema` instead. */
    export const outboundSchema = InvoiceItem$outboundSchema;
    /** @deprecated use `InvoiceItem$Outbound` instead. */
    export type Outbound = InvoiceItem$Outbound;
}
