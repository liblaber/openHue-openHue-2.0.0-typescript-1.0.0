import { z } from 'zod';
import { deviceGetType } from './device-get-type';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { productData } from './product-data';
import { deviceGetMetadata } from './device-get-metadata';
import { deviceGetUsertest } from './device-get-usertest';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deviceGet = z.object({
  type: deviceGetType.optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  owner: resourceIdentifier.optional(),
  productData: productData.optional(),
  metadata: deviceGetMetadata.optional(),
  usertest: deviceGetUsertest.optional(),
  services: z.array(resourceIdentifier).optional(),
});

/**
 *
 * @typedef  {DeviceGet} deviceGet
 * @property {DeviceGetType}
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {ProductData}
 * @property {DeviceGetMetadata}
 * @property {DeviceGetUsertest}
 * @property {ResourceIdentifier[]} - References all services providing control and state of the device.
 */
export type DeviceGet = z.infer<typeof deviceGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceGetResponse = z
  .object({
    type: deviceGetType.optional(),
    id: z
      .string()
      .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
      .optional(),
    id_v1: z
      .string()
      .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
      .optional(),
    owner: resourceIdentifier.optional(),
    product_data: productData.optional(),
    metadata: deviceGetMetadata.optional(),
    usertest: deviceGetUsertest.optional(),
    services: z.array(resourceIdentifier).optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    productData: data['product_data'],
    metadata: data['metadata'],
    usertest: data['usertest'],
    services: data['services'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deviceGetRequest = deviceGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  owner: data['owner'],
  product_data: data['productData'],
  metadata: data['metadata'],
  usertest: data['usertest'],
  services: data['services'],
}));
