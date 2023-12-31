/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetMetricsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId?: string;

    /**
     * Unix timestamp. Default is current time.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
    end?: number;

    /**
     * Available metrics to query over time.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" })
    metrics?: shared.MetricName[];

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=processId" })
    processId: string;

    /**
     * Unix timestamp. Default is -1 hour from `end`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
    start?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=step" })
    step?: number;
}

export class GetMetricsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata()
    metricsResponse?: shared.MetricsResponse;

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
