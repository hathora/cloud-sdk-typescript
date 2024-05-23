/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum RoomReadyStatus {
    Active = "active",
    Starting = "starting",
}

/** @internal */
export namespace RoomReadyStatus$ {
    export const inboundSchema = z.nativeEnum(RoomReadyStatus);
    export const outboundSchema = inboundSchema;
}