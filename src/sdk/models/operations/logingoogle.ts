/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class LoginGoogleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    loginGoogleRequest: shared.LoginGoogleRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;
}

export class LoginGoogleResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    loginGoogle401ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    loginGoogle404ApplicationJSONString?: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata()
    loginResponse?: shared.LoginResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}