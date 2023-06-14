/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RecordStringNever } from "./recordstringnever";
import { Expose, Transform, Type } from "class-transformer";

export class ApplicationAuthConfigurationGoogle extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;
}

/**
 * Used to authenticate player requests. Use your own authentication or Hathora's Auth Client.
 */
export class ApplicationAuthConfiguration extends SpeakeasyBase {
    /**
     * Construct a type with a set of properties K of type T
     */
    @SpeakeasyMetadata()
    @Expose({ name: "anonymous" })
    @Type(() => RecordStringNever)
    anonymous?: RecordStringNever;

    @SpeakeasyMetadata()
    @Expose({ name: "google" })
    @Type(() => ApplicationAuthConfigurationGoogle)
    google?: ApplicationAuthConfigurationGoogle;

    /**
     * Construct a type with a set of properties K of type T
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nickname" })
    @Type(() => RecordStringNever)
    nickname?: RecordStringNever;
}

/**
 * An application object is the top level namespace for the game server.
 */
export class Application extends SpeakeasyBase {
    /**
     * System generated unique identifier for an application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId: string;

    /**
     * Readable name for an application. Must be unique within an organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appName" })
    appName: string;

    /**
     * Secret that is used for identity and access management.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appSecret" })
    appSecret: string;

    /**
     * Used to authenticate player requests. Use your own authentication or Hathora's Auth Client.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authConfiguration" })
    @Type(() => ApplicationAuthConfiguration)
    authConfiguration: ApplicationAuthConfiguration;

    /**
     * When the application was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Email address for the user that deleted the application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdBy" })
    createdBy: string;

    /**
     * When the application was deleted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt: Date;

    /**
     * Email address for the user that deleted the application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deletedBy" })
    deletedBy: string;

    /**
     * System generated unique identifier for an organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "orgId" })
    orgId: string;
}