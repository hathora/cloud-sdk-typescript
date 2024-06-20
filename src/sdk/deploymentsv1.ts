/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class DeploymentsV1 extends ClientSDK {
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
     * Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getDeploymentsDeprecated(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<components.Deployment>> {
        const input$: operations.GetDeploymentsDeprecatedRequest = {
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDeploymentsDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v1/{appId}/list")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetDeploymentsDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "429", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.Deployment>>()
            .json(200, z.array(components.Deployment$.inboundSchema))
            .json([401, 404, 429], errors.ApiError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getLatestDeploymentDeprecated(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Deployment> {
        const input$: operations.GetLatestDeploymentDeprecatedRequest = {
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetLatestDeploymentDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v1/{appId}/latest")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetLatestDeploymentDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "429", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Deployment>()
            .json(200, components.Deployment$)
            .json([401, 404, 429], errors.ApiError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getDeploymentInfoDeprecated(
        deploymentId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Deployment> {
        const input$: operations.GetDeploymentInfoDeprecatedRequest = {
            appId: appId,
            deploymentId: deploymentId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDeploymentInfoDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            deploymentId: encodeSimple$("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v1/{appId}/info/{deploymentId}")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetDeploymentInfoDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "429", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Deployment>()
            .json(200, components.Deployment$)
            .json([401, 404, 429], errors.ApiError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createDeploymentDeprecated(
        buildId: number,
        deploymentConfig: components.DeploymentConfig,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Deployment> {
        const input$: operations.CreateDeploymentDeprecatedRequest = {
            appId: appId,
            buildId: buildId,
            deploymentConfig: deploymentConfig,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateDeploymentDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.DeploymentConfig, { explode: true });

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: encodeSimple$("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v1/{appId}/create/{buildId}")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateDeploymentDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "404", "422", "429", "4XX", "500", "5XX"],
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
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Deployment>()
            .json(201, components.Deployment$)
            .json([400, 401, 404, 422, 429, 500], errors.ApiError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
