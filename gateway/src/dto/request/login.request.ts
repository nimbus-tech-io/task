import { z } from 'zod';

export const loginRequestSchema = z.object({
    email: z.string({ invalid_type_error: 'Enter valid email' }).email({ message: 'Enter valid email' }),
    password: z.string().min(5, 'Password should contain minimum 5 characters'),
});

export type LoginRequest = z.infer<typeof loginRequestSchema>;
