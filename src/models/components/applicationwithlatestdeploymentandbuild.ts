/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AuthConfiguration,
  AuthConfiguration$inboundSchema,
  AuthConfiguration$Outbound,
  AuthConfiguration$outboundSchema,
} from "./authconfiguration.js";
import {
  BuildV3,
  BuildV3$inboundSchema,
  BuildV3$Outbound,
  BuildV3$outboundSchema,
} from "./buildv3.js";
import {
  ContainerPort,
  ContainerPort$inboundSchema,
  ContainerPort$Outbound,
  ContainerPort$outboundSchema,
} from "./containerport.js";
import {
  StaticProcessAllocationConfig,
  StaticProcessAllocationConfig$inboundSchema,
  StaticProcessAllocationConfig$Outbound,
  StaticProcessAllocationConfig$outboundSchema,
} from "./staticprocessallocationconfig.js";

export type ApplicationWithLatestDeploymentAndBuildServiceConfig = {
  /**
   * The headroom configuration for each region.
   *
   * @remarks
   * EXPERIMENTAL - this feature is in closed beta.
   */
  staticProcessAllocation: Array<StaticProcessAllocationConfig>;
};

export type ApplicationWithLatestDeploymentAndBuildEnv = {
  value: string;
  name: string;
};

export type ApplicationWithLatestDeploymentAndBuildDeployment = {
  /**
   * Arbitrary metadata associated with a deployment.
   */
  deploymentTag?: string | undefined;
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
  env: Array<ApplicationWithLatestDeploymentAndBuildEnv>;
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
  createdBy: string;
  /**
   * EXPERIMENTAL - this feature is in closed beta.
   *
   * @remarks
   * The number of GPUs allocated to your process. Must be an integer.
   * If not provided, the requested GPU is 0.
   */
  experimentalRequestedGPU?: number | undefined;
  /**
   * The amount of memory allocated to your process. By default, this is capped
   *
   * @remarks
   * at 8192 MB, but can be increased further on the Enterprise tier.
   */
  requestedMemoryMB: number;
  /**
   * The number of cores allocated to your process.
   */
  requestedCPU: number;
  /**
   * System generated id for a deployment.
   */
  deploymentId: string;
  /**
   * Tag to associate an external version with a build. It is accessible via [`GetBuild()`](https://hathora.dev/api#tag/BuildsV3/operation/GetBuild).
   */
  buildTag?: string | undefined;
  /**
   * System generated id for a build. Can also be user defined when creating a build.
   */
  buildId: string;
  /**
   * System generated unique identifier for an application.
   */
  appId: string;
  /**
   * A build represents a game server artifact and its associated metadata.
   */
  build: BuildV3;
};

/**
 * An application object is the top level namespace for the game server.
 */
export type ApplicationWithLatestDeploymentAndBuild = {
  /**
   * The email address or token id for the user that deleted the application.
   */
  deletedBy: string | null;
  /**
   * When the application was deleted.
   */
  deletedAt: Date | null;
  /**
   * When the application was created.
   */
  createdAt: Date;
  createdBy: string;
  /**
   * System generated unique identifier for an organization. Not guaranteed to have a specific format.
   */
  orgId: string;
  serviceConfig: ApplicationWithLatestDeploymentAndBuildServiceConfig | null;
  /**
   * Configure [player authentication](https://hathora.dev/docs/backend-integrations/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).
   */
  authConfiguration: AuthConfiguration;
  /**
   * Secret that is used for identity and access management.
   */
  appSecret: string;
  /**
   * System generated unique identifier for an application.
   */
  appId: string;
  /**
   * Readable name for an application. Must be unique within an organization.
   */
  appName: string;
  deployment?: ApplicationWithLatestDeploymentAndBuildDeployment | undefined;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildServiceConfig$inboundSchema:
  z.ZodType<
    ApplicationWithLatestDeploymentAndBuildServiceConfig,
    z.ZodTypeDef,
    unknown
  > = z.object({
    staticProcessAllocation: z.array(
      StaticProcessAllocationConfig$inboundSchema,
    ),
  });

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildServiceConfig$Outbound = {
  staticProcessAllocation: Array<StaticProcessAllocationConfig$Outbound>;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildServiceConfig$outboundSchema:
  z.ZodType<
    ApplicationWithLatestDeploymentAndBuildServiceConfig$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildServiceConfig
  > = z.object({
    staticProcessAllocation: z.array(
      StaticProcessAllocationConfig$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildServiceConfig$ {
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildServiceConfig$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationWithLatestDeploymentAndBuildServiceConfig$inboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildServiceConfig$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationWithLatestDeploymentAndBuildServiceConfig$outboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildServiceConfig$Outbound` instead. */
  export type Outbound =
    ApplicationWithLatestDeploymentAndBuildServiceConfig$Outbound;
}

export function applicationWithLatestDeploymentAndBuildServiceConfigToJSON(
  applicationWithLatestDeploymentAndBuildServiceConfig:
    ApplicationWithLatestDeploymentAndBuildServiceConfig,
): string {
  return JSON.stringify(
    ApplicationWithLatestDeploymentAndBuildServiceConfig$outboundSchema.parse(
      applicationWithLatestDeploymentAndBuildServiceConfig,
    ),
  );
}

export function applicationWithLatestDeploymentAndBuildServiceConfigFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationWithLatestDeploymentAndBuildServiceConfig,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationWithLatestDeploymentAndBuildServiceConfig$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationWithLatestDeploymentAndBuildServiceConfig' from JSON`,
  );
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema:
  z.ZodType<ApplicationWithLatestDeploymentAndBuildEnv, z.ZodTypeDef, unknown> =
    z.object({
      value: z.string(),
      name: z.string(),
    });

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildEnv$Outbound = {
  value: string;
  name: string;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema:
  z.ZodType<
    ApplicationWithLatestDeploymentAndBuildEnv$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildEnv
  > = z.object({
    value: z.string(),
    name: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildEnv$ {
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildEnv$Outbound` instead. */
  export type Outbound = ApplicationWithLatestDeploymentAndBuildEnv$Outbound;
}

export function applicationWithLatestDeploymentAndBuildEnvToJSON(
  applicationWithLatestDeploymentAndBuildEnv:
    ApplicationWithLatestDeploymentAndBuildEnv,
): string {
  return JSON.stringify(
    ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema.parse(
      applicationWithLatestDeploymentAndBuildEnv,
    ),
  );
}

export function applicationWithLatestDeploymentAndBuildEnvFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationWithLatestDeploymentAndBuildEnv,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationWithLatestDeploymentAndBuildEnv' from JSON`,
  );
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema:
  z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeployment,
    z.ZodTypeDef,
    unknown
  > = z.object({
    deploymentTag: z.string().optional(),
    idleTimeoutEnabled: z.boolean(),
    env: z.array(
      z.lazy(() => ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema),
    ),
    roomsPerProcess: z.number().int(),
    additionalContainerPorts: z.array(ContainerPort$inboundSchema),
    defaultContainerPort: ContainerPort$inboundSchema,
    createdAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    createdBy: z.string(),
    experimentalRequestedGPU: z.number().optional(),
    requestedMemoryMB: z.number(),
    requestedCPU: z.number(),
    deploymentId: z.string(),
    buildTag: z.string().optional(),
    buildId: z.string(),
    appId: z.string(),
    build: BuildV3$inboundSchema,
  });

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildDeployment$Outbound = {
  deploymentTag?: string | undefined;
  idleTimeoutEnabled: boolean;
  env: Array<ApplicationWithLatestDeploymentAndBuildEnv$Outbound>;
  roomsPerProcess: number;
  additionalContainerPorts: Array<ContainerPort$Outbound>;
  defaultContainerPort: ContainerPort$Outbound;
  createdAt: string;
  createdBy: string;
  experimentalRequestedGPU?: number | undefined;
  requestedMemoryMB: number;
  requestedCPU: number;
  deploymentId: string;
  buildTag?: string | undefined;
  buildId: string;
  appId: string;
  build: BuildV3$Outbound;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema:
  z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeployment$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildDeployment
  > = z.object({
    deploymentTag: z.string().optional(),
    idleTimeoutEnabled: z.boolean(),
    env: z.array(
      z.lazy(() => ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema),
    ),
    roomsPerProcess: z.number().int(),
    additionalContainerPorts: z.array(ContainerPort$outboundSchema),
    defaultContainerPort: ContainerPort$outboundSchema,
    createdAt: z.date().transform(v => v.toISOString()),
    createdBy: z.string(),
    experimentalRequestedGPU: z.number().optional(),
    requestedMemoryMB: z.number(),
    requestedCPU: z.number(),
    deploymentId: z.string(),
    buildTag: z.string().optional(),
    buildId: z.string(),
    appId: z.string(),
    build: BuildV3$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildDeployment$ {
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeployment$Outbound` instead. */
  export type Outbound =
    ApplicationWithLatestDeploymentAndBuildDeployment$Outbound;
}

export function applicationWithLatestDeploymentAndBuildDeploymentToJSON(
  applicationWithLatestDeploymentAndBuildDeployment:
    ApplicationWithLatestDeploymentAndBuildDeployment,
): string {
  return JSON.stringify(
    ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema.parse(
      applicationWithLatestDeploymentAndBuildDeployment,
    ),
  );
}

export function applicationWithLatestDeploymentAndBuildDeploymentFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationWithLatestDeploymentAndBuildDeployment,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationWithLatestDeploymentAndBuildDeployment' from JSON`,
  );
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuild$inboundSchema: z.ZodType<
  ApplicationWithLatestDeploymentAndBuild,
  z.ZodTypeDef,
  unknown
> = z.object({
  deletedBy: z.nullable(z.string()),
  deletedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  createdBy: z.string(),
  orgId: z.string(),
  serviceConfig: z.nullable(
    z.lazy(() =>
      ApplicationWithLatestDeploymentAndBuildServiceConfig$inboundSchema
    ),
  ),
  authConfiguration: AuthConfiguration$inboundSchema,
  appSecret: z.string(),
  appId: z.string(),
  appName: z.string(),
  deployment: z.lazy(() =>
    ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema
  ).optional(),
});

/** @internal */
export type ApplicationWithLatestDeploymentAndBuild$Outbound = {
  deletedBy: string | null;
  deletedAt: string | null;
  createdAt: string;
  createdBy: string;
  orgId: string;
  serviceConfig:
    | ApplicationWithLatestDeploymentAndBuildServiceConfig$Outbound
    | null;
  authConfiguration: AuthConfiguration$Outbound;
  appSecret: string;
  appId: string;
  appName: string;
  deployment?:
    | ApplicationWithLatestDeploymentAndBuildDeployment$Outbound
    | undefined;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuild$outboundSchema: z.ZodType<
  ApplicationWithLatestDeploymentAndBuild$Outbound,
  z.ZodTypeDef,
  ApplicationWithLatestDeploymentAndBuild
> = z.object({
  deletedBy: z.nullable(z.string()),
  deletedAt: z.nullable(z.date().transform(v => v.toISOString())),
  createdAt: z.date().transform(v => v.toISOString()),
  createdBy: z.string(),
  orgId: z.string(),
  serviceConfig: z.nullable(
    z.lazy(() =>
      ApplicationWithLatestDeploymentAndBuildServiceConfig$outboundSchema
    ),
  ),
  authConfiguration: AuthConfiguration$outboundSchema,
  appSecret: z.string(),
  appId: z.string(),
  appName: z.string(),
  deployment: z.lazy(() =>
    ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuild$ {
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuild$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationWithLatestDeploymentAndBuild$inboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuild$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationWithLatestDeploymentAndBuild$outboundSchema;
  /** @deprecated use `ApplicationWithLatestDeploymentAndBuild$Outbound` instead. */
  export type Outbound = ApplicationWithLatestDeploymentAndBuild$Outbound;
}

export function applicationWithLatestDeploymentAndBuildToJSON(
  applicationWithLatestDeploymentAndBuild:
    ApplicationWithLatestDeploymentAndBuild,
): string {
  return JSON.stringify(
    ApplicationWithLatestDeploymentAndBuild$outboundSchema.parse(
      applicationWithLatestDeploymentAndBuild,
    ),
  );
}

export function applicationWithLatestDeploymentAndBuildFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationWithLatestDeploymentAndBuild,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationWithLatestDeploymentAndBuild$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationWithLatestDeploymentAndBuild' from JSON`,
  );
}
