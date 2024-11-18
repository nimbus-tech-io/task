import { z } from 'zod';

export const createProductRequestSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().min(1),
    stockQuantity: z.number().min(1),
    categoryId: z.string().uuid(),
    userId: z.string().uuid(),
});

export type CreateProductRequest = z.infer<typeof createProductRequestSchema>;
