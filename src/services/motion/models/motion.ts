import { z } from 'zod';
import { motionReport } from './motion-report';

/**
 * The shape of the model inside the application code - what the users use
 */
export const motion = z.object({
  motion: z.boolean().optional(),
  motionValid: z.boolean().optional(),
  motionReport: motionReport.optional(),
});

/**
 *
 * @typedef  {Motion} motion
 * @property {boolean} - Deprecated. Moved to motion_report/motion.
 * @property {boolean} - Deprecated. Motion is valid when motion_report property is present, invalid when absent.
 * @property {MotionReport}
 */
export type Motion = z.infer<typeof motion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const motionResponse = z
  .object({
    motion: z.boolean().optional(),
    motion_valid: z.boolean().optional(),
    motion_report: motionReport.optional(),
  })
  .transform((data) => ({
    motion: data['motion'],
    motionValid: data['motion_valid'],
    motionReport: data['motion_report'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const motionRequest = motion.transform((data) => ({
  motion: data['motion'],
  motion_valid: data['motionValid'],
  motion_report: data['motionReport'],
}));
