/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Available metrics to query over time.
 */
export enum MetricName {
    Cpu = "cpu",
    Memory = "memory",
    RateEgress = "rate_egress",
    TotalEgress = "total_egress",
    ActiveConnections = "active_connections",
}

/** @internal */
export namespace MetricName$ {
    export const inboundSchema = z.nativeEnum(MetricName);
    export const outboundSchema = inboundSchema;
}