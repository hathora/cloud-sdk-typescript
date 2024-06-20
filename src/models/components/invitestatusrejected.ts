/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export const InviteStatusRejectedType = {
    Rejected: "rejected",
} as const;
export type InviteStatusRejectedType = OpenEnum<typeof InviteStatusRejectedType>;

export type InviteStatusRejected = {
    /**
     * System generated unique identifier for a user. Not guaranteed to have a specific format.
     */
    userId: string;
    type: InviteStatusRejectedType;
};

/** @internal */
export namespace InviteStatusRejectedType$ {
    export const inboundSchema: z.ZodType<InviteStatusRejectedType, z.ZodTypeDef, unknown> =
        z.union([
            z.nativeEnum(InviteStatusRejectedType),
            z.string().transform(catchUnrecognizedEnum),
        ]);

    export const outboundSchema: z.ZodType<
        InviteStatusRejectedType,
        z.ZodTypeDef,
        InviteStatusRejectedType
    > = z.union([
        z.nativeEnum(InviteStatusRejectedType),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace InviteStatusRejected$ {
    export const inboundSchema: z.ZodType<InviteStatusRejected, z.ZodTypeDef, unknown> = z.object({
        userId: z.string(),
        type: InviteStatusRejectedType$.inboundSchema,
    });

    export type Outbound = {
        userId: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InviteStatusRejected> = z.object(
        {
            userId: z.string(),
            type: InviteStatusRejectedType$.outboundSchema,
        }
    );
}
