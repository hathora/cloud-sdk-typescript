/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { processesV1GetProcessInfoDeprecated } from "../funcs/processesV1GetProcessInfoDeprecated.js";
import { processesV1GetRunningProcesses } from "../funcs/processesV1GetRunningProcesses.js";
import { processesV1GetStoppedProcesses } from "../funcs/processesV1GetStoppedProcesses.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ProcessesV1 extends ClientSDK {
  /**
   * GetRunningProcesses
   *
   * @remarks
   * Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getRunningProcesses(
    appId?: string | undefined,
    region?: components.Region | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.ProcessWithRooms>> {
    return unwrapAsync(processesV1GetRunningProcesses(
      this,
      appId,
      region,
      options,
    ));
  }

  /**
   * GetStoppedProcesses
   *
   * @remarks
   * Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getStoppedProcesses(
    appId?: string | undefined,
    region?: components.Region | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.Process>> {
    return unwrapAsync(processesV1GetStoppedProcesses(
      this,
      appId,
      region,
      options,
    ));
  }

  /**
   * GetProcessInfoDeprecated
   *
   * @remarks
   * Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getProcessInfoDeprecated(
    processId: string,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.Process> {
    return unwrapAsync(processesV1GetProcessInfoDeprecated(
      this,
      processId,
      appId,
      options,
    ));
  }
}
