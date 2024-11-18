import { z } from 'zod';
import { categoryResponseSchema } from './category.response';

export const productResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stockQuantity: z.number(),
  userId: z.string().uuid(),
  category: categoryResponseSchema,
});

export type ProductResponse = z.infer<typeof productResponseSchema>;
