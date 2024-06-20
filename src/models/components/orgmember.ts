/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type OrgMember = {
    updatedAt: Date;
    createdAt: Date;
    /**
     * System generated unique identifier for a user. Not guaranteed to have a specific format.
     */
    invitedBy: string;
    /**
     * System generated unique identifier for a user. Not guaranteed to have a specific format.
     */
    userId: string;
    /**
     * System generated unique identifier for an organization. Not guaranteed to have a specific format.
     */
    orgId: string;
};

/** @internal */
export namespace OrgMember$ {
    export const inboundSchema: z.ZodType<OrgMember, z.ZodTypeDef, unknown> = z.object({
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        invitedBy: z.string(),
        userId: z.string(),
        orgId: z.string(),
    });

    export type Outbound = {
        updatedAt: string;
        createdAt: string;
        invitedBy: string;
        userId: string;
        orgId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrgMember> = z.object({
        updatedAt: z.date().transform((v) => v.toISOString()),
        createdAt: z.date().transform((v) => v.toISOString()),
        invitedBy: z.string(),
        userId: z.string(),
        orgId: z.string(),
    });
}
