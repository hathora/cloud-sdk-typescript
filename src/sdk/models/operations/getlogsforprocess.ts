/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetLogsForProcessSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    auth0: string;
}

export class GetLogsForProcessRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=follow" })
    follow?: boolean;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=processId" })
    processId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tailLines" })
    tailLines?: number;
}

export class GetLogsForProcessResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata()
    getLogsForProcess200TextPlainByteString?: string;

    @SpeakeasyMetadata()
    getLogsForProcess404ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}