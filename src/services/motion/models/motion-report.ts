import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const motionReport = z.object({
  changed: z.string().optional(),
  motion: z.boolean().optional(),
});

/**
 *
 * @typedef  {MotionReport} motionReport
 * @property {string} - last time the value of this property is changed
 * @property {boolean} - true if motion is detected
 */
export type MotionReport = z.infer<typeof motionReport>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const motionReportResponse = motionReport;

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const motionReportRequest = motionReport;
