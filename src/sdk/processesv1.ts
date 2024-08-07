/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class ProcessesV1 extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getRunningProcesses(
        appId?: string | undefined,
        region?: components.Region | undefined,
        options?: RequestOptions
    ): Promise<Array<components.ProcessWithRooms>> {
        const input$: operations.GetRunningProcessesRequest = {
            appId: appId,
            region: region,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetRunningProcessesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v1/{appId}/list/running")(pathParams$);

        const query$ = encodeFormQuery$({
            region: payload$.region,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetRunningProcesses",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.ProcessWithRooms>>()
            .json(200, z.array(components.ProcessWithRooms$inboundSchema))
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getStoppedProcesses(
        appId?: string | undefined,
        region?: components.Region | undefined,
        options?: RequestOptions
    ): Promise<Array<components.Process>> {
        const input$: operations.GetStoppedProcessesRequest = {
            appId: appId,
            region: region,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetStoppedProcessesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v1/{appId}/list/stopped")(pathParams$);

        const query$ = encodeFormQuery$({
            region: payload$.region,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetStoppedProcesses",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.Process>>()
            .json(200, z.array(components.Process$inboundSchema))
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getProcessInfoDeprecated(
        processId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Process> {
        const input$: operations.GetProcessInfoDeprecatedRequest = {
            appId: appId,
            processId: processId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetProcessInfoDeprecatedRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            processId: encodeSimple$("processId", payload$.processId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v1/{appId}/info/{processId}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetProcessInfoDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Process>()
            .json(200, components.Process$inboundSchema)
            .json([401, 404, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
