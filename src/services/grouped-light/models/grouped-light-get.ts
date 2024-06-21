import { z } from 'zod';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { on } from '../../light/models/on';
import { dimming } from '../../light/models/dimming';
import { groupedLightGetAlert } from './grouped-light-get-alert';
import { groupedLightGetSignaling } from './grouped-light-get-signaling';

/**
 * The shape of the model inside the application code - what the users use
 */
export const groupedLightGet = z.object({
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
  on: on.optional(),
  dimming: dimming.optional(),
  alert: groupedLightGetAlert.optional(),
  signaling: groupedLightGetSignaling.optional(),
});

/**
 *
 * @typedef  {GroupedLightGet} groupedLightGet
 * @property {string} - Type of the supported resources
 * @property {string} - Unique identifier representing a specific resource instance
 * @property {string} - Clip v1 resource identifier
 * @property {ResourceIdentifier}
 * @property {On}
 * @property {Dimming}
 * @property {GroupedLightGetAlert} - Joined alert control
 * @property {GroupedLightGetSignaling} - Feature containing basic signaling properties.
 */
export type GroupedLightGet = z.infer<typeof groupedLightGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightGetResponse = z
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
    on: on.optional(),
    dimming: dimming.optional(),
    alert: groupedLightGetAlert.optional(),
    signaling: groupedLightGetSignaling.optional(),
  })
  .transform((data) => ({
    type: data['type'],
    id: data['id'],
    idV1: data['id_v1'],
    owner: data['owner'],
    on: data['on'],
    dimming: data['dimming'],
    alert: data['alert'],
    signaling: data['signaling'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const groupedLightGetRequest = groupedLightGet.transform((data) => ({
  type: data['type'],
  id: data['id'],
  id_v1: data['idV1'],
  owner: data['owner'],
  on: data['on'],
  dimming: data['dimming'],
  alert: data['alert'],
  signaling: data['signaling'],
}));
