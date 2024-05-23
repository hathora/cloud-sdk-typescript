/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetConnectionInfoDeprecatedGlobals = {
    appId?: string | undefined;
};

export type GetConnectionInfoDeprecatedRequest = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export namespace GetConnectionInfoDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<
        GetConnectionInfoDeprecatedGlobals,
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
        GetConnectionInfoDeprecatedGlobals
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
export namespace GetConnectionInfoDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<
        GetConnectionInfoDeprecatedRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            appId: z.string().optional(),
            roomId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                roomId: v.roomId,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        roomId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConnectionInfoDeprecatedRequest
    > = z
        .object({
            appId: z.string().optional(),
            roomId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                roomId: v.roomId,
            };
        });
}