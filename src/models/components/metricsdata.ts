/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MetricValue, MetricValue$ } from "./metricvalue";
import * as z from "zod";

/**
 * Construct a type with a set of properties K of type T
 */
export type MetricsData = {
    cpu?: Array<MetricValue> | undefined;
    memory?: Array<MetricValue> | undefined;
    rateEgress?: Array<MetricValue> | undefined;
    totalEgress?: Array<MetricValue> | undefined;
    activeConnections?: Array<MetricValue> | undefined;
};

/** @internal */
export namespace MetricsData$ {
    export const inboundSchema: z.ZodType<MetricsData, z.ZodTypeDef, unknown> = z
        .object({
            cpu: z.array(MetricValue$.inboundSchema).optional(),
            memory: z.array(MetricValue$.inboundSchema).optional(),
            rate_egress: z.array(MetricValue$.inboundSchema).optional(),
            total_egress: z.array(MetricValue$.inboundSchema).optional(),
            active_connections: z.array(MetricValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cpu === undefined ? null : { cpu: v.cpu }),
                ...(v.memory === undefined ? null : { memory: v.memory }),
                ...(v.rate_egress === undefined ? null : { rateEgress: v.rate_egress }),
                ...(v.total_egress === undefined ? null : { totalEgress: v.total_egress }),
                ...(v.active_connections === undefined
                    ? null
                    : { activeConnections: v.active_connections }),
            };
        });

    export type Outbound = {
        cpu?: Array<MetricValue$.Outbound> | undefined;
        memory?: Array<MetricValue$.Outbound> | undefined;
        rate_egress?: Array<MetricValue$.Outbound> | undefined;
        total_egress?: Array<MetricValue$.Outbound> | undefined;
        active_connections?: Array<MetricValue$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MetricsData> = z
        .object({
            cpu: z.array(MetricValue$.outboundSchema).optional(),
            memory: z.array(MetricValue$.outboundSchema).optional(),
            rateEgress: z.array(MetricValue$.outboundSchema).optional(),
            totalEgress: z.array(MetricValue$.outboundSchema).optional(),
            activeConnections: z.array(MetricValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cpu === undefined ? null : { cpu: v.cpu }),
                ...(v.memory === undefined ? null : { memory: v.memory }),
                ...(v.rateEgress === undefined ? null : { rate_egress: v.rateEgress }),
                ...(v.totalEgress === undefined ? null : { total_egress: v.totalEgress }),
                ...(v.activeConnections === undefined
                    ? null
                    : { active_connections: v.activeConnections }),
            };
        });
}