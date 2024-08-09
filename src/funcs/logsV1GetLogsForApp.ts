/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HathoraCloudCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
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
import * as z from "zod";

/**
 * Returns a stream of logs for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function logsV1GetLogsForApp(
    client$: HathoraCloudCore,
    appId?: string | undefined,
    follow?: boolean | undefined,
    tailLines?: number | undefined,
    region?: components.Region | undefined,
    options?: RequestOptions
): Promise<
    Result<
        ReadableStream<Uint8Array>,
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
    const input$: operations.GetLogsForAppRequest = {
        appId: appId,
        follow: follow,
        tailLines: tailLines,
        region: region,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetLogsForAppRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        appId: encodeSimple$("appId", payload$.appId ?? client$.options$.appId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/logs/v1/{appId}/all")(pathParams$);

    const query$ = encodeFormQuery$({
        follow: payload$.follow,
        region: payload$.region,
        tailLines: payload$.tailLines,
    });

    const headers$ = new Headers({
        Accept: "application/octet-stream",
    });

    const hathoraDevToken$ = await extractSecurity(client$.options$.hathoraDevToken);
    const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
    const context = {
        operationID: "GetLogsForApp",
        oAuth2Scopes: [],
        securitySource: client$.options$.hathoraDevToken,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
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
        ReadableStream<Uint8Array>,
        | errors.ApiError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.stream(200, z.instanceof(ReadableStream<Uint8Array>)),
        m$.jsonErr([401, 404, 429], errors.ApiError$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
