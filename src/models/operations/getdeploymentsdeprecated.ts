/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDeploymentsDeprecatedGlobals = {
    appId?: string | undefined;
};

export type GetDeploymentsDeprecatedRequest = {
    appId?: string | undefined;
};

/** @internal */
export namespace GetDeploymentsDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<GetDeploymentsDeprecatedGlobals, z.ZodTypeDef, unknown> =
        z
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
        GetDeploymentsDeprecatedGlobals
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
export namespace GetDeploymentsDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<GetDeploymentsDeprecatedRequest, z.ZodTypeDef, unknown> =
        z
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
        GetDeploymentsDeprecatedRequest
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
