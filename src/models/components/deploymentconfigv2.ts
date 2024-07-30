/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    ContainerPort,
    ContainerPort$inboundSchema,
    ContainerPort$Outbound,
    ContainerPort$outboundSchema,
} from "./containerport.js";
import {
    TransportType,
    TransportType$inboundSchema,
    TransportType$outboundSchema,
} from "./transporttype.js";
import * as z from "zod";

export type DeploymentConfigV2Env = {
    value: string;
    name: string;
};

export type DeploymentConfigV2 = {
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
    env: Array<DeploymentConfigV2Env>;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    /**
     * Additional ports your server listens on.
     */
    additionalContainerPorts?: Array<ContainerPort> | undefined;
    /**
     * Transport type specifies the underlying communication protocol to the exposed port.
     */
    transportType: TransportType;
    /**
     * Default port the server listens on.
     */
    containerPort: number;
    /**
     * The amount of memory allocated to your process.
     */
    requestedMemoryMB: number;
    /**
     * The number of cores allocated to your process.
     */
    requestedCPU: number;
};

/** @internal */
export const DeploymentConfigV2Env$inboundSchema: z.ZodType<
    DeploymentConfigV2Env,
    z.ZodTypeDef,
    unknown
> = z.object({
    value: z.string(),
    name: z.string(),
});

/** @internal */
export type DeploymentConfigV2Env$Outbound = {
    value: string;
    name: string;
};

/** @internal */
export const DeploymentConfigV2Env$outboundSchema: z.ZodType<
    DeploymentConfigV2Env$Outbound,
    z.ZodTypeDef,
    DeploymentConfigV2Env
> = z.object({
    value: z.string(),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentConfigV2Env$ {
    /** @deprecated use `DeploymentConfigV2Env$inboundSchema` instead. */
    export const inboundSchema = DeploymentConfigV2Env$inboundSchema;
    /** @deprecated use `DeploymentConfigV2Env$outboundSchema` instead. */
    export const outboundSchema = DeploymentConfigV2Env$outboundSchema;
    /** @deprecated use `DeploymentConfigV2Env$Outbound` instead. */
    export type Outbound = DeploymentConfigV2Env$Outbound;
}

/** @internal */
export const DeploymentConfigV2$inboundSchema: z.ZodType<
    DeploymentConfigV2,
    z.ZodTypeDef,
    unknown
> = z.object({
    idleTimeoutEnabled: z.boolean(),
    env: z.array(z.lazy(() => DeploymentConfigV2Env$inboundSchema)),
    roomsPerProcess: z.number().int(),
    additionalContainerPorts: z.array(ContainerPort$inboundSchema).optional(),
    transportType: TransportType$inboundSchema,
    containerPort: z.number().int(),
    requestedMemoryMB: z.number(),
    requestedCPU: z.number(),
});

/** @internal */
export type DeploymentConfigV2$Outbound = {
    idleTimeoutEnabled: boolean;
    env: Array<DeploymentConfigV2Env$Outbound>;
    roomsPerProcess: number;
    additionalContainerPorts?: Array<ContainerPort$Outbound> | undefined;
    transportType: string;
    containerPort: number;
    requestedMemoryMB: number;
    requestedCPU: number;
};

/** @internal */
export const DeploymentConfigV2$outboundSchema: z.ZodType<
    DeploymentConfigV2$Outbound,
    z.ZodTypeDef,
    DeploymentConfigV2
> = z.object({
    idleTimeoutEnabled: z.boolean(),
    env: z.array(z.lazy(() => DeploymentConfigV2Env$outboundSchema)),
    roomsPerProcess: z.number().int(),
    additionalContainerPorts: z.array(ContainerPort$outboundSchema).optional(),
    transportType: TransportType$outboundSchema,
    containerPort: z.number().int(),
    requestedMemoryMB: z.number(),
    requestedCPU: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentConfigV2$ {
    /** @deprecated use `DeploymentConfigV2$inboundSchema` instead. */
    export const inboundSchema = DeploymentConfigV2$inboundSchema;
    /** @deprecated use `DeploymentConfigV2$outboundSchema` instead. */
    export const outboundSchema = DeploymentConfigV2$outboundSchema;
    /** @deprecated use `DeploymentConfigV2$Outbound` instead. */
    export type Outbound = DeploymentConfigV2$Outbound;
}
