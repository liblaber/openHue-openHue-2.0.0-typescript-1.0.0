import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const authenticateRequest = z.object({
  devicetype: z.string().optional(),
  generateclientkey: z.boolean().optional(),
});

/**
 *
 * @typedef  {AuthenticateRequest} authenticateRequest
 * @property {string}
 * @property {boolean}
 */
export type AuthenticateRequest = z.infer<typeof authenticateRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const authenticateRequestResponse = authenticateRequest;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const authenticateRequestSchema = authenticateRequest;