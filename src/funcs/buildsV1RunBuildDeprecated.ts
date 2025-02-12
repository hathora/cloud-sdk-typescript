/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { HathoraCloudCore } from "../core.js";
import { appendForm, encodeSimple } from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
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
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * RunBuildDeprecated
 *
 * @remarks
 * Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function buildsV1RunBuildDeprecated(
  client: HathoraCloudCore,
  requestBody: operations.RunBuildDeprecatedRequestBody,
  buildId: number,
  appId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    string,
    | errors.ApiError
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
  const input: operations.RunBuildDeprecatedRequest = {
    requestBody: requestBody,
    buildId: buildId,
    appId: appId,
  };

  const parsed = safeParse(
    input,
    (value) => operations.RunBuildDeprecatedRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.RequestBody.file)) {
    appendForm(body, "file", payload.RequestBody.file);
  } else if (isReadableStream(payload.RequestBody.file.content)) {
    const buffer = await readableStreamToArrayBuffer(
      payload.RequestBody.file.content,
    );
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    appendForm(body, "file", blob);
  } else {
    appendForm(
      body,
      "file",
      new Blob([payload.RequestBody.file.content], {
        type: "application/octet-stream",
      }),
      payload.RequestBody.file.fileName,
    );
  }

  const pathParams = {
    appId: encodeSimple("appId", payload.appId ?? client._options.appId, {
      explode: false,
      charEncoding: "percent",
    }),
    buildId: encodeSimple("buildId", payload.buildId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/builds/v1/{appId}/run/{buildId}")(pathParams);

  const headers = new Headers(compactMap({
    Accept: "text/plain",
  }));

  const secConfig = await extractSecurity(client._options.hathoraDevToken);
  const securityInput = secConfig == null ? {} : { hathoraDevToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "RunBuildDeprecated",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.hathoraDevToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "404", "429", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    string,
    | errors.ApiError
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.text(200, z.string()),
    M.jsonErr([400, 401, 404, 429], errors.ApiError$inboundSchema),
    M.jsonErr(500, errors.ApiError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
