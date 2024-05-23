/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreatePublicLobbyDeprecatedGlobals = {
    appId?: string | undefined;
};

export type CreatePublicLobbyDeprecatedSecurity = {
    playerAuth: string;
};

export type CreatePublicLobbyDeprecatedRequest = {
    appId?: string | undefined;
    region?: components.Region | undefined;
    local?: boolean | undefined;
};

/** @internal */
export namespace CreatePublicLobbyDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<
        CreatePublicLobbyDeprecatedGlobals,
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
        CreatePublicLobbyDeprecatedGlobals
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
export namespace CreatePublicLobbyDeprecatedSecurity$ {
    export const inboundSchema: z.ZodType<
        CreatePublicLobbyDeprecatedSecurity,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            playerAuth: z.string(),
        })
        .transform((v) => {
            return {
                playerAuth: v.playerAuth,
            };
        });

    export type Outbound = {
        playerAuth: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreatePublicLobbyDeprecatedSecurity
    > = z
        .object({
            playerAuth: z.string(),
        })
        .transform((v) => {
            return {
                playerAuth: v.playerAuth,
            };
        });
}

/** @internal */
export namespace CreatePublicLobbyDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<
        CreatePublicLobbyDeprecatedRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.inboundSchema.optional(),
            local: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
                local: v.local,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        region?: string | undefined;
        local: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreatePublicLobbyDeprecatedRequest
    > = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.outboundSchema.optional(),
            local: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
                local: v.local,
            };
        });
}
