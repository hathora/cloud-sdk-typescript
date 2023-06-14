/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Service that allows clients to directly ping all Hathora regions to get latency information
 */
export class DiscoveryV1 {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Returns an array of all regions with a host and port that a client can directly ping.
     */
    async getPingServiceEndpoints(
        config?: AxiosRequestConfig
    ): Promise<operations.GetPingServiceEndpointsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/discovery/v1/ping";

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetPingServiceEndpointsResponse =
            new operations.GetPingServiceEndpointsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.discoveryResponse = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.discoveryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DiscoveryResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }
}
