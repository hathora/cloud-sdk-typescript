/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StopProcessGlobals = {
    appId?: string | undefined;
};

export type StopProcessRequest = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export namespace StopProcessGlobals$ {
    export const inboundSchema: z.ZodType<StopProcessGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StopProcessGlobals> = z
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
export namespace StopProcessRequest$ {
    export const inboundSchema: z.ZodType<StopProcessRequest, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
            processId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                processId: v.processId,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        processId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StopProcessRequest> = z
        .object({
            appId: z.string().optional(),
            processId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                processId: v.processId,
            };
        });
}