/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class CreateRoomRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createRoomParams: shared.CreateRoomParams;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roomId" })
    roomId?: string;
}

export class CreateRoomResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    connectionInfoV2?: shared.ConnectionInfoV2;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
