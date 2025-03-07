/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { roomsV2CreateRoom } from "../funcs/roomsV2CreateRoom.js";
import { roomsV2DestroyRoom } from "../funcs/roomsV2DestroyRoom.js";
import { roomsV2GetActiveRoomsForProcess } from "../funcs/roomsV2GetActiveRoomsForProcess.js";
import { roomsV2GetConnectionInfo } from "../funcs/roomsV2GetConnectionInfo.js";
import { roomsV2GetInactiveRoomsForProcess } from "../funcs/roomsV2GetInactiveRoomsForProcess.js";
import { roomsV2GetRoomInfo } from "../funcs/roomsV2GetRoomInfo.js";
import { roomsV2ResumeRoom } from "../funcs/roomsV2ResumeRoom.js";
import { roomsV2SuspendRoomV2Deprecated } from "../funcs/roomsV2SuspendRoomV2Deprecated.js";
import { roomsV2UpdateRoomConfig } from "../funcs/roomsV2UpdateRoomConfig.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class RoomsV2 extends ClientSDK {
  /**
   * CreateRoom
   *
   * @remarks
   * Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application). Poll the [`GetConnectionInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetConnectionInfo) endpoint to get connection details for an active room.
   */
  async createRoom(
    createRoomParams: components.CreateRoomParams,
    appId?: string | undefined,
    roomId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.RoomConnectionData> {
    return unwrapAsync(roomsV2CreateRoom(
      this,
      createRoomParams,
      appId,
      roomId,
      options,
    ));
  }

  /**
   * GetRoomInfo
   *
   * @remarks
   * Retreive current and historical allocation data for a [room](https://hathora.dev/docs/concepts/hathora-entities#room).
   */
  async getRoomInfo(
    roomId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Room> {
    return unwrapAsync(roomsV2GetRoomInfo(
      this,
      roomId,
      appId,
      options,
    ));
  }

  /**
   * GetActiveRoomsForProcess
   *
   * @remarks
   * Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
   */
  async getActiveRoomsForProcess(
    processId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.RoomWithoutAllocations>> {
    return unwrapAsync(roomsV2GetActiveRoomsForProcess(
      this,
      processId,
      appId,
      options,
    ));
  }

  /**
   * GetInactiveRoomsForProcess
   *
   * @remarks
   * Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
   */
  async getInactiveRoomsForProcess(
    processId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.RoomWithoutAllocations>> {
    return unwrapAsync(roomsV2GetInactiveRoomsForProcess(
      this,
      processId,
      appId,
      options,
    ));
  }

  /**
   * DestroyRoom
   *
   * @remarks
   * Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room). All associated metadata is deleted.
   */
  async destroyRoom(
    roomId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(roomsV2DestroyRoom(
      this,
      roomId,
      appId,
      options,
    ));
  }

  /**
   * SuspendRoomV2Deprecated
   *
   * @remarks
   * Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room). The room is unallocated from the process but can be rescheduled later using the same `roomId`.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async suspendRoomV2Deprecated(
    roomId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(roomsV2SuspendRoomV2Deprecated(
      this,
      roomId,
      appId,
      options,
    ));
  }

  /**
   * GetConnectionInfo
   *
   * @remarks
   * Poll this endpoint to get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room). Clients can call this endpoint without authentication.
   */
  async getConnectionInfo(
    roomId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.ConnectionInfoV2> {
    return unwrapAsync(roomsV2GetConnectionInfo(
      this,
      roomId,
      appId,
      options,
    ));
  }

  /**
   * UpdateRoomConfig
   */
  async updateRoomConfig(
    roomId: string,
    updateRoomConfigParams: components.UpdateRoomConfigParams,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(roomsV2UpdateRoomConfig(
      this,
      roomId,
      updateRoomConfigParams,
      appId,
      options,
    ));
  }

  /**
   * ResumeRoom
   */
  async resumeRoom(
    roomId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.RoomAllocationData> {
    return unwrapAsync(roomsV2ResumeRoom(
      this,
      roomId,
      appId,
      options,
    ));
  }
}
