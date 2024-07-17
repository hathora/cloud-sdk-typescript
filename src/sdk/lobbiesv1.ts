/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
import { SecurityInput } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class LobbiesV1 extends ClientSDK {
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
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createPrivateLobbyDeprecated(
        security: operations.CreatePrivateLobbyDeprecatedSecurity,
        appId?: string | undefined,
        region?: components.Region | undefined,
        local?: boolean | undefined,
        options?: RequestOptions
    ): Promise<string> {
        const input$: operations.CreatePrivateLobbyDeprecatedRequest = {
            appId: appId,
            region: region,
            local: local,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreatePrivateLobbyDeprecatedRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v1/{appId}/create/private")(pathParams$);

        const query$ = encodeFormQuery$({
            local: payload$.local,
            region: payload$.region,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.playerAuth,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "CreatePrivateLobbyDeprecated",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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
            errorCodes: ["400", "401", "402", "404", "422", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<string>()
            .json(200, z.string())
            .json([400, 401, 402, 404, 422, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createPublicLobbyDeprecated(
        security: operations.CreatePublicLobbyDeprecatedSecurity,
        appId?: string | undefined,
        region?: components.Region | undefined,
        local?: boolean | undefined,
        options?: RequestOptions
    ): Promise<string> {
        const input$: operations.CreatePublicLobbyDeprecatedRequest = {
            appId: appId,
            region: region,
            local: local,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreatePublicLobbyDeprecatedRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v1/{appId}/create/public")(pathParams$);

        const query$ = encodeFormQuery$({
            local: payload$.local,
            region: payload$.region,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.playerAuth,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "CreatePublicLobbyDeprecated",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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
            errorCodes: ["400", "401", "402", "404", "422", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<string>()
            .json(200, z.string())
            .json([400, 401, 402, 404, 422, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async listActivePublicLobbiesDeprecatedV1(
        appId?: string | undefined,
        local?: boolean | undefined,
        region?: components.Region | undefined,
        options?: RequestOptions
    ): Promise<Array<components.Lobby>> {
        const input$: operations.ListActivePublicLobbiesDeprecatedV1Request = {
            appId: appId,
            local: local,
            region: region,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.ListActivePublicLobbiesDeprecatedV1Request$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v1/{appId}/list")(pathParams$);

        const query$ = encodeFormQuery$({
            local: payload$.local,
            region: payload$.region,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const context = {
            operationID: "ListActivePublicLobbiesDeprecatedV1",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const request$ = this.createRequest$(
            context,
            {
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
            errorCodes: ["404", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.Lobby>>()
            .json(200, z.array(components.Lobby$inboundSchema))
            .json([404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
