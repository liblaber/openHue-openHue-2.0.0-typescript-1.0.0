import { z } from 'zod';
import { devicePutType } from './device-put-type';
import { devicePutMetadata } from './device-put-metadata';
import { identify } from './identify';
import { devicePutUsertest } from './device-put-usertest';

/**
 * The shape of the model inside the application code - what the users use
 */
export const devicePut = z.object({
  type: devicePutType.optional(),
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
export const devicePutResponse = devicePut;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const devicePutRequest = devicePut;
