import { z } from 'zod';

export const SignInSchema = z.object({
    email: z
        .string()
        .nonempty({ error: 'Email-nya belum diisi nih.' })
        .email({ error: 'Email-nya kayaknya salah deh.' }),

    password: z
        .string()
        .nonempty({ error: 'Isi dulu kata sandinya ya.' })
        .min(6, { error: 'Kata sandi minimal 6 karakter.' }),
});

export type TSignInSchema = z.infer<typeof SignInSchema>;
