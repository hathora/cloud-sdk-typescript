/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ContainerPort, ContainerPort$ } from "./containerport";
import { PlanName, PlanName$ } from "./planname";
import * as z from "zod";

export type Env = {
    value: string;
    name: string;
};

/**
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export enum DeploymentTransportType {
    Tcp = "tcp",
    Udp = "udp",
    Tls = "tls",
}

/**
 * Deployment is a versioned configuration for a build that describes runtime behavior.
 */
export type Deployment = {
    /**
     * Option to shut down processes that have had no new connections or rooms
     *
     * @remarks
     * for five minutes.
     */
    idleTimeoutEnabled?: boolean | undefined;
    /**
     * The environment variable that our process will have access to at runtime.
     */
    env: Array<Env>;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    /**
     * A plan defines how much CPU and memory is required to run an instance of your game server.
     *
     * @remarks
     *
     * `tiny`: shared core, 1gb memory
     *
     * `small`: 1 core, 2gb memory
     *
     * `medium`: 2 core, 4gb memory
     *
     * `large`: 4 core, 8gb memory
     */
    planName: PlanName;
    /**
     * Additional ports your server listens on.
     */
    additionalContainerPorts: Array<ContainerPort>;
    /**
     * A container port object represents the transport configruations for how your server will listen.
     */
    defaultContainerPort: ContainerPort;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    transportType: DeploymentTransportType;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    containerPort: number;
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
export namespace Env$ {
    export const inboundSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Env> = z
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
export namespace DeploymentTransportType$ {
    export const inboundSchema = z.nativeEnum(DeploymentTransportType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Deployment$ {
    export const inboundSchema: z.ZodType<Deployment, z.ZodTypeDef, unknown> = z
        .object({
            idleTimeoutEnabled: z.boolean().default(true),
            env: z.array(z.lazy(() => Env$.inboundSchema)),
            roomsPerProcess: z.number().int(),
            planName: PlanName$.inboundSchema,
            additionalContainerPorts: z.array(ContainerPort$.inboundSchema),
            defaultContainerPort: ContainerPort$.inboundSchema,
            transportType: DeploymentTransportType$.inboundSchema,
            containerPort: z.number(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            requestedMemoryMB: z.number().int(),
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
                planName: v.planName,
                additionalContainerPorts: v.additionalContainerPorts,
                defaultContainerPort: v.defaultContainerPort,
                transportType: v.transportType,
                containerPort: v.containerPort,
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
        env: Array<Env$.Outbound>;
        roomsPerProcess: number;
        planName: string;
        additionalContainerPorts: Array<ContainerPort$.Outbound>;
        defaultContainerPort: ContainerPort$.Outbound;
        transportType: string;
        containerPort: number;
        createdAt: string;
        createdBy: string;
        requestedMemoryMB: number;
        requestedCPU: number;
        deploymentId: number;
        buildId: number;
        appId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Deployment> = z
        .object({
            idleTimeoutEnabled: z.boolean().default(true),
            env: z.array(z.lazy(() => Env$.outboundSchema)),
            roomsPerProcess: z.number().int(),
            planName: PlanName$.outboundSchema,
            additionalContainerPorts: z.array(ContainerPort$.outboundSchema),
            defaultContainerPort: ContainerPort$.outboundSchema,
            transportType: DeploymentTransportType$.outboundSchema,
            containerPort: z.number(),
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            requestedMemoryMB: z.number().int(),
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
                planName: v.planName,
                additionalContainerPorts: v.additionalContainerPorts,
                defaultContainerPort: v.defaultContainerPort,
                transportType: v.transportType,
                containerPort: v.containerPort,
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
