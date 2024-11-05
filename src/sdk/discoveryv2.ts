/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { discoveryV2GetPingServiceEndpoints } from "../funcs/discoveryV2GetPingServiceEndpoints.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DiscoveryV2 extends ClientSDK {
  /**
   * GetPingServiceEndpoints
   *
   * @remarks
   * Returns an array of all regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back.
   */
  async getPingServiceEndpoints(
    options?: RequestOptions,
  ): Promise<Array<components.PingEndpoints>> {
    return unwrapAsync(discoveryV2GetPingServiceEndpoints(
      this,
      options,
    ));
  }
}
