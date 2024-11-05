/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lobbiesV1CreatePrivateLobbyDeprecated } from "../funcs/lobbiesV1CreatePrivateLobbyDeprecated.js";
import { lobbiesV1CreatePublicLobbyDeprecated } from "../funcs/lobbiesV1CreatePublicLobbyDeprecated.js";
import { lobbiesV1ListActivePublicLobbiesDeprecatedV1 } from "../funcs/lobbiesV1ListActivePublicLobbiesDeprecatedV1.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class LobbiesV1 extends ClientSDK {
  /**
   * CreatePrivateLobbyDeprecated
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createPrivateLobbyDeprecated(
    security: operations.CreatePrivateLobbyDeprecatedSecurity,
    appId?: string | undefined,
    region?: components.Region | undefined,
    local?: boolean | undefined,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(lobbiesV1CreatePrivateLobbyDeprecated(
      this,
      security,
      appId,
      region,
      local,
      options,
    ));
  }

  /**
   * CreatePublicLobbyDeprecated
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createPublicLobbyDeprecated(
    security: operations.CreatePublicLobbyDeprecatedSecurity,
    appId?: string | undefined,
    region?: components.Region | undefined,
    local?: boolean | undefined,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(lobbiesV1CreatePublicLobbyDeprecated(
      this,
      security,
      appId,
      region,
      local,
      options,
    ));
  }

  /**
   * ListActivePublicLobbiesDeprecatedV1
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listActivePublicLobbiesDeprecatedV1(
    appId?: string | undefined,
    local?: boolean | undefined,
    region?: components.Region | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.Lobby>> {
    return unwrapAsync(lobbiesV1ListActivePublicLobbiesDeprecatedV1(
      this,
      appId,
      local,
      region,
      options,
    ));
  }
}
