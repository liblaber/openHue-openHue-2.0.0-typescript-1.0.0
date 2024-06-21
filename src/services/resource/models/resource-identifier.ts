import { z } from 'zod';
import { rtype } from './rtype';

/**
 * The shape of the model inside the application code - what the users use
 */
export const resourceIdentifier = z.object({
  rid: z
    .string()
    .regex(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/)
    .optional(),
  rtype: rtype.optional(),
});

/**
 *
 * @typedef  {ResourceIdentifier} resourceIdentifier
 * @property {string} - The unique id of the referenced resource
 * @property {Rtype} - The type of the referenced resource
 */
export type ResourceIdentifier = z.infer<typeof resourceIdentifier>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const resourceIdentifierResponse = resourceIdentifier;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const resourceIdentifierRequest = resourceIdentifier;
