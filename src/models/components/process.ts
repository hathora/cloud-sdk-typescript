/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ExposedPort, ExposedPort$ } from "./exposedport";
import { Region, Region$ } from "./region";
import { TransportType, TransportType$ } from "./transporttype";
import * as z from "zod";

/**
 * Connection details for an active process.
 */
export type ProcessExposedPort = {
    /**
     * Transport type specifies the underlying communication protocol to the exposed port.
     */
    transportType: TransportType;
    port: number;
    host: string;
    name: string;
};

/**
 * A process object represents a runtime instance of your game server and its metadata.
 */
export type Process = {
    /**
     * Measures network traffic leaving the process in bytes.
     */
    egressedBytes: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    idleSince: Date | null;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    activeConnectionsUpdatedAt: Date;
    /**
     * Tracks the number of active connections to a process.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    activeConnections: number;
    roomsAllocatedUpdatedAt: Date;
    /**
     * Tracks the number of rooms that have been allocated to the process.
     */
    roomsAllocated: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    roomSlotsAvailableUpdatedAt: Date;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    roomSlotsAvailable: number;
    /**
     * Process in drain will not accept any new rooms.
     */
    draining: boolean;
    /**
     * When the process has been terminated.
     */
    terminatedAt: Date | null;
    /**
     * When the process is issued to stop. We use this to determine when we should stop billing.
     */
    stoppingAt: Date | null;
    /**
     * When the process bound to the specified port. We use this to determine when we should start billing.
     */
    startedAt: Date | null;
    /**
     * When the process started being provisioned.
     */
    startingAt: Date;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    additionalExposedPorts: Array<ExposedPort>;
    exposedPort: ProcessExposedPort | null;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    port: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    host: string;
    region: Region;
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    processId: string;
    /**
     * System generated id for a deployment. Increments by 1.
     */
    deploymentId: number;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
};

/** @internal */
export namespace ProcessExposedPort$ {
    export const inboundSchema: z.ZodType<ProcessExposedPort, z.ZodTypeDef, unknown> = z
        .object({
            transportType: TransportType$.inboundSchema,
            port: z.number().int(),
            host: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                transportType: v.transportType,
                port: v.port,
                host: v.host,
                name: v.name,
            };
        });

    export type Outbound = {
        transportType: string;
        port: number;
        host: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProcessExposedPort> = z
        .object({
            transportType: TransportType$.outboundSchema,
            port: z.number().int(),
            host: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                transportType: v.transportType,
                port: v.port,
                host: v.host,
                name: v.name,
            };
        });
}

/** @internal */
export namespace Process$ {
    export const inboundSchema: z.ZodType<Process, z.ZodTypeDef, unknown> = z
        .object({
            egressedBytes: z.number().int(),
            idleSince: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            activeConnectionsUpdatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            activeConnections: z.number().int(),
            roomsAllocatedUpdatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            roomsAllocated: z.number().int(),
            roomSlotsAvailableUpdatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            roomSlotsAvailable: z.number(),
            draining: z.boolean(),
            terminatedAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            stoppingAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            startedAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            startingAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            roomsPerProcess: z.number().int(),
            additionalExposedPorts: z.array(ExposedPort$.inboundSchema),
            exposedPort: z.nullable(z.lazy(() => ProcessExposedPort$.inboundSchema)),
            port: z.number(),
            host: z.string(),
            region: Region$.inboundSchema,
            processId: z.string(),
            deploymentId: z.number().int(),
            appId: z.string(),
        })
        .transform((v) => {
            return {
                egressedBytes: v.egressedBytes,
                idleSince: v.idleSince,
                activeConnectionsUpdatedAt: v.activeConnectionsUpdatedAt,
                activeConnections: v.activeConnections,
                roomsAllocatedUpdatedAt: v.roomsAllocatedUpdatedAt,
                roomsAllocated: v.roomsAllocated,
                roomSlotsAvailableUpdatedAt: v.roomSlotsAvailableUpdatedAt,
                roomSlotsAvailable: v.roomSlotsAvailable,
                draining: v.draining,
                terminatedAt: v.terminatedAt,
                stoppingAt: v.stoppingAt,
                startedAt: v.startedAt,
                startingAt: v.startingAt,
                roomsPerProcess: v.roomsPerProcess,
                additionalExposedPorts: v.additionalExposedPorts,
                exposedPort: v.exposedPort,
                port: v.port,
                host: v.host,
                region: v.region,
                processId: v.processId,
                deploymentId: v.deploymentId,
                appId: v.appId,
            };
        });

    export type Outbound = {
        egressedBytes: number;
        idleSince: string | null;
        activeConnectionsUpdatedAt: string;
        activeConnections: number;
        roomsAllocatedUpdatedAt: string;
        roomsAllocated: number;
        roomSlotsAvailableUpdatedAt: string;
        roomSlotsAvailable: number;
        draining: boolean;
        terminatedAt: string | null;
        stoppingAt: string | null;
        startedAt: string | null;
        startingAt: string;
        roomsPerProcess: number;
        additionalExposedPorts: Array<ExposedPort$.Outbound>;
        exposedPort: ProcessExposedPort$.Outbound | null;
        port: number;
        host: string;
        region: string;
        processId: string;
        deploymentId: number;
        appId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Process> = z
        .object({
            egressedBytes: z.number().int(),
            idleSince: z.nullable(z.date().transform((v) => v.toISOString())),
            activeConnectionsUpdatedAt: z.date().transform((v) => v.toISOString()),
            activeConnections: z.number().int(),
            roomsAllocatedUpdatedAt: z.date().transform((v) => v.toISOString()),
            roomsAllocated: z.number().int(),
            roomSlotsAvailableUpdatedAt: z.date().transform((v) => v.toISOString()),
            roomSlotsAvailable: z.number(),
            draining: z.boolean(),
            terminatedAt: z.nullable(z.date().transform((v) => v.toISOString())),
            stoppingAt: z.nullable(z.date().transform((v) => v.toISOString())),
            startedAt: z.nullable(z.date().transform((v) => v.toISOString())),
            startingAt: z.date().transform((v) => v.toISOString()),
            roomsPerProcess: z.number().int(),
            additionalExposedPorts: z.array(ExposedPort$.outboundSchema),
            exposedPort: z.nullable(z.lazy(() => ProcessExposedPort$.outboundSchema)),
            port: z.number(),
            host: z.string(),
            region: Region$.outboundSchema,
            processId: z.string(),
            deploymentId: z.number().int(),
            appId: z.string(),
        })
        .transform((v) => {
            return {
                egressedBytes: v.egressedBytes,
                idleSince: v.idleSince,
                activeConnectionsUpdatedAt: v.activeConnectionsUpdatedAt,
                activeConnections: v.activeConnections,
                roomsAllocatedUpdatedAt: v.roomsAllocatedUpdatedAt,
                roomsAllocated: v.roomsAllocated,
                roomSlotsAvailableUpdatedAt: v.roomSlotsAvailableUpdatedAt,
                roomSlotsAvailable: v.roomSlotsAvailable,
                draining: v.draining,
                terminatedAt: v.terminatedAt,
                stoppingAt: v.stoppingAt,
                startedAt: v.startedAt,
                startingAt: v.startingAt,
                roomsPerProcess: v.roomsPerProcess,
                additionalExposedPorts: v.additionalExposedPorts,
                exposedPort: v.exposedPort,
                port: v.port,
                host: v.host,
                region: v.region,
                processId: v.processId,
                deploymentId: v.deploymentId,
                appId: v.appId,
            };
        });
}
