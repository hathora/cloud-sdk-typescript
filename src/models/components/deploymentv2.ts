/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ContainerPort, ContainerPort$ } from "./containerport";
import * as z from "zod";

export type DeploymentV2Env = {
    value: string;
    name: string;
};

export type DeploymentV2 = {
    /**
     * Option to shut down processes that have had no new connections or rooms
     *
     * @remarks
     * for five minutes.
     */
    idleTimeoutEnabled: boolean;
    /**
     * The environment variable that our process will have access to at runtime.
     */
    env: Array<DeploymentV2Env>;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    /**
     * Additional ports your server listens on.
     */
    additionalContainerPorts: Array<ContainerPort>;
    /**
     * A container port object represents the transport configruations for how your server will listen.
     */
    defaultContainerPort: ContainerPort;
    /**
     * When the deployment was created.
     */
    createdAt: Date;
    /**
     * UserId or email address for the user that created the deployment.
     */
    createdBy: string;
    /**
     * The amount of memory allocated to your process.
     */
    requestedMemoryMB: number;
    /**
     * The number of cores allocated to your process.
     */
    requestedCPU: number;
    /**
     * System generated id for a deployment. Increments by 1.
     */
    deploymentId: number;
    /**
     * System generated id for a build. Increments by 1.
     */
    buildId: number;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
};

/** @internal */
export namespace DeploymentV2Env$ {
    export const inboundSchema: z.ZodType<DeploymentV2Env, z.ZodTypeDef, unknown> = z
        .object({
            value: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                value: v.value,
                name: v.name,
            };
        });

    export type Outbound = {
        value: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeploymentV2Env> = z
        .object({
            value: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                value: v.value,
                name: v.name,
            };
        });
}

/** @internal */
export namespace DeploymentV2$ {
    export const inboundSchema: z.ZodType<DeploymentV2, z.ZodTypeDef, unknown> = z
        .object({
            idleTimeoutEnabled: z.boolean(),
            env: z.array(z.lazy(() => DeploymentV2Env$.inboundSchema)),
            roomsPerProcess: z.number().int(),
            additionalContainerPorts: z.array(ContainerPort$.inboundSchema),
            defaultContainerPort: ContainerPort$.inboundSchema,
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            requestedMemoryMB: z.number(),
            requestedCPU: z.number(),
            deploymentId: z.number().int(),
            buildId: z.number().int(),
            appId: z.string(),
        })
        .transform((v) => {
            return {
                idleTimeoutEnabled: v.idleTimeoutEnabled,
                env: v.env,
                roomsPerProcess: v.roomsPerProcess,
                additionalContainerPorts: v.additionalContainerPorts,
                defaultContainerPort: v.defaultContainerPort,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                requestedMemoryMB: v.requestedMemoryMB,
                requestedCPU: v.requestedCPU,
                deploymentId: v.deploymentId,
                buildId: v.buildId,
                appId: v.appId,
            };
        });

    export type Outbound = {
        idleTimeoutEnabled: boolean;
        env: Array<DeploymentV2Env$.Outbound>;
        roomsPerProcess: number;
        additionalContainerPorts: Array<ContainerPort$.Outbound>;
        defaultContainerPort: ContainerPort$.Outbound;
        createdAt: string;
        createdBy: string;
        requestedMemoryMB: number;
        requestedCPU: number;
        deploymentId: number;
        buildId: number;
        appId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeploymentV2> = z
        .object({
            idleTimeoutEnabled: z.boolean(),
            env: z.array(z.lazy(() => DeploymentV2Env$.outboundSchema)),
            roomsPerProcess: z.number().int(),
            additionalContainerPorts: z.array(ContainerPort$.outboundSchema),
            defaultContainerPort: ContainerPort$.outboundSchema,
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            requestedMemoryMB: z.number(),
            requestedCPU: z.number(),
            deploymentId: z.number().int(),
            buildId: z.number().int(),
            appId: z.string(),
        })
        .transform((v) => {
            return {
                idleTimeoutEnabled: v.idleTimeoutEnabled,
                env: v.env,
                roomsPerProcess: v.roomsPerProcess,
                additionalContainerPorts: v.additionalContainerPorts,
                defaultContainerPort: v.defaultContainerPort,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                requestedMemoryMB: v.requestedMemoryMB,
                requestedCPU: v.requestedCPU,
                deploymentId: v.deploymentId,
                buildId: v.buildId,
                appId: v.appId,
            };
        });
}