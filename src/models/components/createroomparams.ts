/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Region,
  Region$inboundSchema,
  Region$outboundSchema,
} from "./region.js";

export type CreateRoomParams = {
  clientIPs?: Array<string> | undefined;
  /**
   * Optional configuration parameters for the room. Can be any string including stringified JSON. It is accessible from the room via [`GetRoomInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetRoomInfo).
   */
  roomConfig?: string | undefined;
  region: Region;
};

/** @internal */
export const CreateRoomParams$inboundSchema: z.ZodType<
  CreateRoomParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientIPs: z.array(z.string()).optional(),
  roomConfig: z.string().optional(),
  region: Region$inboundSchema,
});

/** @internal */
export type CreateRoomParams$Outbound = {
  clientIPs?: Array<string> | undefined;
  roomConfig?: string | undefined;
  region: string;
};

/** @internal */
export const CreateRoomParams$outboundSchema: z.ZodType<
  CreateRoomParams$Outbound,
  z.ZodTypeDef,
  CreateRoomParams
> = z.object({
  clientIPs: z.array(z.string()).optional(),
  roomConfig: z.string().optional(),
  region: Region$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRoomParams$ {
  /** @deprecated use `CreateRoomParams$inboundSchema` instead. */
  export const inboundSchema = CreateRoomParams$inboundSchema;
  /** @deprecated use `CreateRoomParams$outboundSchema` instead. */
  export const outboundSchema = CreateRoomParams$outboundSchema;
  /** @deprecated use `CreateRoomParams$Outbound` instead. */
  export type Outbound = CreateRoomParams$Outbound;
}
