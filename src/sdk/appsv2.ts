/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appsV2CreateApp } from "../funcs/appsV2CreateApp.js";
import { appsV2DeleteApp } from "../funcs/appsV2DeleteApp.js";
import { appsV2GetApp } from "../funcs/appsV2GetApp.js";
import { appsV2GetApps } from "../funcs/appsV2GetApps.js";
import { appsV2UpdateApp } from "../funcs/appsV2UpdateApp.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AppsV2 extends ClientSDK {
    /**
     * Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
     */
    async getApps(
        orgId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.ApplicationsPage> {
        return unwrapAsync(appsV2GetApps(this, orgId, options));
    }

    /**
     * Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async createApp(
        appConfig: components.AppConfig,
        orgId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Application> {
        return unwrapAsync(appsV2CreateApp(this, appConfig, orgId, options));
    }

    /**
     * Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
     */
    async updateApp(
        appConfig: components.AppConfig,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Application> {
        return unwrapAsync(appsV2UpdateApp(this, appConfig, appId, options));
    }

    /**
     * Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
     */
    async getApp(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Application> {
        return unwrapAsync(appsV2GetApp(this, appId, options));
    }

    /**
     * Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.
     */
    async deleteApp(appId?: string | undefined, options?: RequestOptions): Promise<void> {
        return unwrapAsync(appsV2DeleteApp(this, appId, options));
    }
}
