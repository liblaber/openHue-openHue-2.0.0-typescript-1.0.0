import { z } from 'zod';

export const productArchetype = z.enum([
  'bridge_v2',
  'unknown_archetype',
  'classic_bulb',
  'sultan_bulb',
  'flood_bulb',
  'spot_bulb',
  'candle_bulb',
  'luster_bulb',
  'pendant_round',
  'pendant_long',
  'ceiling_round',
  'ceiling_square',
  'floor_shade',
  'floor_lantern',
  'table_shade',
  'recessed_ceiling',
  'recessed_floor',
  'single_spot',
  'double_spot',
  'table_wash',
  'wall_lantern',
  'wall_shade',
  'flexible_lamp',
  'ground_spot',
  'wall_spot',
  'plug',
  'hue_go',
  'hue_lightstrip',
  'hue_iris',
  'hue_bloom',
  'bollard',
  'wall_washer',
  'hue_play',
  'vintage_bulb',
  'vintage_candle_bulb',
  'ellipse_bulb',
  'triangle_bulb',
  'small_globe_bulb',
  'large_globe_bulb',
  'edison_bulb',
  'christmas_tree',
  'string_light',
  'hue_centris',
  'hue_lightstrip_tv',
  'hue_lightstrip_pc',
  'hue_tube',
  'hue_signe',
  'pendant_spot',
  'ceiling_horizontal',
  'ceiling_tube',
]);

export type ProductArchetype = z.infer<typeof productArchetype>;
