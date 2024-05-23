/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum InviteStatusRejectedType {
    Rejected = "rejected",
}

export type InviteStatusRejected = {
    /**
     * System generated unique identifier for a user. Not guaranteed to have a specific format.
     */
    userId: string;
    type: InviteStatusRejectedType;
};

/** @internal */
export namespace InviteStatusRejectedType$ {
    export const inboundSchema = z.nativeEnum(InviteStatusRejectedType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace InviteStatusRejected$ {
    export const inboundSchema: z.ZodType<InviteStatusRejected, z.ZodTypeDef, unknown> = z
        .object({
            userId: z.string(),
            type: InviteStatusRejectedType$.inboundSchema,
        })
        .transform((v) => {
            return {
                userId: v.userId,
                type: v.type,
            };
        });

    export type Outbound = {
        userId: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InviteStatusRejected> = z
        .object({
            userId: z.string(),
            type: InviteStatusRejectedType$.outboundSchema,
        })
        .transform((v) => {
            return {
                userId: v.userId,
                type: v.type,
            };
        });
}
