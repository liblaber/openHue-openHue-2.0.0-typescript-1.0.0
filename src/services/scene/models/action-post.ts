import { z } from 'zod';
import { resourceIdentifier } from '../../resource/models/resource-identifier';
import { actionPostAction } from './action-post-action';

/**
 * The shape of the model inside the application code - what the users use
 */
export const actionPost = z.object({
  target: resourceIdentifier,
  action: actionPostAction,
});

/**
 *
 * @typedef  {ActionPost} actionPost
 * @property {ResourceIdentifier}
 * @property {ActionPostAction} - The action to be executed on recall
 */
export type ActionPost = z.infer<typeof actionPost>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const actionPostResponse = actionPost;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const actionPostRequest = actionPost;
