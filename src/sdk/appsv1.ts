/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appsV1CreateApp } from "../funcs/appsV1CreateApp.js";
import { appsV1DeleteApp } from "../funcs/appsV1DeleteApp.js";
import { appsV1GetAppInfo } from "../funcs/appsV1GetAppInfo.js";
import { appsV1GetApps } from "../funcs/appsV1GetApps.js";
import { appsV1UpdateApp } from "../funcs/appsV1UpdateApp.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AppsV1 extends ClientSDK {
    /**
     * Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
     */
    async getApps(
        options?: RequestOptions
    ): Promise<Array<components.ApplicationWithLatestDeploymentAndBuild>> {
        return unwrapAsync(appsV1GetApps(this, options));
    }

    /**
     * Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async createApp(
        request: components.AppConfig,
        options?: RequestOptions
    ): Promise<components.Application> {
        return unwrapAsync(appsV1CreateApp(this, request, options));
    }

    /**
     * Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
     */
    async updateApp(
        appConfig: components.AppConfig,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Application> {
        return unwrapAsync(appsV1UpdateApp(this, appConfig, appId, options));
    }

    /**
     * Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
     */
    async getAppInfo(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Application> {
        return unwrapAsync(appsV1GetAppInfo(this, appId, options));
    }

    /**
     * Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.
     */
    async deleteApp(appId?: string | undefined, options?: RequestOptions): Promise<void> {
        return unwrapAsync(appsV1DeleteApp(this, appId, options));
    }
}
