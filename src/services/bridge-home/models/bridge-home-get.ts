import { z } from 'zod';
import { bridgeHomeGetType } from './bridge-home-get-type';
import { resourceIdentifier } from '../../resource/models/resource-identifier';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bridgeHomeGet = z.object({
  type: bridgeHomeGetType.optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  children: z.array(resourceIdentifier).optional(),
  services: z.array(resourceIdentifier).optional(),
});

/**
 * 
 * @typedef  {BridgeHomeGet} bridgeHomeGet   
 * @property {BridgeHomeGetType} 
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier[]} - Child devices/services to group by the derived group.
 * @property {ResourceIdentifier[]} - References all services aggregating control and state of children in the group.
This includes all services grouped in the group hierarchy given by child relation.
This includes all services of a device grouped in the group hierarchy given by child relation.
Aggregation is per service type, ie every service type which can be grouped has a corresponding definition
of grouped type Supported types: – grouped_light

 */
export type BridgeHomeGet = z.infer<typeof bridgeHomeGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bridgeHomeGetResponse = z
  .object({
    type: bridgeHomeGetType.optional(),
    id: z
      .string()
      .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
      .optional(),
    id_v1: z
      .string()
      .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
      .optional(),
    children: z.array(resourceIdentifier).optional(),
    services: z.array(resourceIdentifier).optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    children: data['children'],
    services: data['services'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bridgeHomeGetRequest = bridgeHomeGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  children: data['children'],
  services: data['services'],
}));
