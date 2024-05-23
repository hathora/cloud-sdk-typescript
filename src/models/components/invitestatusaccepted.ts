/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum InviteStatusAcceptedType {
    Accepted = "accepted",
}

export type InviteStatusAccepted = {
    /**
     * System generated unique identifier for a user. Not guaranteed to have a specific format.
     */
    userId: string;
    type: InviteStatusAcceptedType;
};

/** @internal */
export namespace InviteStatusAcceptedType$ {
    export const inboundSchema = z.nativeEnum(InviteStatusAcceptedType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace InviteStatusAccepted$ {
    export const inboundSchema: z.ZodType<InviteStatusAccepted, z.ZodTypeDef, unknown> = z
        .object({
            userId: z.string(),
            type: InviteStatusAcceptedType$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InviteStatusAccepted> = z
        .object({
            userId: z.string(),
            type: InviteStatusAcceptedType$.outboundSchema,
        })
        .transform((v) => {
            return {
                userId: v.userId,
                type: v.type,
            };
        });
}