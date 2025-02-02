import { z } from "zod";

export const LoginSchema = z.object({
  name: z.string().min(1, "name is required").optional(),
  email: z
    .string()
    .min(1, "email is required")
    .email("Invalid email address")
    .optional(),
  username: z.string().min(1, "username is required"),
  password: z.string().min(1, "password is required"),
});
