/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    InvoiceStatus,
    InvoiceStatus$inboundSchema,
    InvoiceStatus$outboundSchema,
} from "./invoicestatus.js";
import * as z from "zod";

export type Invoice = {
    status: InvoiceStatus;
    amountDue: number;
    pdfUrl: string;
    dueDate: Date;
    year: number;
    month: number;
    id: string;
};

/** @internal */
export const Invoice$inboundSchema: z.ZodType<Invoice, z.ZodTypeDef, unknown> = z.object({
    status: InvoiceStatus$inboundSchema,
    amountDue: z.number(),
    pdfUrl: z.string(),
    dueDate: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    year: z.number(),
    month: z.number(),
    id: z.string(),
});

/** @internal */
export type Invoice$Outbound = {
    status: string;
    amountDue: number;
    pdfUrl: string;
    dueDate: string;
    year: number;
    month: number;
    id: string;
};

/** @internal */
export const Invoice$outboundSchema: z.ZodType<Invoice$Outbound, z.ZodTypeDef, Invoice> = z.object({
    status: InvoiceStatus$outboundSchema,
    amountDue: z.number(),
    pdfUrl: z.string(),
    dueDate: z.date().transform((v) => v.toISOString()),
    year: z.number(),
    month: z.number(),
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Invoice$ {
    /** @deprecated use `Invoice$inboundSchema` instead. */
    export const inboundSchema = Invoice$inboundSchema;
    /** @deprecated use `Invoice$outboundSchema` instead. */
    export const outboundSchema = Invoice$outboundSchema;
    /** @deprecated use `Invoice$Outbound` instead. */
    export type Outbound = Invoice$Outbound;
}
