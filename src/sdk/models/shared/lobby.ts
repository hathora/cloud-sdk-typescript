/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LobbyInitialConfig } from "./lobbyinitialconfig";
import { LobbyVisibility } from "./lobbyvisibility";
import { Region } from "./region";
import { Expose, Transform, Type } from "class-transformer";

/**
 * JSON blob to store metadata for a room. Must be smaller than 1MB.
 */
export class State extends SpeakeasyBase {}

/**
 * A lobby object allows you to store and manage metadata for your rooms.
 */
export class Lobby extends SpeakeasyBase {
    /**
     * System generated unique identifier for an application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId: string;

    /**
     * When the lobby was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Email address for the user that created the lobby.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdBy" })
    createdBy: string;

    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initialConfig" })
    @Type(() => LobbyInitialConfig)
    initialConfig: LobbyInitialConfig;

    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "local" })
    local: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: Region;

    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomId" })
    roomId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "shortCode" })
    shortCode: string;

    /**
     * JSON blob to store metadata for a room. Must be smaller than 1MB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    @Type(() => State)
    state?: State;

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
