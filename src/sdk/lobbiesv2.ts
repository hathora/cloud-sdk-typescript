/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lobbiesV2CreateLobbyDeprecated } from "../funcs/lobbiesV2CreateLobbyDeprecated.js";
import { lobbiesV2CreateLocalLobby } from "../funcs/lobbiesV2CreateLocalLobby.js";
import { lobbiesV2CreatePrivateLobby } from "../funcs/lobbiesV2CreatePrivateLobby.js";
import { lobbiesV2CreatePublicLobby } from "../funcs/lobbiesV2CreatePublicLobby.js";
import { lobbiesV2GetLobbyInfo } from "../funcs/lobbiesV2GetLobbyInfo.js";
import { lobbiesV2ListActivePublicLobbiesDeprecatedV2 } from "../funcs/lobbiesV2ListActivePublicLobbiesDeprecatedV2.js";
import { lobbiesV2SetLobbyState } from "../funcs/lobbiesV2SetLobbyState.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class LobbiesV2 extends ClientSDK {
  /**
   * CreatePrivateLobby
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createPrivateLobby(
    security: operations.CreatePrivateLobbySecurity,
    requestBody: operations.CreatePrivateLobbyRequestBody,
    appId?: string | undefined,
    roomId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Lobby> {
    return unwrapAsync(lobbiesV2CreatePrivateLobby(
      this,
      security,
      requestBody,
      appId,
      roomId,
      options,
    ));
  }

  /**
   * CreatePublicLobby
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createPublicLobby(
    security: operations.CreatePublicLobbySecurity,
    requestBody: operations.CreatePublicLobbyRequestBody,
    appId?: string | undefined,
    roomId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Lobby> {
    return unwrapAsync(lobbiesV2CreatePublicLobby(
      this,
      security,
      requestBody,
      appId,
      roomId,
      options,
    ));
  }

  /**
   * CreateLocalLobby
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createLocalLobby(
    security: operations.CreateLocalLobbySecurity,
    requestBody: operations.CreateLocalLobbyRequestBody,
    appId?: string | undefined,
    roomId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Lobby> {
    return unwrapAsync(lobbiesV2CreateLocalLobby(
      this,
      security,
      requestBody,
      appId,
      roomId,
      options,
    ));
  }

  /**
   * CreateLobbyDeprecated
   *
   * @remarks
   * Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createLobbyDeprecated(
    security: operations.CreateLobbyDeprecatedSecurity,
    createLobbyParams: components.CreateLobbyParams,
    appId?: string | undefined,
    roomId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Lobby> {
    return unwrapAsync(lobbiesV2CreateLobbyDeprecated(
      this,
      security,
      createLobbyParams,
      appId,
      roomId,
      options,
    ));
  }

  /**
   * ListActivePublicLobbiesDeprecatedV2
   *
   * @remarks
   * Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listActivePublicLobbiesDeprecatedV2(
    appId?: string | undefined,
    region?: components.Region | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.Lobby>> {
    return unwrapAsync(lobbiesV2ListActivePublicLobbiesDeprecatedV2(
      this,
      appId,
      region,
      options,
    ));
  }

  /**
   * GetLobbyInfo
   *
   * @remarks
   * Get details for a lobby.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getLobbyInfo(
    roomId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Lobby> {
    return unwrapAsync(lobbiesV2GetLobbyInfo(
      this,
      roomId,
      appId,
      options,
    ));
  }

  /**
   * SetLobbyState
   *
   * @remarks
   * Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async setLobbyState(
    roomId: string,
    setLobbyStateParams: components.SetLobbyStateParams,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Lobby> {
    return unwrapAsync(lobbiesV2SetLobbyState(
      this,
      roomId,
      setLobbyStateParams,
      appId,
      options,
    ));
  }
}
