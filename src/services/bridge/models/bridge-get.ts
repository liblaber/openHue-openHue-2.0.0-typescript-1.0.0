import { z } from 'zod';
import { bridgeGetType } from './bridge-get-type';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { timeZone } from './time-zone';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bridgeGet = z.object({
  type: bridgeGetType.optional(),
  id: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  idV1: z
    .string()
    .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
    .optional(),
  owner: resourceIdentifier.optional(),
  bridgeId: z.string().optional(),
  timeZone: timeZone.optional(),
});

/**
 *
 * @typedef  {BridgeGet} bridgeGet
 * @property {BridgeGetType}
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {string} - Unique identifier of the bridge as printed on the device. Lower case (shouldn't it be upper case?)
 * @property {TimeZone}
 */
export type BridgeGet = z.infer<typeof bridgeGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bridgeGetResponse = z
  .object({
    type: bridgeGetType.optional(),
    id: z
      .string()
      .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
      .optional(),
    id_v1: z
      .string()
      .regex(/^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$/)
      .optional(),
    owner: resourceIdentifier.optional(),
    bridge_id: z.string().optional(),
    time_zone: timeZone.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    bridgeId: data['bridge_id'],
    timeZone: data['time_zone'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bridgeGetRequest = bridgeGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  owner: data['owner'],
  bridge_id: data['bridgeId'],
  time_zone: data['timeZone'],
}));
