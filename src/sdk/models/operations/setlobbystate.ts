/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SetLobbyStateSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    auth0: string;
}

export class SetLobbyStateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    setLobbyStateRequest: shared.SetLobbyStateRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
    roomId: string;
}

export class SetLobbyStateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata()
    lobby?: shared.Lobby;

    @SpeakeasyMetadata()
    setLobbyState404ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    setLobbyState422ApplicationJSONString?: string;
}