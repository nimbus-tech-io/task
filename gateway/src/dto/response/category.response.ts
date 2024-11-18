import { z } from 'zod';


export const categoryResponseSchema = z
    .object({
        id: z.string().uuid(),
        name: z.string(),
    });

export type CategoryResponse = z.infer<typeof categoryResponseSchema>;
