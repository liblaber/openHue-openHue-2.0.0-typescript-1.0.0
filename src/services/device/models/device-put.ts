// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { devicePutType } from './device-put-type';
import { devicePutMetadata, devicePutMetadataRequest, devicePutMetadataResponse } from './device-put-metadata';
import { identify, identifyRequest, identifyResponse } from './identify';
import { devicePutUsertest, devicePutUsertestRequest, devicePutUsertestResponse } from './device-put-usertest';

/**
 * The shape of the model inside the application code - what the users use
 */
export const devicePut = z.object({
  type_: devicePutType.optional(),
  metadata: devicePutMetadata.optional(),
  identify: identify.optional(),
  usertest: devicePutUsertest.optional(),
});

/**
 *
 * @typedef  {DevicePut} devicePut
 * @property {DevicePutType}
 * @property {DevicePutMetadata}
 * @property {Identify}
 * @property {DevicePutUsertest}
 */
export type DevicePut = z.infer<typeof devicePut>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const devicePutResponse = z
  .object({
    type: devicePutType.optional(),
    metadata: devicePutMetadataResponse.optional(),
    identify: identifyResponse.optional(),
    usertest: devicePutUsertestResponse.optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    metadata: data['metadata'],
    identify: data['identify'],
    usertest: data['usertest'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const devicePutRequest = z
  .object({
    type_: devicePutType.nullish(),
    metadata: devicePutMetadataRequest.nullish(),
    identify: identifyRequest.nullish(),
    usertest: devicePutUsertestRequest.nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    metadata: data['metadata'],
    identify: data['identify'],
    usertest: data['usertest'],
  }));
