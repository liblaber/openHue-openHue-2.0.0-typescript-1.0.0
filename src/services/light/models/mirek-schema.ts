import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const mirekSchema = z.object({
  mirekMinimum: z.number().gte(153).lte(500).optional(),
  mirekMaximum: z.number().gte(153).lte(500).optional(),
});

/**
 *
 * @typedef  {MirekSchema} mirekSchema
 * @property {number} - minimum color temperature this light supports
 * @property {number} - maximum color temperature this light supports
 */
export type MirekSchema = z.infer<typeof mirekSchema>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const mirekSchemaResponse = z
  .object({
    mirek_minimum: z.number().gte(153).lte(500).optional(),
    mirek_maximum: z.number().gte(153).lte(500).optional(),
  })
  .transform((data) => ({
    mirekMinimum: data['mirek_minimum'],
    mirekMaximum: data['mirek_maximum'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const mirekSchemaRequest = mirekSchema.transform((data) => ({
  mirek_minimum: data['mirekMinimum'],
  mirek_maximum: data['mirekMaximum'],
}));
