/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LobbyInitialConfig } from "./lobbyinitialconfig";
import { LobbyVisibility } from "./lobbyvisibility";
import { Region } from "./region";
import { Expose, Type } from "class-transformer";

export class CreateLobbyRequest extends SpeakeasyBase {
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initialConfig" })
    @Type(() => LobbyInitialConfig)
    initialConfig: LobbyInitialConfig;

    /**
     * Available regions to request a game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: Region;

    /**
     * Types of lobbies a player can create.
     *
     * @remarks
     *
     * `private`: the player who created the room must share the roomId with their friends
     *
     * `public`: visible in the public lobby list, anyone can join
     *
     * `local`: for testing with a server running locally
     */
    @SpeakeasyMetadata()
    @Expose({ name: "visibility" })
    visibility: LobbyVisibility;
}