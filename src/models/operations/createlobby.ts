/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateLobbyGlobals = {
    appId?: string | undefined;
};

export type CreateLobbySecurity = {
    playerAuth: string;
};

export type CreateLobbyRequest = {
    appId?: string | undefined;
    shortCode?: string | undefined;
    roomId?: string | undefined;
    createLobbyV3Params: components.CreateLobbyV3Params;
};

/** @internal */
export const CreateLobbyGlobals$inboundSchema: z.ZodType<
    CreateLobbyGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type CreateLobbyGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const CreateLobbyGlobals$outboundSchema: z.ZodType<
    CreateLobbyGlobals$Outbound,
    z.ZodTypeDef,
    CreateLobbyGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLobbyGlobals$ {
    /** @deprecated use `CreateLobbyGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateLobbyGlobals$inboundSchema;
    /** @deprecated use `CreateLobbyGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateLobbyGlobals$outboundSchema;
    /** @deprecated use `CreateLobbyGlobals$Outbound` instead. */
    export type Outbound = CreateLobbyGlobals$Outbound;
}

/** @internal */
export const CreateLobbySecurity$inboundSchema: z.ZodType<
    CreateLobbySecurity,
    z.ZodTypeDef,
    unknown
> = z.object({
    playerAuth: z.string(),
});

/** @internal */
export type CreateLobbySecurity$Outbound = {
    playerAuth: string;
};

/** @internal */
export const CreateLobbySecurity$outboundSchema: z.ZodType<
    CreateLobbySecurity$Outbound,
    z.ZodTypeDef,
    CreateLobbySecurity
> = z.object({
    playerAuth: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLobbySecurity$ {
    /** @deprecated use `CreateLobbySecurity$inboundSchema` instead. */
    export const inboundSchema = CreateLobbySecurity$inboundSchema;
    /** @deprecated use `CreateLobbySecurity$outboundSchema` instead. */
    export const outboundSchema = CreateLobbySecurity$outboundSchema;
    /** @deprecated use `CreateLobbySecurity$Outbound` instead. */
    export type Outbound = CreateLobbySecurity$Outbound;
}

/** @internal */
export const CreateLobbyRequest$inboundSchema: z.ZodType<
    CreateLobbyRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        appId: z.string().optional(),
        shortCode: z.string().optional(),
        roomId: z.string().optional(),
        CreateLobbyV3Params: components.CreateLobbyV3Params$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            CreateLobbyV3Params: "createLobbyV3Params",
        });
    });

/** @internal */
export type CreateLobbyRequest$Outbound = {
    appId?: string | undefined;
    shortCode?: string | undefined;
    roomId?: string | undefined;
    CreateLobbyV3Params: components.CreateLobbyV3Params$Outbound;
};

/** @internal */
export const CreateLobbyRequest$outboundSchema: z.ZodType<
    CreateLobbyRequest$Outbound,
    z.ZodTypeDef,
    CreateLobbyRequest
> = z
    .object({
        appId: z.string().optional(),
        shortCode: z.string().optional(),
        roomId: z.string().optional(),
        createLobbyV3Params: components.CreateLobbyV3Params$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            createLobbyV3Params: "CreateLobbyV3Params",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLobbyRequest$ {
    /** @deprecated use `CreateLobbyRequest$inboundSchema` instead. */
    export const inboundSchema = CreateLobbyRequest$inboundSchema;
    /** @deprecated use `CreateLobbyRequest$outboundSchema` instead. */
    export const outboundSchema = CreateLobbyRequest$outboundSchema;
    /** @deprecated use `CreateLobbyRequest$Outbound` instead. */
    export type Outbound = CreateLobbyRequest$Outbound;
}
