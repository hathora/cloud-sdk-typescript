/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrgToken, OrgToken$ } from "./orgtoken.js";
import * as z from "zod";

export type CreatedOrgToken = {
    plainTextToken: string;
    orgToken: OrgToken;
};

/** @internal */
export namespace CreatedOrgToken$ {
    export const inboundSchema: z.ZodType<CreatedOrgToken, z.ZodTypeDef, unknown> = z.object({
        plainTextToken: z.string(),
        orgToken: OrgToken$.inboundSchema,
    });

    export type Outbound = {
        plainTextToken: string;
        orgToken: OrgToken$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatedOrgToken> = z.object({
        plainTextToken: z.string(),
        orgToken: OrgToken$.outboundSchema,
    });
}
