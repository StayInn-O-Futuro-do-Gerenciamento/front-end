import { z } from "zod";

export const registerRegisterManagerSchemas = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

export type registerManagerData = z.infer<
  typeof registerRegisterManagerSchemas
>;
