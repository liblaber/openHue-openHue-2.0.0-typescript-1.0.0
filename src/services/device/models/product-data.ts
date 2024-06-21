import { z } from 'zod';
import { productArchetype } from './product-archetype';

/**
 * The shape of the model inside the application code - what the users use
 */
export const productData = z.object({
  modelId: z.string().optional(),
  manufacturerName: z.string().optional(),
  productName: z.string().optional(),
  productArchetype: productArchetype.optional(),
  certified: z.boolean().optional(),
  softwareVersion: z
    .string()
    .regex(/\d+\.\d+\.\d+/)
    .optional(),
  hardwarePlatformType: z.string().optional(),
});

/**
 *
 * @typedef  {ProductData} productData
 * @property {string} - Unique identification of device model
 * @property {string} - Name of device manufacturer
 * @property {string} - Name of the product
 * @property {ProductArchetype} - The default archetype given by manufacturer. Can be changed by user.
 * @property {boolean} - This device is Hue certified
 * @property {string} - Software version of the product
 * @property {string} - Hardware type; identified by Manufacturer code and ImageType
 */
export type ProductData = z.infer<typeof productData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const productDataResponse = z
  .object({
    model_id: z.string().optional(),
    manufacturer_name: z.string().optional(),
    product_name: z.string().optional(),
    product_archetype: productArchetype.optional(),
    certified: z.boolean().optional(),
    software_version: z
      .string()
      .regex(/\d+\.\d+\.\d+/)
      .optional(),
    hardware_platform_type: z.string().optional(),
  })
  .transform((data) => ({
    modelId: data['model_id'],
    manufacturerName: data['manufacturer_name'],
    productName: data['product_name'],
    productArchetype: data['product_archetype'],
    certified: data['certified'],
    softwareVersion: data['software_version'],
    hardwarePlatformType: data['hardware_platform_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const productDataRequest = productData.transform((data) => ({
  model_id: data['modelId'],
  manufacturer_name: data['manufacturerName'],
  product_name: data['productName'],
  product_archetype: data['productArchetype'],
  certified: data['certified'],
  software_version: data['softwareVersion'],
  hardware_platform_type: data['hardwarePlatformType'],
}));
