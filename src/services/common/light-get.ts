// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { resourceIdentifier, resourceIdentifierRequest, resourceIdentifierResponse } from './resource-identifier';
import { lightGetMetadata, lightGetMetadataRequest, lightGetMetadataResponse } from './light-get-metadata';
import { on, onRequest, onResponse } from './on';
import { lightGetDimming, lightGetDimmingRequest, lightGetDimmingResponse } from './light-get-dimming';
import {
  lightGetColorTemperature,
  lightGetColorTemperatureRequest,
  lightGetColorTemperatureResponse,
} from './light-get-color-temperature';
import { lightGetColor, lightGetColorRequest, lightGetColorResponse } from './light-get-color';
import { lightGetDynamics, lightGetDynamicsRequest, lightGetDynamicsResponse } from './light-get-dynamics';
import { lightGetSignaling, lightGetSignalingRequest, lightGetSignalingResponse } from './light-get-signaling';
import { lightGetMode } from './light-get-mode';
import { lightGetGradient, lightGetGradientRequest, lightGetGradientResponse } from './light-get-gradient';
import { lightGetEffects, lightGetEffectsRequest, lightGetEffectsResponse } from './light-get-effects';
import {
  lightGetTimedEffects,
  lightGetTimedEffectsRequest,
  lightGetTimedEffectsResponse,
} from './light-get-timed-effects';
import { lightGetPowerup, lightGetPowerupRequest, lightGetPowerupResponse } from './light-get-powerup';

/**
 * The shape of the model inside the application code - what the users use
 */
export const lightGet = z.object({
  type_: z.string().optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  owner: resourceIdentifier.optional(),
  metadata: lightGetMetadata.optional(),
  on: on.optional(),
  dimming: lightGetDimming.optional(),
  colorTemperature: lightGetColorTemperature.optional(),
  color: lightGetColor.optional(),
  dynamics: lightGetDynamics.optional(),
  alert: z.any().optional(),
  signaling: lightGetSignaling.optional(),
  mode: lightGetMode.optional(),
  gradient: lightGetGradient.optional(),
  effects: lightGetEffects.optional(),
  timedEffects: lightGetTimedEffects.optional(),
  powerup: lightGetPowerup.optional(),
});

/**
 *
 * @typedef  {LightGet} lightGet
 * @property {string} - Type of the supported resources
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {LightGetMetadata} - Deprecated, use metadata on device level
 * @property {On}
 * @property {LightGetDimming}
 * @property {LightGetColorTemperature}
 * @property {LightGetColor}
 * @property {LightGetDynamics}
 * @property {any} - TODO
 * @property {LightGetSignaling} - Feature containing signaling properties.
 * @property {LightGetMode}
 * @property {LightGetGradient}
 * @property {LightGetEffects} - Basic feature containing effect properties.
 * @property {LightGetTimedEffects} - Basic feature containing timed effect properties.
 * @property {LightGetPowerup} - Feature containing properties to configure powerup behaviour of a lightsource.
 */
export type LightGet = z.infer<typeof lightGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetResponse = z
  .object({
    type: z.string().optional(),
    id: z
      .string()
      .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
      .optional(),
    id_v1: z
      .string()
      .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
      .optional(),
    owner: resourceIdentifierResponse.optional(),
    metadata: lightGetMetadataResponse.optional(),
    on: onResponse.optional(),
    dimming: lightGetDimmingResponse.optional(),
    color_temperature: lightGetColorTemperatureResponse.optional(),
    color: lightGetColorResponse.optional(),
    dynamics: lightGetDynamicsResponse.optional(),
    alert: z.any().optional(),
    signaling: lightGetSignalingResponse.optional(),
    mode: lightGetMode.optional(),
    gradient: lightGetGradientResponse.optional(),
    effects: lightGetEffectsResponse.optional(),
    timed_effects: lightGetTimedEffectsResponse.optional(),
    powerup: lightGetPowerupResponse.optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    metadata: data['metadata'],
    on: data['on'],
    dimming: data['dimming'],
    colorTemperature: data['color_temperature'],
    color: data['color'],
    dynamics: data['dynamics'],
    alert: data['alert'],
    signaling: data['signaling'],
    mode: data['mode'],
    gradient: data['gradient'],
    effects: data['effects'],
    timedEffects: data['timed_effects'],
    powerup: data['powerup'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const lightGetRequest = z
  .object({
    type_: z.string().nullish(),
    id: z.string().nullish(),
    idV1: z.string().nullish(),
    owner: resourceIdentifierRequest.nullish(),
    metadata: lightGetMetadataRequest.nullish(),
    on: onRequest.nullish(),
    dimming: lightGetDimmingRequest.nullish(),
    colorTemperature: lightGetColorTemperatureRequest.nullish(),
    color: lightGetColorRequest.nullish(),
    dynamics: lightGetDynamicsRequest.nullish(),
    alert: z.any().nullish(),
    signaling: lightGetSignalingRequest.nullish(),
    mode: lightGetMode.nullish(),
    gradient: lightGetGradientRequest.nullish(),
    effects: lightGetEffectsRequest.nullish(),
    timedEffects: lightGetTimedEffectsRequest.nullish(),
    powerup: lightGetPowerupRequest.nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    id: data['id'],
    id_v1: data['idV1'],
    owner: data['owner'],
    metadata: data['metadata'],
    on: data['on'],
    dimming: data['dimming'],
    color_temperature: data['colorTemperature'],
    color: data['color'],
    dynamics: data['dynamics'],
    alert: data['alert'],
    signaling: data['signaling'],
    mode: data['mode'],
    gradient: data['gradient'],
    effects: data['effects'],
    timed_effects: data['timedEffects'],
    powerup: data['powerup'],
  }));
