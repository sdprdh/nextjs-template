import { z } from 'zod';

export const SignUpSchema = z
    .object({
        name: z
            .string()
            .nonempty({ error: 'Ups! Nama belum diisi nih.' })
            .min(3, { error: 'Nama minimal 3 huruf ya!' })
            .max(20, {
                error: 'Namanya kepanjangan, maksimal 20 karakter ya.',
            }),

        email: z
            .string()
            .nonempty({ error: 'Yuk isi email dulu.' })
            .email({ error: 'Email-nya kayaknya salah deh.' }),

        password: z
            .string()
            .nonempty({ error: 'Jangan lupa isi kata sandi, ya!' })
            .min(6, { error: 'Kata sandi minimal 6 karakter ya.' }),

        confirmPassword: z
            .string()
            .nonempty({ error: 'Tolong isi juga konfirmasi kata sandinya.' })
            .min(6, {
                error: 'Konfirmasi kata sandi minimal 6 karakter.',
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: 'Hmm... kata sandi-nya nggak sama, coba dicek lagi ya!',
        path: ['confirmPassword'],
    });

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
