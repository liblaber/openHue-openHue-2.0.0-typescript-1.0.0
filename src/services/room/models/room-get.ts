import { z } from 'zod';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { roomGetMetadata } from './room-get-metadata';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomGet = z.object({
  type: z.string().optional(),
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
  metadata: roomGetMetadata.optional(),
});

/**
 * 
 * @typedef  {RoomGet} roomGet   
 * @property {string} - Type of the supported resources
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier[]} - Child devices/services to group by the derived group
 * @property {ResourceIdentifier[]} - References all services aggregating control and state of children in the group.
This includes all services grouped in the group hierarchy given by child relation.
This includes all services of a device grouped in the group hierarchy given by child relation.
Aggregation is per service type, ie every service type which can be grouped has a corresponding definition of
grouped type.
Supported types: – grouped_light

 * @property {RoomGetMetadata} - configuration object for a room
 */
export type RoomGet = z.infer<typeof roomGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomGetResponse = z
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
    children: z.array(resourceIdentifier).optional(),
    services: z.array(resourceIdentifier).optional(),
    metadata: roomGetMetadata.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    children: data['children'],
    services: data['services'],
    metadata: data['metadata'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomGetRequest = roomGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  children: data['children'],
  services: data['services'],
  metadata: data['metadata'],
}));