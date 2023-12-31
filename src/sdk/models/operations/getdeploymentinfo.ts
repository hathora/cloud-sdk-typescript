/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetDeploymentInfoRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deploymentId" })
    deploymentId: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId?: string;
}

export class GetDeploymentInfoResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata()
    deployment?: shared.Deployment;

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
