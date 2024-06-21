import { z } from 'zod';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { temperature } from './temperature';

/**
 * The shape of the model inside the application code - what the users use
 */
export const temperatureGet = z.object({
  type: z.string().optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  owner: resourceIdentifier.optional(),
  enabled: z.boolean().optional(),
  temperature: temperature.optional(),
});

/**
 * 
 * @typedef  {TemperatureGet} temperatureGet   
 * @property {string} - Type of the supported resources
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier} 
 * @property {boolean} - `true` when sensor is activated, `false` when deactivated

 * @property {Temperature} 
 */
export type TemperatureGet = z.infer<typeof temperatureGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const temperatureGetResponse = z
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
    owner: resourceIdentifier.optional(),
    enabled: z.boolean().optional(),
    temperature: temperature.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    enabled: data['enabled'],
    temperature: data['temperature'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const temperatureGetRequest = temperatureGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  owner: data['owner'],
  enabled: data['enabled'],
  temperature: data['temperature'],
}));
