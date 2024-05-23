/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateOrgToken = {
    /**
     * Readable name for a token. Must be unique within an organization.
     */
    name: string;
};

/** @internal */
export namespace CreateOrgToken$ {
    export const inboundSchema: z.ZodType<CreateOrgToken, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOrgToken> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}