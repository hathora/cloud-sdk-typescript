/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HathoraCloudCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
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
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function roomsV1GetConnectionInfoDeprecated(
  client: HathoraCloudCore,
  roomId: string,
  appId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    components.ConnectionInfo,
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
  const input: operations.GetConnectionInfoDeprecatedRequest = {
    roomId: roomId,
    appId: appId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.GetConnectionInfoDeprecatedRequest$outboundSchema.parse(value),
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
    roomId: encodeSimple("roomId", payload.roomId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/rooms/v1/{appId}/connectioninfo/{roomId}")(
    pathParams,
  );

  const headers = new Headers({
    Accept: "application/json",
  });

  const context = {
    operationID: "GetConnectionInfoDeprecated",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client._createRequest(context, {
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
    errorCodes: ["400", "402", "404", "429", "4XX", "500", "5XX"],
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
    components.ConnectionInfo,
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.ConnectionInfo$inboundSchema),
    M.jsonErr([400, 402, 404, 429, 500], errors.ApiError$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
