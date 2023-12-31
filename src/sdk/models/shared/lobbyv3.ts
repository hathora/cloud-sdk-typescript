/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LobbyVisibility } from "./lobbyvisibility";
import { Region } from "./region";
import { Expose, Transform } from "class-transformer";

/**
 * A lobby object allows you to store and manage metadata for your rooms.
 */
export class LobbyV3 extends SpeakeasyBase {
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

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: Region;

    @SpeakeasyMetadata()
    @Expose({ name: "roomConfig" })
    roomConfig: string;

    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomId" })
    roomId: string;

    /**
     * User-defined identifier for a lobby.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shortCode" })
    shortCode: string;

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
