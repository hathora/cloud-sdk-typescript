/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SuspendRoomV2DeprecatedRequest = {
    roomId: string;
    appId?: string | undefined;
};

export type SuspendRoomV2DeprecatedResponse = {};

/** @internal */
export namespace SuspendRoomV2DeprecatedRequest$ {
    export type Inbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<SuspendRoomV2DeprecatedRequest, z.ZodTypeDef, Inbound> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SuspendRoomV2DeprecatedRequest> =
        z
            .object({
                roomId: z.string(),
                appId: z.string().optional(),
            })
            .transform((v) => {
                return {
                    roomId: v.roomId,
                    ...(v.appId === undefined ? null : { appId: v.appId }),
                };
            });
}

/** @internal */
export namespace SuspendRoomV2DeprecatedResponse$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<SuspendRoomV2DeprecatedResponse, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SuspendRoomV2DeprecatedResponse
    > = z.object({});
}
