/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetConnectionInfoGlobals = {
    appId?: string | undefined;
};

export type GetConnectionInfoRequest = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export namespace GetConnectionInfoGlobals$ {
    export const inboundSchema: z.ZodType<GetConnectionInfoGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionInfoGlobals> = z
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
export namespace GetConnectionInfoRequest$ {
    export const inboundSchema: z.ZodType<GetConnectionInfoRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionInfoRequest> = z
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