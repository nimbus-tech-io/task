import { z } from 'zod';

export const updateProductRequestSchema = z.object({
    description: z.string(),
    price: z.number().min(1),
    stockQuantity: z.number().min(1),
    categoryId: z.string().uuid(),
});

export type UpdateProductRequest = z.infer<typeof updateProductRequestSchema>;
