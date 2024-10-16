/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { fleetsV1GetFleetMetrics } from "../funcs/fleetsV1GetFleetMetrics.js";
import { fleetsV1GetFleetRegion } from "../funcs/fleetsV1GetFleetRegion.js";
import { fleetsV1GetFleets } from "../funcs/fleetsV1GetFleets.js";
import { fleetsV1UpdateFleetRegion } from "../funcs/fleetsV1UpdateFleetRegion.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class FleetsV1 extends ClientSDK {
  /**
   * Returns an array of [fleets](https://hathora.dev/docs/concepts/hathora-entities#fleet).
   */
  async getFleets(
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.FleetsPage> {
    return unwrapAsync(fleetsV1GetFleets(
      this,
      orgId,
      options,
    ));
  }

  /**
   * Gets the configuration for a given [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.
   */
  async getFleetRegion(
    fleetId: string,
    region: components.Region,
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.FleetRegion> {
    return unwrapAsync(fleetsV1GetFleetRegion(
      this,
      fleetId,
      region,
      orgId,
      options,
    ));
  }

  /**
   * Updates the configuration for a given [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.
   */
  async updateFleetRegion(
    fleetRegionConfig: components.FleetRegionConfig,
    fleetId: string,
    region: components.Region,
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(fleetsV1UpdateFleetRegion(
      this,
      fleetRegionConfig,
      fleetId,
      region,
      orgId,
      options,
    ));
  }

  /**
   * Gets metrics for a [fleet](https://hathora.dev/docs/concepts/hathora-entities#fleet) in a region.
   */
  async getFleetMetrics(
    request: operations.GetFleetMetricsRequest,
    options?: RequestOptions,
  ): Promise<components.FleetMetricsData> {
    return unwrapAsync(fleetsV1GetFleetMetrics(
      this,
      request,
      options,
    ));
  }
}