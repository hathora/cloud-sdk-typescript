/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { HathoraCloudCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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
import { Result } from "../types/fp.js";

/**
 * Download entire log file for a stopped process.
 */
export async function logsV1DownloadLogForProcess(
  client: HathoraCloudCore,
  processId: string,
  appId?: string | undefined,
  options?: RequestOptions,
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
  const input: operations.DownloadLogForProcessRequest = {
    processId: processId,
    appId: appId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.DownloadLogForProcessRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    appId: encodeSimple("appId", payload.appId ?? client._options.appId, {
      explode: false,
      charEncoding: "percent",
    }),
    processId: encodeSimple("processId", payload.processId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/logs/v1/{appId}/process/{processId}/download")(
    pathParams,
  );

  const headers = new Headers({
    Accept: "application/octet-stream",
  });

  const secConfig = await extractSecurity(client._options.hathoraDevToken);
  const securityInput = secConfig == null ? {} : { hathoraDevToken: secConfig };
  const context = {
    operationID: "DownloadLogForProcess",
    oAuth2Scopes: [],
    securitySource: client._options.hathoraDevToken,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
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
    errorCodes: ["400", "401", "404", "410", "429", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
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
    M.stream(200, z.instanceof(ReadableStream<Uint8Array>)),
    M.jsonErr([400, 401, 404, 410, 429], errors.ApiError$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
