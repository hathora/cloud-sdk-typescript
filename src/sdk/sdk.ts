/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppV1 } from "./appv1";
import { AuthV1 } from "./authv1";
import { BillingV1 } from "./billingv1";
import { BuildV1 } from "./buildv1";
import { DeploymentV1 } from "./deploymentv1";
import { DiscoveryV1 } from "./discoveryv1";
import { LobbyV1 } from "./lobbyv1";
import { LobbyV2 } from "./lobbyv2";
import { LogV1 } from "./logv1";
import { ManagementV1 } from "./managementv1";
import { MetricsV1 } from "./metricsv1";
import { ProcessesV1 } from "./processesv1";
import { RoomV1 } from "./roomv1";
import { RoomV2 } from "./roomv2";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.hathora.dev", "/"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.0.1";
    sdkVersion = "1.21.2";
    genVersion = "2.93.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Hathora Cloud API: Welcome to the Hathora Cloud API documentation! Learn how to use the Hathora Cloud APIs to build and scale your game servers globally.
 */
export class HathoraCloud {
    /**
     * Operations that allow you manage your [applications](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    public appV1: AppV1;
    /**
     * Operations that allow you to configure authentication for your [applications](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    public authV1: AuthV1;
    public billingV1: BillingV1;
    /**
     * Operations that allow you create and manage your [build](https://hathora.dev/docs/concepts/hathora-entities#build).
     */
    public buildV1: BuildV1;
    /**
     * Operations that allow you configure and manage an application's [build](https://hathora.dev/docs/concepts/hathora-entities#build) at runtime.
     */
    public deploymentV1: DeploymentV1;
    /**
     * Service that allows clients to directly ping all Hathora regions to get latency information
     */
    public discoveryV1: DiscoveryV1;
    public lobbyV1: LobbyV1;
    /**
     * Operations to create and manage [lobbies](https://hathora.dev/docs/concepts/hathora-entities#lobby).
     */
    public lobbyV2: LobbyV2;
    /**
     * Operations to get logs by [applications](https://hathora.dev/docs/concepts/hathora-entities#application), [processes](https://hathora.dev/docs/concepts/hathora-entities#process), and [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment). We store 20GB of logs data.
     */
    public logV1: LogV1;
    public managementV1: ManagementV1;
    /**
     * Operations to get metrics by [process](https://hathora.dev/docs/concepts/hathora-entities#process). We store 72 hours of metrics data.
     */
    public metricsV1: MetricsV1;
    /**
     * Operations to get data on active and stopped [processes](https://hathora.dev/docs/concepts/hathora-entities#process).
     */
    public processesV1: ProcessesV1;
    public roomV1: RoomV1;
    /**
     * Operations to create, manage, and connect to [rooms](https://hathora.dev/docs/concepts/hathora-entities#room).
     */
    public roomV2: RoomV2;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.appV1 = new AppV1(this.sdkConfiguration);
        this.authV1 = new AuthV1(this.sdkConfiguration);
        this.billingV1 = new BillingV1(this.sdkConfiguration);
        this.buildV1 = new BuildV1(this.sdkConfiguration);
        this.deploymentV1 = new DeploymentV1(this.sdkConfiguration);
        this.discoveryV1 = new DiscoveryV1(this.sdkConfiguration);
        this.lobbyV1 = new LobbyV1(this.sdkConfiguration);
        this.lobbyV2 = new LobbyV2(this.sdkConfiguration);
        this.logV1 = new LogV1(this.sdkConfiguration);
        this.managementV1 = new ManagementV1(this.sdkConfiguration);
        this.metricsV1 = new MetricsV1(this.sdkConfiguration);
        this.processesV1 = new ProcessesV1(this.sdkConfiguration);
        this.roomV1 = new RoomV1(this.sdkConfiguration);
        this.roomV2 = new RoomV2(this.sdkConfiguration);
    }
}
