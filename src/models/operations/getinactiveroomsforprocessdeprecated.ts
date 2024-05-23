/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetInactiveRoomsForProcessDeprecatedGlobals = {
    appId?: string | undefined;
};

export type GetInactiveRoomsForProcessDeprecatedRequest = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export namespace GetInactiveRoomsForProcessDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<
        GetInactiveRoomsForProcessDeprecatedGlobals,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetInactiveRoomsForProcessDeprecatedGlobals
    > = z
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
export namespace GetInactiveRoomsForProcessDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<
        GetInactiveRoomsForProcessDeprecatedRequest,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetInactiveRoomsForProcessDeprecatedRequest
    > = z
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