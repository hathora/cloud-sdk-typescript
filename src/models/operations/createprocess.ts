/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateProcessGlobals = {
    appId?: string | undefined;
};

export type CreateProcessRequest = {
    appId?: string | undefined;
    region: components.Region;
};

/** @internal */
export namespace CreateProcessGlobals$ {
    export const inboundSchema: z.ZodType<CreateProcessGlobals, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateProcessGlobals> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace CreateProcessRequest$ {
    export const inboundSchema: z.ZodType<CreateProcessRequest, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                region: v.region,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        region: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateProcessRequest> = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                region: v.region,
            };
        });
}
