/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrgTokenStatus, OrgTokenStatus$ } from "./orgtokenstatus";
import * as z from "zod";

export type OrgToken = {
    createdAt: Date;
    createdBy: string;
    lastFourCharsOfKey: string;
    status: OrgTokenStatus;
    /**
     * Readable name for a token. Must be unique within an organization.
     */
    name: string;
    orgId: string;
    /**
     * System generated unique identifier for an organization token.
     */
    orgTokenId: string;
};

/** @internal */
export namespace OrgToken$ {
    export const inboundSchema: z.ZodType<OrgToken, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            lastFourCharsOfKey: z.string(),
            status: OrgTokenStatus$.inboundSchema,
            name: z.string(),
            orgId: z.string(),
            orgTokenId: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                lastFourCharsOfKey: v.lastFourCharsOfKey,
                status: v.status,
                name: v.name,
                orgId: v.orgId,
                orgTokenId: v.orgTokenId,
            };
        });

    export type Outbound = {
        createdAt: string;
        createdBy: string;
        lastFourCharsOfKey: string;
        status: string;
        name: string;
        orgId: string;
        orgTokenId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrgToken> = z
        .object({
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            lastFourCharsOfKey: z.string(),
            status: OrgTokenStatus$.outboundSchema,
            name: z.string(),
            orgId: z.string(),
            orgTokenId: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                lastFourCharsOfKey: v.lastFourCharsOfKey,
                status: v.status,
                name: v.name,
                orgId: v.orgId,
                orgTokenId: v.orgTokenId,
            };
        });
}