import { z } from "zod";

export const registerLoginSchemas = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

export type registerLoginData = z.infer<typeof registerLoginSchemas>;
