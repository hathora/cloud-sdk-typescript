/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type MetricValue = {
    value: number;
    timestamp: number;
};

/** @internal */
export namespace MetricValue$ {
    export const inboundSchema: z.ZodType<MetricValue, z.ZodTypeDef, unknown> = z
        .object({
            value: z.number(),
            timestamp: z.number(),
        })
        .transform((v) => {
            return {
                value: v.value,
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        value: number;
        timestamp: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MetricValue> = z
        .object({
            value: z.number(),
            timestamp: z.number(),
        })
        .transform((v) => {
            return {
                value: v.value,
                timestamp: v.timestamp,
            };
        });
}
