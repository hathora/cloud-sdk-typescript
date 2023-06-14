/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateRoomSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    auth0: string;
}

export class CreateRoomRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createRoomRequest: shared.CreateRoomRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roomId" })
    roomId?: string;
}

export class CreateRoomResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    connectionInfoV2?: shared.ConnectionInfoV2;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createRoom400ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createRoom403ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createRoom404ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createRoom500ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}