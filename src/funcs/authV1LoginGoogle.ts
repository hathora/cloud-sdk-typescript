/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HathoraCloudCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Returns a unique player token using a Google-signed OIDC `idToken`.
 */
export async function authV1LoginGoogle(
    client$: HathoraCloudCore,
    googleIdTokenObject: components.GoogleIdTokenObject,
    appId?: string | undefined,
    options?: RequestOptions
): Promise<
    Result<
        components.PlayerTokenObject,
        | errors.ApiError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.LoginGoogleRequest = {
        appId: appId,
        googleIdTokenObject: googleIdTokenObject,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.LoginGoogleRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.GoogleIdTokenObject, { explode: true });

    const pathParams$ = {
        appId: encodeSimple$("appId", payload$.appId ?? client$.options$.appId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/auth/v1/{appId}/login/google")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const context = { operationID: "LoginGoogle", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["401", "404", "429", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        components.PlayerTokenObject,
        | errors.ApiError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, components.PlayerTokenObject$inboundSchema),
        m$.jsonErr([401, 404, 429], errors.ApiError$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
