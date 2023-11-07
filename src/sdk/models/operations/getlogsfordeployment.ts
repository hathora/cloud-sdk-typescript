/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetLogsForDeploymentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deploymentId" })
    deploymentId: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=follow" })
    follow?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tailLines" })
    tailLines?: number;
}

export class GetLogsForDeploymentResponse extends SpeakeasyBase {
    /**
     * Ok
     */
    @SpeakeasyMetadata()
    twoHundredTextPlainRes?: string;

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
